import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Honors", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      id="SITE_HEADER"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-brown-dark/95 backdrop-blur-md py-4 border-b border-brand-gold/20 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Name */}
        <a id="header-brand-link" href="#" className="group select-none">
          <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide text-brand-beige group-hover:text-brand-gold transition-colors duration-300">
            Sushil Sidhrala
          </span>
          <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-500 bg-brand-gold"></span>
        </a>

        {/* Desktop Menu */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              id={`nav-item-${item.name.toLowerCase()}`}
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-wider uppercase text-brand-beige/80 hover:text-brand-gold transition-colors duration-300 relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
          <a
            id="header-cta-button"
            href="#contact"
            className="px-5 py-2 border rounded-full text-xs font-semibold uppercase tracking-widest text-brand-brown bg-brand-gold border-brand-gold hover:bg-transparent hover:text-brand-gold transition-all duration-300 shadow-md hover:shadow-brand-gold/20 hover:scale-105 transform cursor-pointer"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-beige hover:text-brand-gold focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-[72px] bg-brand-brown-dark/90 backdrop-blur-sm z-40 md:hidden"
          >
            <motion.nav
              id="mobile-nav-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 w-80 h-[calc(100vh-72px)] bg-brand-brown border-l border-brand-gold/10 p-8 flex flex-col space-y-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    id={`mobile-nav-${item.name.toLowerCase()}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-brand-beige border-b border-brand-beige/10 pb-3 hover:text-brand-gold transition-colors block"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <motion.a
                id="mobile-cta-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full text-sm font-semibold uppercase tracking-widest text-brand-brown bg-brand-gold hover:bg-brand-gold-dark transition-all shadow-lg"
              >
                Connect With Sushil
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
