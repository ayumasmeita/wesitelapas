
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/gemini';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Halo! Saya asisten digital Lapas Kerobokan. Ada yang bisa saya bantu terkait jadwal kunjungan atau layanan kami?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiMsg = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiMsg }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col h-[500px]">
          <div className="bg-blue-900 p-4 text-white">
            <h3 className="font-bold flex items-center space-x-2">
              <i className="fas fa-robot"></i>
              <span>Asisten Digital Kerobokan</span>
            </h3>
            <p className="text-xs text-blue-100 mt-1 opacity-80">Online | AI Powered</p>
          </div>

          <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-900 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-200 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-slate-100 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ketik pertanyaan..."
              className="flex-grow bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-900 outline-none"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 disabled:opacity-50"
              disabled={isLoading}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
