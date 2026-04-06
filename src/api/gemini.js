export async function analyzeWithGemini(title, content) {
  try {
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Gemini API Error: ${errorData.error || response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('analyzeWithGemini failed:', error);
    throw error;
  }
}
