import { Briefcase, MapPin, Award, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function WorkExperience() {
  const responsibilities = [
    "Managed high-volume passenger operations at Mumbai Airport, handling 100–250+ passengers per shift, ensuring seamless service delivery across both domestic and international terminals.",
    "Coordinated with airline representatives, terminal operations officers, ground handling teams, CISF, border control, IT, Engineering & Maintenance, and customer service departments to resolve operational, security, medical, and passenger-related escalations.",
    "Led customer engagement and feedback initiatives by driving 100+ passenger feedback targets per shift, implementing service improvement strategies to enhance satisfaction and quality metrics.",
    "Maintained operational reports, passenger data logs, and dashboard updates while supporting daily terminal briefings and rapid decision-making during peak operations."
  ];

  const achievements = [
    "Recognised as Airport Champion of the Month (Feb 2026) at CSMIA for outstanding customer service excellence and commitment to operational standards — among 100+ frontline staff.",
    "Consistently achieved and exceeded 100+ passenger feedback targets per shift, directly contributing to improved NPS and terminal service quality scores across domestic and international zones."
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-brand-brown">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title Block */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">
            Professional History
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-beige">
            Work Experience
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold/40 mx-auto mt-4" />
        </div>

        {/* Card for The Highlighted Experience */}
        <motion.div 
          className="relative bg-brand-brown-dark rounded-2xl border border-brand-gold/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle ambient lighting effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 transform translate-x-20 -translate-y-20 rounded-full blur-3xl group-hover:bg-brand-gold/15 transition-all duration-500 pointer-events-none" />
          
          {/* Role Header */}
          <div className="flex flex-col gap-3 pb-6 border-b border-brand-gold/10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono mb-2 block">
                Aviation / Airport Ops
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-beige tracking-tight leading-tight">
                Passenger Service Executive (Team Lead)
              </h3>
              <p className="text-sm sm:text-base text-brand-gold-light font-medium mt-1">
                Bharat Vikas Group Limited — Contracted to CSMIA · Mumbai International Airport
              </p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-brand-beige/60 mt-2">
                <MapPin size={13} className="text-brand-gold" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Sub Sections */}
          <div className="grid grid-cols-1 gap-10 pt-10">
            {/* KEY RESPONSIBILITIES */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-brand-gold" />
                <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono">
                  Key Responsibilities
                </h4>
              </div>
              <ul className="space-y-4">
                {responsibilities.map((resp, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-3 text-sm sm:text-base text-brand-beige/85 leading-relaxed font-light hover:text-brand-beige transition-colors"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold text-[10px] font-mono mt-0.5">
                      {i + 1}
                    </span>
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* KEY ACHIEVEMENTS */}
            <div className="space-y-6 border-t border-brand-gold/10 pt-10">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-brand-gold" />
                <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono">
                  Key Achievements
                </h4>
              </div>
              <div className="space-y-4">
                {achievements.map((ach, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4 p-4 sm:p-5 rounded-lg bg-brand-brown/50 border border-brand-gold/10 hover:border-brand-gold/25 hover:bg-brand-brown/70 transition-all duration-300"
                  >
                    <CheckCircle2 size={20} className="flex-shrink-0 text-brand-gold mt-0.5" />
                    <div>
                      <p className="text-sm sm:text-base text-brand-beige/90 leading-relaxed font-light">
                        {ach}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
