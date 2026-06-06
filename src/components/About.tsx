import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-brand-brown-dark relative overflow-hidden"
    >
      {/* Decorative side leaf graphic */}
      <div className="absolute left-0 bottom-0 w-80 h-80 opacity-5 pointer-events-none transform -translate-x-1/2 translate-y-1/4">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-brand-gold fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M149.199 63.423c1.825-11.825 4.912-22.853 8.501-31.238 3.078-7.193 6.234-11.524 7.692-11.174 3.055.733 3.499 20.744.888 46.586-2.338 23.14-6.513 46.291-11.73 63.823-7.498-21.319-8.944-44.721-5.351-67.997z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="space-y-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">
            Executive Summary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-beige leading-tight">
            About Sushil
          </h2>

          <div className="space-y-6 text-brand-beige/85 text-base sm:text-lg font-light leading-relaxed">
            <p>
              I am an operations and passenger service professional based in Mumbai, Maharashtra, with over 3 years of hands-on leadership experience at one of India's busiest airports — CSMIA. In my role as a Passenger Service Executive (Team Lead) with Bharat Vikas Group Limited, I have directly managed 100–250+ passengers per shift across domestic and international terminals, bridging the gap between frontline execution and strategic coordination. My toolkit spans stakeholder management, conflict resolution, incident reporting, and service quality optimisation, supported by proficiency in Microsoft Office tools.
            </p>
            <p>
              Armed with a BBA in Aviation Management from ILAM Mumbai and a freshly earned CAPM® certification from PMI, I am deliberately transitioning into project coordination and project management. I also hold a Certified AWMS (5S) Assessor credential from the Adani Workplace Management Academy, reflecting my commitment to structured, process-first thinking. What sets me apart is the rare combination of high-pressure operational experience, a strong academic grounding in management, and a proven record of being recognised for excellence — most recently as Airport Champion of the Month at CSMIA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
