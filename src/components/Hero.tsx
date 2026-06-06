import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-brand-brown"
    >
      {/* Background Graphic Floral/Leaf SVG (From Baseline Design) */}
      <div className="absolute right-0 top-1/4 w-96 h-96 opacity-10 pointer-events-none filter blur-sm">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-brand-gold fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M149.199 63.423c1.825-11.825 4.912-22.853 8.501-31.238 3.078-7.193 6.234-11.524 7.692-11.174 3.055.733 3.499 20.744.888 46.586-2.338 23.14-6.513 46.291-11.73 63.823-7.498-21.319-8.944-44.721-5.351-67.997zm1.495 79.393c-8.843 24.163-37.176 39.854-50.27 29.331-3.41-2.742-5.476-4.572-10.001-8.736-3.607-3.319-5.153-4.639-7.02-5.865-2.525-1.659-4.949-2.504-7.898-2.675-2.811-.426-5.767.719-9.378 3.358-1.432 1.047-2.936 2.296-4.939 4.068-.476.422-4.161 3.732-5.295 4.725-9.306 8.145-16.328 11.973-24.892 11.986l.002.992c8.867-.014 16.074-3.942 25.546-12.232 1.14-.998 4.827-4.31 5.299-4.728 1.98-1.753 3.464-2.984 4.866-4.01 3.419-2.499 6.147-3.555 8.687-3.173 2.814.166 5.071.952 7.454 2.518 2.256 1.482 13.059 11.421 16.945 14.545 13.736 11.04 42.783-5.047 51.824-29.754a141.703 141.703 0 0 0 3.009-8.622 116.157 116.157 0 0 0 8.503 17.733l.857-.504a115.258 115.258 0 0 1-8.878-18.782c5.418-17.746 9.753-41.526 12.154-65.295 2.72-26.915 2.281-46.709-1.646-47.652-4.773-1.145-13.824 20.004-17.409 43.227-3.688 23.893-2.102 47.928 5.85 69.748-1.081 3.526-2.207 6.808-3.37 9.797z" />
        </svg>
      </div>

      <div className="absolute left-10 bottom-1/4 w-72 h-72 opacity-[0.03] pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-brand-gold fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M117.836 50.476c-24.375-24.48-54.774-35.987-71.047-25.74-22.837 14.848-12.507 50.254 20.077 88.356 29.487 34.482 66.26 57.804 82.348 50.641-12.399-13.01-25.315-28.331-35.022-41.96-17.339-24.348-23.318-41.135-13.843-45.909 10.097-5.088 29.479 10.253 44.138 32.971a130.014 130.014 0 0 1 4.236 7.031c.132-22.288-11.269-45.687-30.887-65.39z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column (Title & Branding) */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full text-xs font-semibold uppercase tracking-widest">
              CAPM® Certified • Aspiring Project Manager
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-brand-beige">
              Hi, I’m Sushil.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-beige/85 font-light leading-relaxed max-w-xl"
          >
            Operations professional with 3+ years of frontline leadership at Mumbai Airport, skilled in managing high-volume operations, stakeholder coordination, and service excellence. CAPM® certified with a BBA in Aviation Management, I combine operational expertise with project management principles to drive efficient, measurable outcomes and am seeking opportunities in project coordination and management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              id="hero-primary-cta"
              href="#experience"
              className="px-8 py-4 bg-brand-gold text-brand-brown font-bold text-sm tracking-widest uppercase rounded-md shadow-lg shadow-brand-gold/10 hover:bg-brand-gold-light hover:shadow-brand-gold/30 hover:scale-105 active:scale-95 transition-all duration-300 text-center"
            >
              View Experience
            </a>
            <a
              id="hero-secondary-cta"
              href="#about"
              className="px-8 py-4 border border-brand-beige/30 text-brand-beige font-semibold text-sm tracking-widest uppercase rounded-md hover:bg-brand-beige/5 hover:border-brand-gold transition-all duration-300 text-center"
            >
              Meet Sushil
            </a>
          </motion.div>
        </div>

        {/* Right Column (Striking Editorial Image & Framing) */}
        <div className="md:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Outer offset gold border */}
            <div className="absolute inset-4 border-2 border-brand-gold/50 rounded-lg transform translate-x-4 translate-y-4 pointer-events-none" />

            {/* Solid background card */}
            <div className="absolute inset-0 bg-brand-brown-dark rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://i.ibb.co/SDhrJ6FC/Profile-Photo.jpg"
                alt="Portrait of Sushil Sidhrala"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none filter brightness-95 contrast-105 transition-all duration-500 hover:scale-105"
              />
            </div>

            {/* Miniature absolute overlapping floral emblem  */}
            <div className="absolute -bottom-6 -left-6 bg-brand-gold p-4 rounded-full shadow-lg text-brand-brown hidden sm:block">
              <svg
                viewBox="0 0 200 200"
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M149.199 63.423c1.825-11.825 4.912-22.853 8.501-31.238 3.078-7.193 6.234-11.524 7.692-11.174 3.055.733 3.499 20.744.888 46.586-2.338 23.14-6.513 46.291-11.73 63.823-7.498-21.319-8.944-44.721-5.351-67.997z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.a
          id="hero-scroll-indicator"
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-brand-beige/50 hover:text-brand-gold transition-colors duration-300"
        >
          <span className="text-[10px] uppercase tracking-widest mb-1 mb-2 font-mono">Scroll</span>
          <ArrowDown size={14} className="stroke-[3]" />
        </motion.a>
      </div>
    </section>
  );
}
