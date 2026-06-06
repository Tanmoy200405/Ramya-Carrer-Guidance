import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="min-h-screen w-full bg-white flex flex-col items-center relative overflow-hidden">
      {/* 🏛️ Heritage Header Image Section */}
      <div className="w-full h-[55vh] lg:h-[65vh] relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=100" 
            className="w-full h-full object-cover scale-105" 
            alt="Students Collaborating" 
         />
         {/* Academic Overlay */}
         <div className="absolute inset-0 bg-[var(--primary)]/65 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-6 sm:p-10">
            <div className="w-16 lg:w-24 h-[3px] bg-[var(--tertiary)] mb-8 animate-blink shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
            <h1 className="text-white text-3xl sm:text-4xl lg:text-7xl font-serif max-w-5xl italic leading-tight drop-shadow-2xl">
              “Education is the key to unlock <br className="hidden md:block" /> 
              the golden door of freedom.”
            </h1>
         </div>
         {/* Subtle Vignette */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.3))] pointer-events-none" />
      </div>
      
      {/* 📜 Content Card Section */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 relative z-10 -mt-24 sm:-mt-32 pb-16">
         <div className="bg-white p-8 sm:p-12 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.08)] rounded-sm border-t-[6px] border-[var(--tertiary)] grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 sm:space-y-10">
               <div className="flex items-center gap-4 animate-fadeUp">
                  <div className="p-3 bg-[var(--tertiary)]/10 rounded-full">
                     <FaGraduationCap className="text-[var(--tertiary)] text-2xl lg:text-3xl" />
                  </div>
                  <div className="text-[var(--primary)] font-bold tracking-[0.25em] text-[10px] lg:text-xs uppercase animate-blink">
                    2026 Batch Admissions Open
                  </div>
               </div>
               
               <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-serif text-[var(--primary)] leading-[1] tracking-tighter sm:tracking-normal">
                 Your Direct Path <br /> 
                 <span className="text-[var(--tertiary)] italic">Into Excellence.</span>
               </h2>
               
               <p className="text-[var(--primary)]/70 text-base lg:text-lg leading-relaxed max-w-lg font-medium">
                 Navigate your academic future with certainty. We provide end-to-end guidance for the most prestigious institutions in India.
               </p>

               <button 
                  onClick={() => {
                    const phoneNumber = "917003973892";
                    const message = "Hi, I need guidance regarding college admissions.";
                    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(url, "_blank");
                  }}
                  className="px-10 py-5 bg-[var(--primary)] text-white font-bold tracking-[0.2em] uppercase hover:bg-[var(--tertiary)] hover:tracking-[0.3em] transition-all duration-500 shadow-xl text-sm lg:text-base"
               >
                 Consult For Free
               </button>
            </div>

            {/* Right Features Grid */}
            <div className="grid grid-cols-1 gap-5 lg:gap-8 animate-fadeUp">
               {[
                 { title: "Explore Courses", desc: "Scroll down to discover our comprehensive range of premium courses." },
                 { title: "Submit Enquiry", desc: "Select your desired path and fill out the quick enquiry form." },
                 { title: "We Handle The Rest", desc: "Our expert counselors will call you and handle the admission process." }
               ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 p-6 sm:p-8 bg-[#FDFDFD] hover:bg-[var(--tertiary)]/5 active:bg-[var(--tertiary)]/10 transition-all duration-300 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] lg:shadow-none group active:scale-[0.98] cursor-pointer rounded-xl lg:rounded-none">
                     <div className="text-3xl lg:text-4xl font-serif text-[var(--tertiary)] opacity-80 lg:opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                     <div className="space-y-1">
                        <div className="text-[var(--primary)] font-bold text-lg lg:text-xl uppercase tracking-tight">{item.title}</div>
                        <p className="text-[var(--primary)]/60 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>
    </div>
  );
};

export default Home;