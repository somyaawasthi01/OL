import { GoogleGenAI } from "@google/genai";

const resolveApiKey = () => {
  return (
    import.meta.env.VITE_API_KEY ||
    import.meta.env.VITE_GEMINI_API_KEY ||
    import.meta.env.VITE_GOOGLE_GENAI_API_KEY ||
    ''
  );
};

export const consultAI = async (query: string, profile?: { [key: string]: any }) => {
  const apiKey = resolveApiKey();
  if (!apiKey) {
    throw new Error('Missing Gemini API key. Set VITE_API_KEY in your .env.local.');
  }

  const ai = new GoogleGenAI({ apiKey });
  const isProfessional = profile?.mode === 'professional';
  const context = profile ?
    `User Profile: Skin Goal: ${profile.mainSkinConcern}, Hair Goal: ${profile.mainHairConcern}, Allergies: ${profile.ingredientAllergies?.join(', ') || 'None'}.` :
    '';

  const systemInstruction = `You are a warm, caring, and expert clinical dermatology advisor named "The Guide".
  Your mission is to help the user understand their skin and hair biology with deep compassion and clinical accuracy.
  
  ${isProfessional ?
    'Use technical medical terminology (TEWL, acid mantle, cytokines). Cite research like AAD and NIH.' :
    'Use simple, friendly, and encouraging language. Explain complex biological processes in a way that feels like a TED talk meets Instagram—inviting and cool.'}
  
  Instructions:
  - Always start with a warm, caring greeting.
  - Use bullet points for clarity.
  - Use emojis occasionally to maintain a friendly, modern vibe ✨.
  - Keep answers under 180 words.
  - If the query involves ingredients or allergies, include a "Safety Check" section.
  - MANDATORY: End every response by kindly reminding the user that while you are here to help, they MUST consult a certified dermatologist for professional medical guidance and personalized prescriptions.
  
  Context: ${context}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: systemInstruction,
      },
    });

    const text = response.text || "I'm sorry, I couldn't process that request. Let's try again! 💖";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    return {
      answer: text,
      sources: sources,
    };
  } catch (error) {
    console.error("Dermatology AI Error:", error);
    throw error;
  }
};
