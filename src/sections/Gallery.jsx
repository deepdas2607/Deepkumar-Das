import React, { useState, useEffect } from 'react';
import DomeGallery from '../components/DomeGallery';

const GALLERY_IMAGES = [
  {
    src: '/assets/image/amd.jpeg',
    alt: 'AMD Slingshot \'26 — Regional Winners, Mumbai',
    description: 'Showcased my project before a distinguished jury from leading industry organizations and clinched the Regional title from a competitive pool of ~30,000 participants.'
  },
  {
    src: '/assets/image/amdfinal.jpeg',
    alt: 'AMD Slingshot \'26 Grand Finale — Top 6 Nationally',
    description: 'Represented Mumbai at the Grand Finale, presenting Lifelens to a jury that included CEOs from Swiggy, Almond AI, MobiKwik, and AMD. Finished in the Top 6 out of 10 national finalists — a defining moment of growth and recognition.'
  },
  {
    src: '/assets/image/dmce.jpeg',
    alt: 'First Runner-Up — Code-a-Thon 2.0, DMCE',
    description: 'Competed in a rigorous 24-hour hackathon and secured First Runner-Up honours, delivering SocialSense — a full-stack social intelligence platform — under intense time constraints.'
  },
  {
    src: '/assets/image/iit.jpeg',
    alt: 'Global Finalist — Convolve 4.0, PAN-IIT Hackathon',
    description: 'Selected for the QdrantDB track and ranked in the Top 10 out of 25,000+ participants across India. Received commendation from the jury for innovative project ideation and seamless Qdrant vector-search integration.'
  },
  {
    src: '/assets/image/second.jpeg',
    alt: '2nd Rank — AI & Data Science Dept. · 9.2+ CGPA',
    description: 'Balanced an active hackathon and event calendar with rigorous academics, achieving 2nd Rank in the AI & Data Science department with a CGPA above 9.2 — a testament to consistent excellence on both fronts.'
  }
];

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="items-start mt-25 md:mt-35 c-space" id="gallery">
      <h2 className="text-heading">Image Gallery</h2>
      <p className="subtext mt-3 max-w-xl">
        A glimpse of my world — drag to explore, click to know the details behind each image.
      </p>

      <div
        className="relative mt-12 w-full rounded-3xl overflow-hidden"
        style={{ height: isMobile ? '450px' : '600px' }}
      >
        {/* Subtle border glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
          style={{
            boxShadow: 'inset 0 0 0 1px rgba(92,51,204,0.18), 0 0 60px rgba(92,51,204,0.08)'
          }}
        />

        <DomeGallery
          images={GALLERY_IMAGES}
          overlayBlurColor="#030412"
          fit={0.55}
          minRadius={isMobile ? 320 : 500}
          openedImageWidth={isMobile ? "300px" : "460px"}
          openedImageHeight={isMobile ? "400px" : "520px"}
          imageBorderRadius="16px"
          openedImageBorderRadius="22px"
          grayscale={false}
          dragDampening={2}
          dragSensitivity={18}
        />
      </div>

      <p className="text-neutral-500 text-xs text-center mt-4">
        ✦ Drag to rotate · Click an image to expand
      </p>
    </section>
  );
}
