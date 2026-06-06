import React, { useState } from "react";
import { Check, Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  // General Contact Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !contactEmail || !message) return;
    
    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setContactSubmitted(true);
      setFirstName("");
      setLastName("");
      setContactEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-brand-brown-dark relative overflow-hidden font-light">
      {/* Dynamic Earth-safe Divider Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-gold/20" />

      {/* Main Grid: Info and Form */}
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 text-left">
        
        {/* Left Section: Info */}
        <div className="lg:col-span-5 space-y-12">
          {/* Header Typography */}
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">
              Contact Me
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-beige leading-tight">
              Delivering Service <br className="hidden sm:block" />
              & Operational Excellence.
            </h2>
          </div>

          {/* Contact Details Panel */}
          <div className="space-y-6 pt-4">
            <h3 className="font-semibold text-brand-beige tracking-wide text-xs uppercase font-mono">
              Contact Details
            </h3>
            <div className="space-y-6 text-sm sm:text-base text-brand-beige/80">
              <a href="mailto:ssidhrala@gmail.com" className="flex items-center gap-4 hover:text-brand-gold transition-colors block group">
                <div className="p-3 bg-brand-gold/5 rounded-xl border border-brand-gold/20 group-hover:border-brand-gold transition-colors">
                  <Mail size={18} className="text-brand-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-gold/70 block uppercase tracking-wider">Email Address</span>
                  <span className="font-medium text-brand-beige">ssidhrala@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919136366478" className="flex items-center gap-4 hover:text-brand-gold transition-colors block group">
                <div className="p-3 bg-brand-gold/5 rounded-xl border border-brand-gold/20 group-hover:border-brand-gold transition-colors">
                  <Phone size={18} className="text-brand-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-gold/70 block uppercase tracking-wider">Phone Number</span>
                  <span className="font-medium text-brand-beige">+91 9136366478</span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/sushilsidhrala" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 hover:text-brand-gold transition-colors block group"
              >
                <div className="p-3 bg-brand-gold/5 rounded-xl border border-brand-gold/20 group-hover:border-brand-gold transition-colors">
                  <Linkedin size={18} className="text-brand-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-gold/70 block uppercase tracking-wider">LinkedIn Profile</span>
                  <span className="font-medium text-brand-beige">linkedin.com/in/sushilsidhrala</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Core Contact Form */}
        <div className="lg:col-span-7 bg-brand-brown/30 border border-brand-gold/10 p-8 sm:p-10 rounded-2xl relative shadow-xl">
          <div className="space-y-2 mb-8">
            <h3 className="font-serif text-2xl font-semibold text-brand-beige">Send a Message</h3>
            <p className="text-xs sm:text-sm text-brand-beige/70 font-light font-sans">Have an inquiry or speaking opportunity? Drop. me a line below.</p>
          </div>

          <AnimatePresence mode="wait">
            {!contactSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleContactSubmit}
                className="space-y-6"
                exit={{ opacity: 0, y: 10 }}
              >
                {/* Form fields grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold tracking-wider text-brand-beige uppercase block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 rounded bg-brand-brown border border-brand-gold/20 text-brand-beige text-sm placeholder-brand-gold/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold tracking-wider text-brand-beige uppercase block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 rounded bg-brand-brown border border-brand-gold/20 text-brand-beige text-sm placeholder-brand-gold/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold tracking-wider text-brand-beige uppercase block">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hello@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-brand-brown border border-brand-gold/20 text-brand-beige text-sm placeholder-brand-gold/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold tracking-wider text-brand-beige uppercase block">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Type your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-brand-brown border border-brand-gold/20 text-brand-beige text-sm placeholder-brand-gold/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold resize-none"
                  />
                </div>

                {/* Submit action button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-brown font-bold text-sm tracking-widest uppercase rounded shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                  <ArrowRight size={14} className="transform group-hover:translate-x-1" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Check size={32} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brand-beige">Message Sent successfully</h3>
                <p className="text-sm text-brand-beige/70 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you, Sushil’s team will review your inquiry and get back to you shortly at the provided email address.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-brand-gold text-brand-gold font-normal text-xs uppercase tracking-widest rounded hover:bg-brand-gold/10 transition-colors focus:outline-none cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Sub Footer with Policies & Wix Branding Credits (from mock baseline requirement) */}
      <div className="max-w-6xl mx-auto px-6 py-8 border-t border-brand-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-beige/40">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} by Sushil Sidhrala. Built for Google Gemini Studio.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-gold transition-colors">Accessibility Statement</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
