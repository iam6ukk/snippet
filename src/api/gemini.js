export async function analyzeWithGemini(title, content) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;

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

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Gemini API Error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();

    // Gemini response structure: data.candidates[0].content.parts[0].text
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!resultText) {
      throw new Error('Empty response from Gemini');
    }

    // Since we set response_mime_type to application/json, 
    // Gemini should return a valid JSON string.
    const cleaned = resultText.trim().replace(/^```json|^```|```$/g, '').trim();
    return JSON.parse(cleaned);

  } catch (error) {
    console.error('analyzeWithGemini failed:', error);
    throw error;
  }
}
