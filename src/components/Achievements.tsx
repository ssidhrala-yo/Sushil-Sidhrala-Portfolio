import React, { useState, useRef } from "react";
import { 
  Award, 
  Check, 
  ZoomIn, 
  X, 
  Heart, 
  Users, 
  ShieldAlert, 
  Sparkles, 
  MapPin, 
  Calendar,
  Layers,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface KudosCert {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
  details: string[];
  icon: React.ReactNode;
}

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<"kudos" | "champion">("kudos");
  const [activeKudosIndex, setActiveKudosIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth"
      });
      setActiveImageIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / clientWidth);
        const imagesLength = 2; // Airport Champion has 2 images
        if (index !== activeImageIndex && index >= 0 && index < imagesLength) {
          setActiveImageIndex(index);
        }
      }
    }
  };

  const kudosCerts: KudosCert[] = [
    {
      id: "KUDOS-CSMIA-01",
      title: "Passenger Service Quality & Empathy Award",
      issuer: "CSMIA/MIAL Terminal Operation Head",
      date: "August 2025",
      badge: "Passenger Choice",
      icon: <Heart className="w-5 h-5 text-brand-gold animate-pulse" />,
      description: "Awarded for exceptional proactive customer service, handling elderly transit passengers and conflict resolution during unexpected peak peak hours scheduling shifts.",
      details: [
        "Maintained perfect 100% resolution feedback scored across digital response logs.",
        "Aided multiple stranded international flights with precise cross-terminal transit connections.",
        "Commended officially by terminal manager for demonstrating high empathy under stress."
      ]
    },
    {
      id: "KUDOS-CSMIA-02",
      title: "Outstanding Operational Compliance standard",
      issuer: "CSMIA/MIAL Terminal Operation Head",
      date: "November 2024",
      badge: "5S compliance",
      icon: <Layers className="w-5 h-5 text-brand-gold" />,
      description: "Awarded for maintaining pristine visual work layouts in compliance with advanced 5S AWMS workplace organization and safety audit standards.",
      details: [
        "Achieved continuous Grade-A reports across consecutive monthly standard safety audits.",
        "Streamlined daily equipment storage maps, reducing shift handover latency by 15%.",
        "Assisted in training junior team members on clean operational workspace protocols."
      ]
    },
    {
      id: "KUDOS-CSMIA-03",
      title: "Cross-Functional Collaboration Excellence",
      issuer: "CSMIA/MIAL Terminal Operation Head",
      date: "February 2025",
      badge: "Team Leadership",
      icon: <Users className="w-5 h-5 text-brand-gold" />,
      description: "Recognized for driving seamless, high-speed coordination loops between airport customs, security checkpoints, and private charter coordinators.",
      details: [
        "Expedited swift movement of special executive transit delegations with zero flight delays.",
        "Established critical standby reporting channels, enhancing terminal-to-gate communication.",
        "Handled urgent rapid escalations due to weather flight detours with expert calmness."
      ]
    }
  ];

  const championAward = {
    title: "Airport Champion of the Month",
    issuer: "Mumbai International Airport Board",
    date: "February 2026",
    description: "outstanding contribution, customer service excellence and commitment to operation standards in airport operations.",
    images: [
      "https://i.ibb.co/wFB62PZm/Airport-Champion.jpg",
      "https://i.ibb.co/9HbhjPj4/Airport-Champion-2.jpg"
    ],
    id: "CHAMP-CSMIA-2026-02",
    alignment: "Applied direct PMBOK risk mitigation structures and rapid passenger routing protocols to achieve absolute zero delays over peak terminals traffic.",
    pillars: [
      "Resolved 5+ high-pressure transit roadblocks in real-time.",
      "Optimized 5S workplace layouts to safety-clean crowded boarding corridors.",
      "Improved positive Passenger feedback that helped the airport to grow"
    ]
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 bg-brand-brown relative overflow-hidden">
      {/* Decorative ambiance backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title block */}
        <div className="text-center space-y-4 mb-14 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">
            Honors & Awards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-beige">
            Recognition & Achievements
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold/40 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-brand-beige/75 font-light">
            Interactive repository of official airport operational accolades, peer kudos, and executive excellence.
          </p>
        </div>

        {/* Master Selector Tabs with premium dark theme */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-brand-brown-dark/90 border border-brand-gold/15 max-w-md w-full shadow-lg">
            <button
              onClick={() => setActiveTab("kudos")}
              className={`flex-1 py-3 px-4 rounded-lg font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === "kudos"
                  ? "bg-brand-gold text-brand-brown shadow-lg font-bold"
                  : "text-brand-beige/70 hover:text-brand-beige hover:bg-brand-brown/40"
              }`}
            >
              Kudos Certificates
            </button>
            <button
              onClick={() => setActiveTab("champion")}
              className={`flex-1 py-3 px-4 rounded-lg font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === "champion"
                  ? "bg-brand-gold text-brand-brown shadow-lg font-bold"
                  : "text-brand-beige/70 hover:text-brand-beige hover:bg-brand-brown/40"
              }`}
            >
              Airport Champion
            </button>
          </div>
        </div>

        {/* Interactive Dynamic Displays block */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: KUDOS CERTIFICATES (Interactive list and detail panel) */}
            {activeTab === "kudos" && (
              <motion.div
                key="kudos-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left side list of Kudos (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-3 bg-brand-brown-dark/30 rounded-xl border border-brand-gold/10 hidden lg:block">
                    <p className="text-xs text-brand-gold-light/80 font-mono font-medium uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
                      <Sparkles size={12} /> Hover or click to inspect details
                    </p>
                  </div>
                  {kudosCerts.map((cert, index) => {
                    const isActive = activeKudosIndex === index;
                    return (
                      <div
                        id={`kudos-item-${index}`}
                        key={cert.id}
                        onMouseEnter={() => {
                          if (activeKudosIndex !== index) {
                            setActiveKudosIndex(index);
                          }
                        }}
                        onClick={() => {
                          if (activeKudosIndex !== index) {
                            setActiveKudosIndex(index);
                          }
                        }}
                        className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                          isActive 
                            ? "bg-brand-brown-dark border-brand-gold/60 shadow-xl scale-[1.01]" 
                            : "bg-brand-brown-dark/45 border-brand-gold/10 hover:border-brand-gold/30 hover:bg-brand-brown-dark/70"
                        }`}
                      >
                        {isActive && (
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold" />
                        )}
                        <div className="flex justify-between items-start mb-2">
                          <div className={`p-2 rounded-lg ${isActive ? "bg-brand-gold/15" : "bg-brand-gold/5"}`}>
                            {cert.icon}
                          </div>
                          <span className="text-[10px] font-mono uppercase bg-brand-gold/10 text-brand-gold px-2.5 py-0.5 rounded border border-brand-gold/20">
                            {cert.badge}
                          </span>
                        </div>
                        <h4 className={`font-serif text-base sm:text-lg font-bold leading-tight ${isActive ? "text-brand-gold-light" : "text-brand-beige"}`}>
                          {cert.title}
                        </h4>
                        <p className="text-xs text-brand-beige/50 font-mono mt-1.5">{cert.issuer} • {cert.date}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Right side Detail Showcase Panel (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="bg-brand-brown-dark p-6 sm:p-8 rounded-2xl border border-brand-gold/20 shadow-2xl relative overflow-hidden">
                    {/* Security digital watermark badge */}
                    <div className="absolute top-0 right-0 w-44 h-44 bg-brand-gold/5 transform translate-x-12 -translate-y-12 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex justify-between items-center pb-4 mb-6 border-b border-brand-gold/15">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-brand-gold fill-brand-gold animate-spin-slow" />
                        <span className="text-[11px] font-mono tracking-widest text-emerald-400 font-semibold uppercase">
                          Appreciation Verified
                        </span>
                      </div>
                      <span className="text-xs font-mono text-brand-beige/50">
                        REF STAMP: {kudosCerts[activeKudosIndex].id}
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider font-mono block mb-1">
                          Appreciation Accolade
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug text-brand-beige">
                          {kudosCerts[activeKudosIndex].title}
                        </h3>
                        <p className="text-sm text-brand-gold-light mt-1 font-medium font-serif">
                          Given by: {kudosCerts[activeKudosIndex].issuer}
                        </p>
                        <p className="text-xs text-brand-beige/50 font-mono mt-1">
                          Date of presentation: {kudosCerts[activeKudosIndex].date}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-brand-brown border border-brand-gold/10">
                          <p className="text-sm sm:text-base text-brand-beige/90 font-light leading-relaxed italic">
                            "{kudosCerts[activeKudosIndex].description}"
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono">
                            Award Core Impact Metrics
                          </h4>
                          <ul className="space-y-2.5">
                            {kudosCerts[activeKudosIndex].details.map((item, idx) => (
                              <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-brand-beige/85 leading-relaxed font-light">
                                <Check size={14} className="text-brand-gold mt-1 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: AIRPORT CHAMPION OF THE MONTH (Accolade with stunning zoomable photographic card layout) */}
            {activeTab === "champion" && (
              <motion.div
                key="champion-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Photo Side Left/Top (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div 
                    className="relative aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden border border-brand-gold/25 bg-brand-brown-dark shadow-2xl flex-grow flex flex-col group"
                  >
                    {/* Horizontal scrollable image container */}
                    <div 
                      ref={scrollContainerRef}
                      onScroll={handleScroll}
                      className="flex-grow w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none relative"
                      style={{ scrollBehavior: "smooth" }}
                    >
                      {championAward.images.map((img, i) => (
                        <div 
                          key={i}
                          onClick={() => setLightboxOpen(true)}
                          className="w-full h-full shrink-0 snap-center relative cursor-zoom-in bg-black/45 flex items-center justify-center"
                        >
                          <img
                            src={img}
                            alt={`Airport Champion representative photo ${i + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain filter-none group-hover:scale-[1.02] transition-transform duration-500 ease-out select-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/60 via-transparent to-brand-brown-dark/10 opacity-30 pointer-events-none" />
                        </div>
                      ))}
                    </div>

                    {/* Left Navigation Arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextIndex = (activeImageIndex - 1 + championAward.images.length) % championAward.images.length;
                        scrollToImage(nextIndex);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-25 w-10 h-10 rounded-full bg-brand-brown-dark/85 border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-brown text-brand-gold flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-md"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    {/* Right Navigation Arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextIndex = (activeImageIndex + 1) % championAward.images.length;
                        scrollToImage(nextIndex);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-25 w-10 h-10 rounded-full bg-brand-brown-dark/85 border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-brown text-brand-gold flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-md"
                      aria-label="Next Image"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Gold Certificate Seal */}
                    <div className="absolute top-5 left-5 w-14 h-14 rounded-full border border-brand-gold/30 flex items-center justify-center p-1 bg-brand-brown-dark/60 backdrop-blur-sm z-20 pointer-events-none">
                      <div className="w-full h-full rounded-full border border-dashed border-brand-gold/50 flex items-center justify-center">
                        <Award className="w-6 h-6 text-brand-gold animate-pulse" />
                      </div>
                    </div>

                    {/* Image Indicator Dots */}
                    <div className="absolute top-5 right-5 flex gap-1.5 z-20 bg-brand-brown-dark/70 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-brand-gold/15">
                      {championAward.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToImage(i);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeImageIndex === i 
                              ? "bg-brand-gold w-4" 
                              : "bg-brand-gold/30 hover:bg-brand-gold/60"
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                      <span className="text-[10px] font-semibold text-brand-gold font-mono block uppercase tracking-widest mb-1.5">
                        Interactive Gallery Artifact
                      </span>
                      <h4 className="text-white text-base sm:text-lg font-semibold font-serif leading-tight">
                        Airport Champion Artifact {activeImageIndex + 1} / 2
                      </h4>
                      <p className="text-brand-beige/50 text-xs mt-1 font-mono">
                        Swipe sideways or click controls • Click to zoom
                      </p>
                    </div>

                    <div 
                      onClick={() => setLightboxOpen(true)}
                      className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-brand-gold text-brand-brown flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-transform duration-300 z-20 cursor-zoom-in"
                    >
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>

                {/* Info Text Side Right/Bottom (7 cols) */}
                <div className="lg:col-span-7 flex">
                  <div className="bg-brand-brown-dark p-6 sm:p-8 rounded-2xl border border-brand-gold/20 shadow-2xl relative overflow-hidden flex flex-col justify-between w-full">
                    <div>
                      {/* Live Security indicator */}
                      <div className="flex justify-between items-center pb-4 mb-6 border-b border-brand-gold/15">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                          </span>
                          <span className="text-[11px] font-mono tracking-widest text-[rgb(34,197,94)] font-bold uppercase">
                            Accolade Verified
                          </span>
                        </div>
                        <span className="text-xs font-mono text-brand-beige/50">
                          ID: {championAward.id}
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono block mb-1">
                            CSMIA Elite Accolade
                          </span>
                          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-brand-beige">
                            {championAward.title}
                          </h3>
                          <p className="text-sm text-brand-gold-light mt-1 font-medium font-serif">
                            {championAward.issuer} • {championAward.date}
                          </p>
                        </div>

                        {/* Description block */}
                        <div>
                          <p className="text-sm sm:text-base text-brand-beige/85 font-light leading-relaxed mb-6">
                            {championAward.description}
                          </p>
                        </div>

                        {/* Impact validation steps */}
                        <div className="space-y-3.5">
                          <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono">
                            Core Validated Contributions
                          </h4>
                          <div className="space-y-3">
                            {championAward.pillars.map((pill, idx) => (
                              <div key={idx} className="flex gap-3 text-xs sm:text-sm text-brand-beige/85 leading-relaxed font-light">
                                <span className="w-5 h-5 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 text-xs font-mono font-medium">
                                  {idx + 1}
                                </span>
                                <span>{pill}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Integration Alignment */}
                        <div className="p-4 rounded-xl bg-brand-brown border border-brand-gold/10">
                          <h4 className="text-xs font-semibold text-brand-gold-light uppercase tracking-widest font-mono mb-1">
                            PMBOK Integration Relevance
                          </h4>
                          <p className="text-xs sm:text-sm text-brand-beige/75 italic leading-relaxed">
                            "{championAward.alignment}"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-brand-gold/10 mt-8 flex justify-between items-center text-xs text-brand-beige/50 font-mono">
                      <span>Timeline: {championAward.date}</span>
                      <button 
                        onClick={() => setLightboxOpen(true)}
                        className="text-brand-gold hover:text-brand-gold-light font-semibold"
                      >
                        Launch High-Res Lightbox
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* SECURE POPUP LIGHTBOX FOR CHAMPION IMAGE */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-brown-dark/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Click outside target to close */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setLightboxOpen(false)} 
            />

            <motion.div 
              className="bg-brand-brown border border-brand-gold/25 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
            >
              {/* Close button with simple interactive state */}
              <button 
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-brand-brown-dark/80 border border-brand-gold/25 flex items-center justify-center text-brand-gold hover:text-brand-gold-light hover:bg-brand-brown-dark transition-all cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Lightbox photo panel */}
              <div className="md:w-1/2 relative bg-brand-brown-dark flex flex-col justify-between p-6 sm:p-8 border-b md:border-b-0 md:border-r border-brand-gold/15">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-gold/5 via-transparent to-transparent pointer-events-none" />

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-gold/80 uppercase block mb-1">
                    Accolade Photographic Documentation
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-beige leading-tight mb-4">
                    Champion Artifact
                  </h3>
                </div>

                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-brand-gold/20 shadow-xl my-4 bg-brand-brown group/lightbox">
                  <div className="absolute inset-0 bg-brand-brown-dark flex items-center justify-center">
                    <img 
                      src={championAward.images[activeImageIndex]} 
                      alt={`${championAward.title} - Zoomed View ${activeImageIndex + 1}`} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain filter-none select-none"
                    />
                  </div>

                  {/* Lightbox Navigation Arrows */}
                  <button
                    onClick={() => {
                      setActiveImageIndex((prev) => (prev - 1 + championAward.images.length) % championAward.images.length);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-brand-brown-dark/80 border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-brown text-brand-gold flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-md"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => {
                      setActiveImageIndex((prev) => (prev + 1) % championAward.images.length);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-brand-brown-dark/80 border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-brown text-brand-gold flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-md"
                    aria-label="Next Image"
                  >
                    <ChevronRight size={16} />
                  </button>

                  {/* Lightbox Dot Indicators */}
                  <div className="absolute top-3 right-3 flex gap-1 z-10 bg-brand-brown-dark/80 backdrop-blur-sm px-2 py-1 rounded-full border border-brand-gold/15">
                    {championAward.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          activeImageIndex === i ? "bg-brand-gold w-3" : "bg-brand-gold/40"
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Digital Signature seal */}
                  <div className="absolute bottom-3 right-3 bg-brand-brown-dark/90 backdrop-blur-sm px-2.5 py-1.5 rounded border border-brand-gold/20 flex items-center gap-1.5 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[8px] font-mono uppercase tracking-widest text-emerald-400">
                      Signature Secured
                    </span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-brand-beige/50 flex justify-between pt-4 border-t border-brand-gold/10">
                  <span>ID: {championAward.id}</span>
                  <span>STATUS: ISSUED</span>
                </div>
              </div>

              {/* Lightbox details panel */}
              <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-none">
                <div>
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono">
                    Award Framework Details
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-beige leading-tight tracking-tight mt-1 mb-2">
                    {championAward.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-gold-light font-mono uppercase tracking-wider mb-6">
                    {championAward.issuer}
                  </p>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono">
                        Professional Scope
                      </h4>
                      <p className="text-sm text-brand-beige/85 font-light leading-relaxed">
                        {championAward.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono">
                        Validated Pillars
                      </h4>
                      <ul className="space-y-2">
                        {championAward.pillars.map((p, idx) => (
                          <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-brand-beige/85 leading-relaxed font-light">
                            <Check size={14} className="text-brand-gold shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-brand-gold/10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                  <span className="text-xs font-mono text-brand-beige/40 italic">
                    Award timeline: February 2026
                  </span>
                  <button 
                    onClick={() => setLightboxOpen(false)}
                    className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-brown font-bold text-xs tracking-widest uppercase rounded font-mono transition-transform duration-300 cursor-pointer"
                  >
                    Close Artifact
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
