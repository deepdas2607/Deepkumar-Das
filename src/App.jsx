import React, { Suspense, lazy } from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Gallery = lazy(() => import("./sections/Gallery"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const SectionFallback = () => (
  <div className="w-full flex justify-center items-center py-32 min-h-[400px]">
    <div className="w-10 h-10 border-[3px] border-t-purple-500 border-white/10 rounded-full animate-spin shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
  </div>
);

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Projects />
        <Experiences />
        <Gallery />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
