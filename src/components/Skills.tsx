import { motion } from "motion/react";
import { 
  Shield, 
  Workflow, 
  Users2, 
  AlertTriangle, 
  CheckCircle, 
  Laptop 
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Operations & Management",
      icon: <Shield className="w-5 h-5 text-brand-gold" />,
      skills: [
        "Airport Operations",
        "Stakeholder Management",
        "Performance Monitoring",
        "Service Quality Management"
      ]
    },
    {
      title: "Project Coordination",
      icon: <Workflow className="w-5 h-5 text-brand-gold" />,
      skills: [
        "Project Coordination Fundamentals",
        "PMBOK® Framework (CAPM®)",
        "Process Improvement",
        "Incident Reporting & Documentation"
      ]
    },
    {
      title: "Communication & People Skills",
      icon: <Users2 className="w-5 h-5 text-brand-gold" />,
      skills: [
        "Interpersonal Communication",
        "Conflict Resolution",
        "Team Collaboration & Leadership",
        "Customer Service Operations"
      ]
    },
    {
      title: "Problem Solving & Analysis",
      icon: <AlertTriangle className="w-5 h-5 text-brand-gold" />,
      skills: [
        "Rapid Escalation Management",
        "Problem Solving (High Pressure)",
        "Passenger Handling"
      ]
    },
    {
      title: "Quality & Compliance",
      icon: <CheckCircle className="w-5 h-5 text-brand-gold" />,
      skills: [
        "5S / AWMS Workplace Standards",
        "Operational Compliance",
        "Quality Assurance Processes"
      ]
    },
    {
      title: "Quality & Compliance", // user explicitly wrote "6th box heading is Quality & Compliance"
      icon: <Laptop className="w-5 h-5 text-brand-gold" />,
      skills: [
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft Outlook",
        "Operational Dashboards"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-brand-brown-dark relative overflow-hidden">
      {/* Background blur decorative circles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title Block */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">
            Expertise & Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-beige">
            Skills and Competencies
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold/40 mx-auto mt-4" />
        </div>

        {/* 3x2 Grid on md and larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              id={`skill-category-${index}`}
              key={index}
              className="bg-brand-brown border border-brand-gold/15 hover:border-brand-gold/30 hover:bg-brand-brown/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
            >
              <div>
                {/* Header block within card */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-brand-gold/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-all">
                    {category.icon}
                  </div>
                  <h3 className="text-[17px] sm:text-lg font-semibold tracking-tight text-brand-beige font-sans">
                    {category.title}
                  </h3>
                </div>

                {/* Bullets */}
                <ul className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-3 text-sm sm:text-base text-brand-beige/80 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 opacity-80 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
