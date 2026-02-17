
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    const apiKey = process.env.API_KEY;
    if (apiKey && apiKey !== 'undefined') {
      this.ai = new GoogleGenAI({ apiKey });
    }
  }

  async fetchOrgInsights() {
    if (!this.ai) return null;
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Research the GitHub organization 'ProjectMalibulul' and the users PrakyathPNayak, Cyberknp, Lazy-picker, and Akshara026. Summarize their collective technical identity and suggest 3 innovative 'small scale project' ideas they should build next for the general public. Format as professional JSON with 'identity' and 'nextProjects' (title, description).",
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json"
        },
      });

      const text = response.text || '{}';
      const cleanJson = text.replace(/```json|```/g, '').trim();
      const data = JSON.parse(cleanJson);
      
      const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
        title: chunk.web?.title || 'GitHub Profile',
        uri: chunk.web?.uri || '#'
      })) || [];

      return { data, sources };
    } catch (error) {
      console.warn("Gemini insights unavailable:", error);
      return null;
    }
  }

  async generateGreeting(location?: { lat: number; lng: number }) {
    if (!this.ai) return "Architecting small tools for big change.";
    try {
      const prompt = location 
        ? `Generate a 1-sentence welcoming greeting for the Malibulul portfolio site. Mention the general vicinity of (lat: ${location.lat.toFixed(2)}, lng: ${location.lng.toFixed(2)}) in a cool, tech-focused way.`
        : "Generate a 1-sentence edgy and professional welcome message for the Malibulul engineering collective.";
      
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });
      return response.text;
    } catch {
      return "Welcome to the future of small-scale engineering.";
    }
  }
}
