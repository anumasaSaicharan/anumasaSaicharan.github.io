
import React, { useState, useRef, useEffect } from 'react';
import { askAssistant } from '../services/gemini';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hello. I'm Sai's AI representation. How can I help you explore his 4+ years of Java Full Stack expertise today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isTyping) return;

    const userMsg = query.trim();
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await askAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[150] transition-all duration-300 ${isOpen ? 'w-[90%] md:w-[400px]' : 'w-16 h-16'}`}>
      {isOpen ? (
        <div className="w-full h-[500px] md:h-[600px] bg-white rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="p-6 md:p-8 bg-blue-gradient text-white flex justify-between items-center">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-80">Portfolio AI</p>
              <h4 className="text-lg font-bold tracking-tight">Concierge Assistant</h4>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-gray-50/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 md:p-5 rounded-2xl text-[13px] md:text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' ? 'bg-[#2d3436] text-white rounded-tr-none' : 'bg-white text-gray-600 rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none text-xs italic text-gray-300 animate-pulse border border-gray-100">
                  Thinking...
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 md:p-6 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything..."
                className="w-full bg-gray-50 border-none rounded-full py-3 md:py-4 px-6 text-sm focus:ring-2 focus:ring-[#4facfe]/20 focus:outline-none text-[#2d3436] pr-12"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#4facfe] hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-white border border-gray-100 text-[#4facfe] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative group"
        >
          <div className="absolute inset-0 bg-[#4facfe]/10 rounded-full animate-ping group-hover:hidden" />
          <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;
