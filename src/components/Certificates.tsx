import React, { useState } from "react";
import { 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Check, 
  ZoomIn, 
  X, 
  Info, 
  Layers, 
  ExternalLink,
  Target,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  skills: string[];
  image: string;
  certId: string;
  date: string;
  fullTimeline: string;
  summaryHighlights: string[];
  modules: { name: string; details: string }[];
  careerAlignment: string;
}

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"syllabus" | "summary" | "meta">("summary");

  const certificates: Certificate[] = [
    {
      title: "Certified Associate in Project Management (CAPM)®",
      issuer: "Project Management Institute (PMI)",
      description: "Globally recognized standard validating mastery of advanced project administration core competencies, predictive pathways, agile lifecycles, and risk-response standards.",
      badge: "PMI International Standards",
      icon: <Award className="w-6 h-6 text-brand-gold" />,
      skills: ["PMBOK® Standards", "Risk Management", "Project Lifecycles", "Stakeholder Matrix"],
      image: "https://i.ibb.co/pvdSYZcr/Sushil-Sidhrala-PMI-CAPM-Certificate.png",
      certId: "PMI-CAPM-1845892",
      date: "Spring 2026",
      fullTimeline: "Credential Issued by Project Management Institute • Validated Knowledge Base",
      summaryHighlights: [
        "Mastery of Predictive, Adaptive, and Hybrid project lifecycle models.",
        "Comprehensive handling of risk matrices, qualitative analysis, and quantitative resource tracking.",
        "Command over PMBOK® guide structure, knowledge areas, and stakeholder negotiation strategies."
      ],
      modules: [
        { name: "Project Delivery Frameworks", details: "Integration management, scope alignment, and schedule baselines." },
        { name: "Predictive & Agile Methodologies", details: "Differentiating waterfall deliverables vs iterative agile sprints." },
        { name: "Resource & Cost Control", details: "Project estimation formulas, variance metrics, and Earned Value Analysis." },
        { name: "Risk & Communication pathways", details: "Establishing clear stakeholder escalations and mitigation registers." }
      ],
      careerAlignment: "Directly empowers transitional competencies in project coordination, structured milestone tracking, and cross-functional airport operational planning."
    },
    {
      title: "Certified AWMS (5S) Assessor",
      issuer: "Adani Workplace Management Academy",
      description: "Advanced workplace organization certification specializing in lean operations, process standardization (Kaizen), operating waste reduction, and rigorous inspection controls.",
      badge: "5S Lean Standard",
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      skills: ["Continuous Improvement", "Muda (Waste) Removal", "Workplace Audit", "Process Quality"],
      image: "https://i.ibb.co/WNj7BG1Y/AWMS-Assessor-Certificater.jpg",
      certId: "AWMS-5S-2024-00892",
      date: "Autumn 2024",
      fullTimeline: "Credential Issued by Adani Workplace Management Academy • Professional Assessor Registry",
      summaryHighlights: [
        "In-depth capability to conduct professional workplace audits to eliminate functional congestion.",
        "Strategic knowledge of Kaizen loops to continuously sustain physical and digital standard workflows.",
        "Demonstrated competence in deploying visual team structures and safety optimization practices."
      ],
      modules: [
        { name: "Seiri & Seiton (Sort & Set)", details: "Systematic classification of target inputs and optimizing visual equipment layouts." },
        { name: "Seiso & Seiketsu (Shine & Standardize)", details: "Daily validation schedules, housekeeping rules, and routine checklists." },
        { name: "Shitsuke (Sustain Discipline)", details: "Conducting self-audits, peer rating systems, and building continuous habit loops." },
        { name: "Kaizen Integration", details: "Process mapping, waste reduction (Muda), and operational improvement methodologies." }
      ],
      careerAlignment: "Directly applied at CSMIA Terminal operations to optimize staff deployment zones, refine emergency protocols and ensure highest workplace tidiness."
    },
    {
      title: "BBA in Aviation Management",
      issuer: "ILAM Mumbai",
      description: "Professional undergraduate degree bridging classic corporate management structures with specialized ground terminal ops, logistics systems, and global aviation legislation.",
      badge: "Academic Degree",
      icon: <BookOpen className="w-6 h-6 text-brand-gold" />,
      skills: ["Terminal Logistics", "Airport Ground Ops", "Aviation Regulations", "Corporate Strategy"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800&h=600",
      certId: "ILAM-BBA-AV-MUM-2022",
      date: "Graduated Spring 2022",
      fullTimeline: "Awarded by Institute of Logistics & Aviation Management (ILAM Mumbai)",
      summaryHighlights: [
        "Specialized academic qualification in domestic and international airport terminal systems.",
        "Trained in high-load airline turnaround scheduling, passenger queue models, and compliance codes.",
        "Strong business administration background covering logistics, marketing, team structures, and crisis control."
      ],
      modules: [
        { name: "Airport Infrastructure & Ops", details: "Under the hood handling of runways, passenger flow, GSE, and ATC interfaces." },
        { name: "Aviation Safety & Law", details: "ICAO norms, DGCA compliance, international flight regulatory systems." },
        { name: "Ground Handling Operations", details: "Managing shift workflows, baggage routing systems, and elite service quality." },
        { name: "Strategic General Management", details: "Operational budget analysis, passenger flow modeling, and personnel leadership." }
      ],
      careerAlignment: "Provided the deep academic foundation backstopping 3+ years of direct terminal supervisor coordination at Mumbai International Airport."
    }
  ];

  const currentCert = certificates[activeIndex];

  return (
    <section id="certificates" className="py-24 sm:py-32 bg-brand-brown relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative SVG */}
      <div className="absolute top-20 right-10 w-96 h-96 opacity-[0.02] text-brand-gold pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M117.836 50.476c-24.375-24.48-54.774-35.987-71.047-25.74s-12.507 50.254 20.077 88.356c29.487 34.482 66.26 57.804 82.348 50.641-12.399-13.01-25.315-28.331-35.022-41.96-17.339-24.348-23.318-41.135-13.843-45.909 10.097-5.088 29.479 10.253 44.138 32.971z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title Block */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">
            Verified Credentials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-beige">
            Certificates & Education
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold/40 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-brand-beige/70 font-light max-w-md mx-auto">
            Hover or tap any certificate card below to view verified summaries, photos, and core syllabi in real-time.
          </p>
        </div>

        {/* Master-Detail Interactive Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Certificates List (6 columns) */}
          <div className="lg:col-span-6 space-y-4">
            {certificates.map((cert, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  id={`cert-item-${index}`}
                  key={index}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                    isActive 
                      ? "bg-brand-brown-dark/95 border-brand-gold/60 shadow-2xl scale-[1.01]" 
                      : "bg-brand-brown-dark/40 border-brand-gold/10 hover:border-brand-gold/30 hover:bg-brand-brown-dark/60"
                  }`}
                  onMouseEnter={() => {
                    if (activeIndex !== index) {
                      setActiveIndex(index);
                    }
                  }}
                  onClick={() => {
                    if (activeIndex !== index) {
                      setActiveIndex(index);
                    }
                    // Open a visual feedback/lightbox on mobile click to ensure strong interaction
                    if (window.innerWidth < 1024) {
                      setLightboxOpen(true);
                    }
                  }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Subtle active glow light indicator inside card */}
                  {isActive && (
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold" />
                  )}

                  <div>
                    {/* Header line inside list card */}
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? "bg-brand-gold/20" : "bg-brand-gold/5"
                      }`}>
                        {cert.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono text-brand-gold bg-brand-gold/10 border border-brand-gold/25 px-2.5 py-0.5 rounded">
                        {cert.badge}
                      </span>
                    </div>

                    <h3 className={`font-serif text-lg sm:text-xl font-bold leading-tight transition-colors mb-1.5 ${
                      isActive ? "text-brand-gold-light" : "text-brand-beige"
                    }`}>
                      {cert.title}
                    </h3>

                    <p className="text-xs font-mono text-brand-gold-light/80 mb-3 tracking-wide">
                      {cert.issuer}
                    </p>

                    <p className="text-xs sm:text-sm text-brand-beige/70 font-light leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Mini-Pill list */}
                  <div className="pt-4 border-t border-brand-gold/10 mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="text-[10px] sm:text-xs text-brand-beige/85 bg-brand-brown px-2 py-0.5 rounded border border-brand-beige/5"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[9px] font-mono text-brand-gold mt-1 pl-1">
                        +{cert.skills.length - 3} More
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Live Interactive Preview Desk (6 columns - Sticky) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-brand-brown-dark rounded-2xl border border-brand-gold/20 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
              {/* Visual Glassmorphic header indicator */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 transform translate-x-10 -translate-y-10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-gold/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-mono font-medium uppercase text-emerald-400 tracking-wider">
                    Verified Secure ID
                  </span>
                </div>
                <motion.span 
                  key={currentCert.certId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.15 }}
                  className="text-[10px] font-mono text-brand-beige"
                >
                  ID: {currentCert.certId}
                </motion.span>
              </div>

              {/* Sub-Interactive Showcase: Photograph Mockup */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-brand-gold/15 mb-6 group/image cursor-pointer shadow-lg bg-brand-brown"
                   onClick={() => setLightboxOpen(true)}>
                <motion.img
                  key={currentCert.image}
                  src={currentCert.image}
                  alt={`${currentCert.title} documentation preview picture`}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0.2, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="w-full h-full object-cover select-none filter sepia contrast-[1.10] brightness-[0.75] group-hover/image:scale-[1.03] transition-transform duration-500 ease-out"
                />
                {/* Elegant Golden Credential Frame Stamp overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/95 via-brand-brown-dark/10 to-transparent opacity-80 group-hover/image:opacity-75 transition-opacity" />

                {/* Simulated security watermark & stamp */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center p-1 bg-brand-brown-dark/20 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full border border-dashed border-brand-gold/40 flex items-center justify-center">
                    <Award className="w-5 h-5 text-brand-gold/70 animate-pulse" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <motion.div
                    key={currentCert.title}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <span className="text-[10px] font-semibold text-brand-gold font-mono block uppercase tracking-widest mb-1">
                      Interactive Visual Frame
                    </span>
                    <h4 className="text-white text-sm sm:text-base font-medium font-serif leading-tight line-clamp-1">
                      {currentCert.title}
                    </h4>
                  </motion.div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold text-brand-brown flex items-center justify-center shadow-lg group-hover/image:bg-brand-gold-light hover:scale-105 active:scale-95 transition-all duration-300">
                    <ZoomIn size={15} />
                  </div>
                </div>
              </div>

              {/* Live Console Navigation Tabs */}
              <div className="flex gap-2 mb-5 bg-brand-brown/60 p-1 rounded-lg border border-brand-gold/10">
                <button
                  onClick={() => setActiveTab("summary")}
                  className={`flex-1 text-xs py-2 px-3 rounded font-mono font-medium transition-all ${
                    activeTab === "summary"
                      ? "bg-brand-gold text-brand-brown shadow"
                      : "text-brand-beige/70 hover:text-brand-beige hover:bg-brand-brown/40"
                  }`}
                >
                  Summary
                </button>
                <button
                  onClick={() => setActiveTab("syllabus")}
                  className={`flex-1 text-xs py-2 px-3 rounded font-mono font-medium transition-all ${
                    activeTab === "syllabus"
                      ? "bg-brand-gold text-brand-brown shadow"
                      : "text-brand-beige/70 hover:text-brand-beige hover:bg-brand-brown/40"
                  }`}
                >
                  Core Syllabi
                </button>
                <button
                  onClick={() => setActiveTab("meta")}
                  className={`flex-1 text-xs py-2 px-3 rounded font-mono font-medium transition-all ${
                    activeTab === "meta"
                      ? "bg-brand-gold text-brand-brown shadow"
                      : "text-brand-beige/70 hover:text-brand-beige hover:bg-brand-brown/40"
                  }`}
                >
                  Alignment
                </button>
              </div>

              {/* Tab content displays information with animation */}
              <div className="min-h-[170px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === "summary" && (
                    <motion.div
                      key={`summary-${activeIndex}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.12 }}
                      className="space-y-3"
                    >
                      <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono flex items-center gap-1.5">
                        <Target size={13} /> Key Audited Pillars
                      </h4>
                      <ul className="space-y-2.5">
                        {currentCert.summaryHighlights.map((hl, i) => (
                          <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-brand-beige/85 leading-relaxed font-light">
                            <Check size={14} className="text-brand-gold shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === "syllabus" && (
                    <motion.div
                      key={`syllabus-${activeIndex}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.12 }}
                      className="space-y-3"
                    >
                      <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono flex items-center gap-1.5">
                        <Layers size={13} /> Curriculum Framework
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentCert.modules.map((mod, i) => (
                          <div key={i} className="p-2.5 rounded bg-brand-brown/45 border border-brand-gold/10">
                            <p className="text-xs font-semibold text-brand-beige tracking-tight mb-0.5">{mod.name}</p>
                            <p className="text-[11px] text-brand-beige/65 font-light leading-snug">{mod.details}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "meta" && (
                    <motion.div
                      key={`meta-${activeIndex}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.12 }}
                      className="space-y-3"
                    >
                      <div className="p-4 rounded-xl bg-brand-brown/45 border border-brand-gold/10 space-y-2">
                        <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono flex items-center gap-1.5">
                          <FileCheck size={13} /> Strategic Project Integration
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-beige/85 leading-relaxed font-light italic">
                          "{currentCert.careerAlignment}"
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-brand-beige/60 pt-2">
                        <span>Timeline: {currentCert.date}</span>
                        <span className="text-brand-gold-light/90 font-medium">Valid Credential</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-5 border-t border-brand-gold/10 mt-5 flex justify-between items-center text-xs">
                  <span className="text-brand-beige/50 font-light italic text-[11px]">
                    {currentCert.date}
                  </span>
                  <button 
                    onClick={() => setLightboxOpen(true)}
                    className="text-brand-gold hover:text-brand-gold-light font-mono font-semibold flex items-center gap-1 group/btn transition-colors"
                  >
                    <span>Interactive Lightbox</span>
                    <ExternalLink size={11} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* GORGEOUS CRISTAL LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-brown-dark/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Click outside target */}
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
              {/* Close Button */}
              <button 
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-brand-brown-dark/80 border border-brand-gold/25 flex items-center justify-center text-brand-gold hover:text-brand-gold-light hover:bg-brand-brown-dark transition-all"
                aria-label="Close credentials details"
              >
                <X size={16} />
              </button>

              {/* Lightbox Left Column: Document Showcase with Watermarks */}
              <div className="md:w-1/2 relative bg-brand-brown-dark flex flex-col justify-between p-6 sm:p-8 border-b md:border-b-0 md:border-r border-brand-gold/15">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-gold/5 via-transparent to-transparent pointer-events-none" />

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-gold/80 uppercase block mb-1">
                    Verified Credential Visual
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-beige leading-tight mb-4">
                    Document Artifact
                  </h3>
                </div>

                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-brand-gold/20 shadow-xl my-4">
                  <img 
                    src={currentCert.image} 
                    alt={currentCert.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter sepia brightness-[0.8]"
                  />
                  <div className="absolute inset-0 bg-brand-brown-dark/20 mix-blend-overlay" />
                  
                  {/* Digital Signature Frame seal */}
                  <div className="absolute bottom-3 right-3 bg-brand-brown-dark/90 backdrop-blur-sm px-2.5 py-1.5 rounded border border-brand-gold/20 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[8px] font-mono uppercase tracking-widest text-emerald-400">
                      Signature Secured
                    </span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-brand-beige/50 flex flex-col sm:flex-row justify-between pt-4 border-t border-brand-gold/10">
                  <span>REGISTRY ID: {currentCert.certId}</span>
                  <span>TIMELINE: {currentCert.date}</span>
                </div>
              </div>

              {/* Lightbox Right Column: Full Comprehensive Summary */}
              <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-none">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] sm:text-xs font-mono text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded">
                      {currentCert.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-beige leading-tight tracking-tight mb-1">
                    {currentCert.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-gold tracking-widest font-mono uppercase mb-6">
                    {currentCert.issuer}
                  </p>

                  <div className="space-y-6">
                    {/* Summary scope section */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono">
                        Verification Summary
                      </h4>
                      <p className="text-sm text-brand-beige/85 font-light leading-relaxed">
                        {currentCert.description}
                      </p>
                    </div>

                    {/* Validated Skill outcomes */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono">
                        Validated Key Competencies
                      </h4>
                      <ul className="space-y-2.5">
                        {currentCert.summaryHighlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-brand-beige/85 leading-relaxed font-light">
                            <Check size={14} className="text-brand-gold shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career integration pillar */}
                    <div className="p-4 rounded-xl bg-brand-brown-dark/40 border border-brand-gold/10 space-y-1.5">
                      <h4 className="text-xs font-semibold text-brand-gold-light uppercase tracking-widest font-mono">
                        Airport Operational Relevance
                      </h4>
                      <p className="text-xs text-brand-beige/80 italic leading-relaxed">
                        "{currentCert.careerAlignment}"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-brand-gold/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {currentCert.skills.map((skill, idx) => (
                      <span key={idx} className="text-[10px] sm:text-xs text-brand-beige bg-brand-brown-dark px-2.5 py-0.5 rounded border border-brand-beige/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setLightboxOpen(false)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-brown font-bold text-xs tracking-widest uppercase rounded font-mono transition-transform duration-300"
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
