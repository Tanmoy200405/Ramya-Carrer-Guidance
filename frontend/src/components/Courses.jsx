import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight, FaTimes, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { coursesData } from "../Data/CourseData";
import { HeadData } from "../Data/HeadData";

const CourseModal = ({ course, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (course) {
      setShowForm(false);
      setFormData({ name: '', email: '', phone: '' });
      setStatus({ type: '', message: '' });
      gsap.fromTo(modalRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(contentRef.current, 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.5, delay: 0.1, ease: "back.out(1.7)" }
      );
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [course]);

  if (!course) return null;

  const whatsappUrl = `https://wa.me/${HeadData[0].floating_whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in learning more about ${course.category} / ${course.title} courses.`)}`;

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      let API_URL = import.meta.env.VITE_API_URL;
      if (API_URL) API_URL = API_URL.replace(/\/$/, "");
      
      if (!API_URL) {
        setStatus({ type: "error", message: "API URL is missing." });
        setLoading(false);
        return;
      }

      await axios.post(`${API_URL}/api/students`, formData);
      window.open(whatsappUrl, '_blank');
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ type: "error", message: "Failed to submit. Redirecting..." });
      // Still redirect to whatsapp even if tracking fails?
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        onClose();
      }, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[var(--primary)]/40 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        ref={contentRef}
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2.5 md:p-3 bg-white/80 backdrop-blur-sm rounded-full text-[var(--primary)] hover:bg-[var(--tertiary)] hover:text-white transition-all shadow-lg"
        >
          <FaTimes />
        </button>

        {/* Left Side: Image & Highlights */}
        <div className="w-full md:w-[40%] bg-[var(--primary)] relative h-[220px] md:h-auto md:min-h-full flex-shrink-0">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600&h=600'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-transparent to-transparent"></div>
          <div className="absolute bottom-5 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-white">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 mb-1.5 md:mb-2">{course.category}</div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-3 md:mb-4">{course.title}</h3>
            <div className="w-12 h-1 bg-[var(--tertiary)] rounded-full"></div>
          </div>
        </div>

        {/* Right Side: Details & CTA */}
        <div className="w-full md:w-[60%] flex-1 p-6 sm:p-8 md:p-12 overflow-y-auto">
          {!showForm ? (
            <div className="space-y-8">
              <section>
                <h4 className="text-[var(--primary)] font-bold tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[var(--tertiary)]"></span>
                  Overview
                </h4>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg italic">
                  "{course.desc}"
                </p>
              </section>

              <section>
                <h4 className="text-[var(--primary)] font-bold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[var(--tertiary)]"></span>
                  Key Programs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <FaCheckCircle className="text-[var(--tertiary)] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 text-sm font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 border-t border-gray-100">
                <button 
                  onClick={() => setShowForm(true)}
                  className="flex-1 flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-[0_10px_20px_-5px_#25D366] transition-all duration-300 text-sm sm:text-base"
                >
                  <FaWhatsapp className="text-lg sm:text-xl" />
                  GET FREE COUNSELLING
                </button>
                <button 
                  onClick={onClose}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-xl hover:bg-[var(--primary)] hover:text-white transition-all text-sm sm:text-base"
                >
                  CLOSE
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="mb-6">
                <h4 className="text-2xl font-serif font-bold text-[var(--primary)] mb-2">Almost there!</h4>
                <p className="text-gray-500 text-sm">Please provide your details to connect with our counselor via WhatsApp.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" name="name" value={formData.name} onChange={handleFormChange} required
                    placeholder="Your Full Name"
                    className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleFormChange} required
                    placeholder="Your Email Address"
                    className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-1">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required
                    placeholder="Your Phone Number"
                    className="w-full bg-[#f4f8f6] border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--tertiary)] outline-none transition-all font-serif"
                  />
                </div>
                {status.message && (
                  <div className={`p-3 rounded-lg text-sm font-bold ${status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {status.message}
                  </div>
                )}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button 
                    type="submit" disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-[0_10px_20px_-5px_#25D366] transition-all duration-300 disabled:opacity-70"
                  >
                    <FaWhatsapp className="text-lg" />
                    {loading ? "CONNECTING..." : "PROCEED TO WHATSAPP"}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-xl hover:bg-[var(--primary)] hover:text-white transition-all text-sm"
                  >
                    BACK
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const sliderRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(4);
  const isAnimating = useRef(false);

  // We append clones of the first few items to the end for a seamless loop
  const displayData = [...coursesData, ...coursesData.slice(0, 4)];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 AUTOPLAY LOGIC
  useEffect(() => {
    if (selectedCourse) return; // Pause autoplay if modal is open

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsToShow, currentIndex, selectedCourse]);

  const nextSlide = () => {
    if (isAnimating.current) return;
    
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);

    if (nextIndex === coursesData.length) {
      isAnimating.current = true;
      setTimeout(() => {
        gsap.set(sliderRef.current, { x: 0 });
        setCurrentIndex(0);
        isAnimating.current = false;
      }, 800);
    }
  };

  const prevSlide = () => {
    if (isAnimating.current) return;

    if (currentIndex === 0) {
      const cards = sliderRef.current.children;
      const parentStyle = window.getComputedStyle(sliderRef.current);
      const gap = parseFloat(parentStyle.columnGap) || 0;
      const cardWidth = cards[0].offsetWidth + gap;

      gsap.set(sliderRef.current, { x: -(coursesData.length * cardWidth) });
      setCurrentIndex(coursesData.length - 1);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const updateSlider = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const cards = sliderRef.current.children;
        const parentStyle = window.getComputedStyle(sliderRef.current);
        const gap = parseFloat(parentStyle.columnGap) || 0;
        const cardWidth = cards[0].offsetWidth + gap;
        
        gsap.to(sliderRef.current, {
          x: -(currentIndex * cardWidth),
          duration: 0.8,
          ease: "power3.inOut"
        });
      }
    };

    updateSlider();
    window.addEventListener("resize", updateSlider);
    return () => window.removeEventListener("resize", updateSlider);
  }, [currentIndex]);

  return (
    <section id="courses" className="w-full py-10 md:py-16 bg-white relative overflow-hidden flex flex-col items-center">
      
      {/* 🔹 DOT GRID OVERLAY */}
      <div className="absolute inset-0 z-0 opacity-[0.05] mix-blend-multiply" 
           style={{ 
             backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`, 
             backgroundSize: '25px 25px' 
           }}>
      </div>

      <div className="w-[90%] max-w-7xl relative z-10 flex flex-col items-center">
        {/* 🔹 HEADER */}
        <div className="flex flex-col items-center mb-6 md:mb-8 px-4 relative w-full text-center">
          <div className="relative z-10 flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[4.2rem] sm:text-[6rem] md:text-[8rem] font-serif font-bold text-[var(--primary)] opacity-[0.06] whitespace-nowrap pointer-events-none select-none z-0 tracking-widest overflow-hidden mix-blend-multiply">
              COURSES
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--primary)] leading-tight relative z-10">
              Courses <span className="text-[var(--tertiary)] italic">we guide.</span>
            </h2>
            <div className="w-12 md:w-16 h-1 bg-[var(--tertiary)] mt-3 md:mt-4 rounded-full relative z-10"></div>
          </div>
        </div>

        {/* 🔹 SLIDER CONTAINER WITH SIDE ARROWS */}
        <div className="relative w-full px-2 sm:px-12">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[var(--primary)] bg-white hover:bg-[var(--primary)] hover:text-white shadow-lg text-[var(--primary)] flex items-center justify-center transition-all`}
            aria-label="Previous Slide"
          >
            <FaArrowLeft className="text-sm sm:text-xl" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[var(--primary)] bg-white hover:bg-[var(--primary)] hover:text-white shadow-lg text-[var(--primary)] flex items-center justify-center transition-all`}
            aria-label="Next Slide"
          >
            <FaArrowRight className="text-sm sm:text-xl" />
          </button>

          <div className="overflow-hidden">
            <div ref={sliderRef} className="flex gap-6 py-4">
              {displayData.map((course, index) => (
                <CourseCard 
                  key={index} 
                  course={course} 
                  isActive={(index % coursesData.length) === (currentIndex % coursesData.length)}
                  onLearnMore={() => setSelectedCourse(course)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 COURSE MODAL */}
      <CourseModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />
    </section>
  );
};

const CourseCard = ({ course, isActive, onLearnMore }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] border border-gray-100 rounded-[3rem] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.04)]
                 transition-all duration-700 group h-full min-h-[550px]
                 ${isActive ? 'bg-[var(--tertiary)] shadow-2xl scale-[1.02]' : 'bg-white'}`}
    >
      {/* 🔹 CIRCLE IMAGE OVERLAY */}
      <div className="relative mb-8 mt-4">
          <div className={`absolute inset-x-[-10px] inset-y-[-10px] rounded-full border-2 border-[var(--tertiary)] transition-all duration-500
                          ${isActive ? 'scale-110 opacity-40' : 'opacity-20'}`}></div>
          
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-white">
            <img 
              src={course.image} 
              alt={course.title} 
              className={`w-full h-full object-cover transition-all duration-700 
                          ${isActive ? 'grayscale-0 scale-110' : 'grayscale'}`}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400&h=400'; }}
            />
          </div>
      </div>

      <p className={`text-[10px] font-bold tracking-[0.25em] mb-3 uppercase transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-[var(--tertiary)]'}`}>
          {course.id} / {course.category}
      </p>

      <h3 className={`text-xl md:text-2xl font-bold font-serif mb-4 transition-colors duration-300 leading-tight
                     ${isActive ? 'text-white' : 'text-[var(--primary)]'}`}>
        {course.title}
      </h3>

      {/* 🔹 ITEMS LIST */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {(isExpanded ? course.items : course.items.slice(0, 4)).map((item, i) => (
          <span key={i} className={`text-[9px] px-2 py-0.5 rounded-full border border-current opacity-70 transition-colors
                                   ${isActive ? 'text-white border-white/30' : 'text-gray-400 border-gray-200'}`}>
            {item}
          </span>
        ))}
        {course.items && course.items.length > 4 && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className={`text-[9px] px-2 py-0.5 opacity-90 font-bold transition-all border-b border-transparent hover:border-current
                       ${isActive ? 'text-white' : 'text-[var(--tertiary)]'}`}
          >
            {isExpanded ? "SHOW LESS" : `+${course.items.length - 4} MORE`}
          </button>
        )}
      </div>

      <p className={`text-sm leading-relaxed mb-8 flex-grow transition-colors duration-300 font-light px-2
                    ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
        {course.desc}
      </p>

      <div className="mt-auto w-full flex justify-center">
        <button 
          onClick={onLearnMore}
          className={`text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-colors flex items-center gap-3
                          ${isActive ? 'text-white' : 'text-[var(--primary)]'}`}
        >
           LEARN MORE
           <span className={`h-[1px] transition-all duration-500
                          ${isActive ? 'bg-white w-12' : 'bg-[var(--primary)] w-8'}`}></span>
        </button>
      </div>
    </div>
  );
};

export default Courses;