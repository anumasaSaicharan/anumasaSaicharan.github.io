
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <div className="relative order-2 lg:order-1 min-h-[550px] md:min-h-0 flex items-center justify-center">
            {/* Responsive Card Layout without absolute overflow */}
            <div className="relative w-full flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-6 py-6 z-20">
              {/* Card 1 */}
              <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-xl border border-gray-50 w-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-inner">
                  <span className="text-xl md:text-2xl">🎨</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#2d3436] mb-2">Full Stack Design</h4>
                <p className="text-[9px] md:text-[10px] font-extrabold text-gray-300 uppercase tracking-widest">UI & Logic Integration ▲</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-xl border border-gray-50 w-full md:mt-12 lg:mt-0 lg:ml-12 hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-inner">
                  <span className="text-xl md:text-2xl">💡</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#2d3436] mb-2">Architecture</h4>
                <p className="text-[9px] md:text-[10px] font-extrabold text-gray-300 uppercase tracking-widest">Scalable Systems ▲</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-xl border border-gray-50 w-full hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1 lg:-ml-6">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-inner">
                  <span className="text-xl md:text-2xl">💻</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#2d3436] mb-2">Backend Dev</h4>
                <p className="text-[9px] md:text-[10px] font-extrabold text-gray-300 uppercase tracking-widest">Java & Cloud Ops ▲</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[90%] md:h-[70%] bg-[#4facfe]/5 md:bg-[#4facfe]/10 -z-10 rounded-[60px] md:rounded-[80px] rotate-[-6deg]" />
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col justify-center py-10">
            <span className="text-xs font-bold text-pink-400 uppercase tracking-[0.3em] mb-4 block">Expertise & Service</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-8 leading-tight">What Can I Do?</h2>
            <p className="text-gray-500 text-base md:text-lg mb-12 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              I help bridge the gap between complex business logic and exceptional user experience. My systems are architected for high-throughput, ensuring stability for 200k+ active users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-12 justify-center lg:justify-start items-center lg:items-start">
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-2 tracking-tighter">4+</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-2 tracking-tighter">200k+</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Enterprise Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
