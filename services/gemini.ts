
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Anda adalah Asisten Digital Resmi dari Lapas Kelas IIA Kerobokan, Bali. 
        Tugas Anda adalah memberikan informasi yang akurat, sopan, dan profesional kepada pengunjung website. 
        Informasi utama meliputi:
        1. Jam kunjungan: Senin-Kamis (09.00-12.00) dan (13.30-15.00).
        2. Syarat kunjungan: KTP asli, menunjukkan bukti vaksin, atau surat keterangan sehat.
        3. Layanan Integrasi (PB, CB, CMB) tidak dipungut biaya (Gratis).
        4. Lokasi: Jl. Tangkuban Perahu No.1, Kerobokan Kelod, Kuta Utara, Badung, Bali.
        Gunakan bahasa Indonesia yang formal namun ramah. Jika pertanyaan di luar konteks Lapas, arahkan pengguna untuk bertanya seputar layanan Lapas.`,
      },
    });
    return response.text || "Maaf, saya sedang mengalami kendala teknis. Silakan coba lagi nanti.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI.";
  }
};
