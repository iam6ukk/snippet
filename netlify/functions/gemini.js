export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "GEMINI_API_KEY is not configured" }),
    };
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;

  try {
    const { title, content } = JSON.parse(event.body);
    const prompt = `Title: ${title}\nContent: ${content}`;

    const requestBody = {
      system_instruction: {
        parts: [
          {
            text: `You are a developer knowledge analyzer. 
Analyze the given text and return ONLY a JSON object with no markdown, no backticks, no explanation.

JSON structure:
{
  "skill": "primary technology (e.g. React, Python, Docker)",
  "tags": ["array", "of", "short", "keywords"],
  "summary": "one or two sentence summary in Korean",
  "concepts": ["핵심 개념 1", "핵심 개념 2", ...],
  "code": "code example string or null if no code needed"
}`
          }
        ]
      },
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ],
      generationConfig: {
        response_mime_type: "application/json"
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: data.error?.message || response.statusText }),
      };
    }

    // Gemini response structure: data.candidates[0].content.parts[0].text
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!resultText) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Empty response from Gemini' }),
      };
    }

    // Since we set response_mime_type to application/json, 
    // Gemini should return a valid JSON string.
    const cleaned = resultText.trim().replace(/^```json|^```|```$/g, '').trim();
    
    return {
      statusCode: 200,
      body: JSON.stringify(JSON.parse(cleaned)),
    };

  } catch (error) {
    console.error('Gemini function failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
