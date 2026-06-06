/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-brown text-brand-beige flex flex-col font-sans selection:bg-brand-gold selection:text-brand-brown">
      {/* Exquisite Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Meet the Mind / Bio Story-telling Section */}
        <About />

        {/* Work Experience Section */}
        <WorkExperience />

        {/* Skills and Competencies Section */}
        <Skills />

        {/* Certificates & Education Portfolio Section */}
        <Certificates />

        {/* Interactive Achievements & Recognition Section */}
        <Achievements />
      </main>

      {/* Exquisite Subscriptions & Dual Forms Contact Section */}
      <Contact />
    </div>
  );
}
