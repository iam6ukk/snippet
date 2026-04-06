export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const DATABASE_ID = process.env.NOTION_DATABASE_ID;

  try {
    const { title, skill, tags, summary, concepts, code } = JSON.parse(event.body);

    const today = new Date().toISOString().split('T')[0];

    const children = [
      {
        object: 'block',
        type: 'heading_2',
        heading_2: { rich_text: [{ type: 'text', text: { content: '요약' } }] },
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: summary } }] },
      },
      {
        object: 'block',
        type: 'heading_2',
        heading_2: { rich_text: [{ type: 'text', text: { content: '핵심 개념' } }] },
      },
      ...concepts.map(concept => ({
        object: 'block',
        type: 'bulleted_list_item',
        bulleted_list_item: { rich_text: [{ type: 'text', text: { content: concept } }] },
      })),
    ];

    if (code) {
      children.push(
        {
          object: 'block',
          type: 'heading_2',
          heading_2: { rich_text: [{ type: 'text', text: { content: '코드 예시' } }] },
        },
        {
          object: 'block',
          type: 'code',
          code: {
            rich_text: [{ type: 'text', text: { content: code } }],
            language: (() => {
              const s = skill?.toLowerCase();
              if (s === 'python') return 'python';
              if (s === 'css') return 'css';
              if (s === 'node.js') return 'javascript';
              return 'javascript';
            })(),
          },
        }
      );
    }

    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: DATABASE_ID },
        properties: {
          제목: {
            title: [{ text: { content: title } }],
          },
          스킬: {
            select: { name: skill },
          },
          요약: {
            rich_text: [{ text: { content: summary } }],
          },
          태그: {
            multi_select: tags.map(tag => ({ name: tag })),
          },
          생성일: {
            date: { start: today },
          },
        },
        children: children,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: result.message || 'Notion API Error' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, pageId: result.id }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
