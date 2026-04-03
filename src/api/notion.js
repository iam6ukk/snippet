export async function saveToNotion(snippetData) {
  try {
    const response = await fetch('/.netlify/functions/notion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(snippetData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to save to Notion');
    }

    return result;
  } catch (error) {
    console.error('saveToNotion failed:', error);
    throw error;
  }
}
