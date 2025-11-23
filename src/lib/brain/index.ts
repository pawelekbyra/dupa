import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  // We'll warn but allow it to proceed so build doesn't fail if key is missing
  console.warn("GEMINI_API_KEY is not set.");
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({ model: "gemini-pro" }) : null;

export async function askBrain(prompt: string): Promise<string> {
  if (!model) {
    return "Error: GEMINI_API_KEY is missing. I cannot think.";
  }

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Brain Error:", error);
    return "An error occurred while processing your request.";
  }
}
