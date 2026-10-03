import React, { useState, useRef, useEffect } from 'react';
import { askAssistant } from '../services/gemini';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hi. I'm Sai's portfolio assistant. Ask me about his Java, Spring Boot, enterprise systems, projects, or technical experience." }
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
        <div className="w-full h-[500px] md:h-[600px] bg-white rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-gray-200 duration-500">
          <div className="p-5 md:p-6 bg-slate-900 text-white flex justify-between items-center">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-400">AI Assistant</p>
              <h4 className="text-base font-bold tracking-tight">Portfolio Concierge</h4>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 md:p-6 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 md:p-4 rounded-xl text-[13px] md:text-sm leading-relaxed ${
                  msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-700 rounded-tl-none border border-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-xl rounded-tl-none text-xs text-gray-400 animate-pulse border border-gray-200">
                  Thinking...
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
            <div className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything..."
                className="w-full bg-gray-100 border-none rounded-full py-3 px-5 text-sm focus:ring-2 focus:ring-blue-500/50 focus:outline-none text-gray-800 pr-12"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 border border-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 relative group"
        >
          <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;
