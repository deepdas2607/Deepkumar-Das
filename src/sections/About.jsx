import { useState, useRef } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const isDraggingRef = useRef(false);
  const isApproachDraggingRef = useRef(false);
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = () => {
    // Add a slight delay to allow the pointer events to resolve
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 100);
  };

  const techStackByCategory = [
    {
      title: "Languages",
      titleClass: "text-mint",
      items: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "/assets/logos/javascript.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      ],
    },
    {
      title: "Frontend",
      titleClass: "text-aqua",
      items: [
        { name: "React.js", icon: "/assets/logos/react.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "HTML", icon: "/assets/logos/html5.svg" },
        { name: "CSS", icon: "/assets/logos/css3.svg" },
        { name: "Tailwind CSS", icon: "/assets/logos/tailwindcss.svg" },
      ],
    },
    {
      title: "Backend",
      titleClass: "text-lavender",
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
        { name: "Drizzle ORM", icon: "/assets/logos/tailwindcss.svg" },
      ],
    },
    {
      title: "Data & Visualization",
      titleClass: "text-coral",
      items: [
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
        { name: "Seaborn", icon: "https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg" },
        { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Google Sheets", icon: "data:image/svg+xml;utf8,<svg viewBox='0 0 192 192' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%2300800f'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path stroke='%23298538' stroke-linejoin='round' stroke-width='12' d='M96 89H68v24m28-24h28v24M96 89v48m0 0h28v-24m-28 24H68v-24m56 0H68'></path><path fill='%23298538' fill-rule='evenodd' d='M52 28a2 2 0 0 0-2 2v132a2 2 0 0 0 2 2h88a2 2 0 0 0 2-2V62h-28a6 6 0 0 1-6-6V28H52Zm68 8.485L133.515 50H120V36.485ZM38 30c0-7.732 6.268-14 14-14h62c1.591 0 3.117.632 4.243 1.757l34 34A6 6 0 0 1 154 56v106c0 7.732-6.268 14-14 14H52c-7.732 0-14-6.268-14-14V30Z' clip-rule='evenodd'></path></g></svg>" },
      ],
    },
    {
      title: "Databases",
      titleClass: "text-mint",
      items: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "NeonDB", icon: "/assets/logos/neon.svg" },
        { name: "Qdrant", icon: "/assets/logos/qdrant.svg" },
        { name: "Neo4J", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original-wordmark.svg" },
      ],
    },
    {
      title: "Tools",
      titleClass: "text-aqua",
      items: [
        { name: "Git", icon: "/assets/logos/git.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" },
        { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
        { name: "Render", icon: "/assets/logos/render.jpeg" },
      ],
    },
  ];

  const handleApproachPointerDown = () => {
    isApproachDraggingRef.current = false;
  };

  const handleApproachPointerMove = () => {
    isApproachDraggingRef.current = true;
  };

  const handleApproachPointerUp = () => {
    setTimeout(() => {
      isApproachDraggingRef.current = false;
    }, 120);
  };

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1: Introduction */}
        <div
          onClick={() => setActiveModal('intro')}
          className="cursor-pointer flex items-end grid-default-color grid-1"
        >
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 max-w-[85%] md:max-w-[80%]">
            <p className="headtext text-2xl font-bold leading-tight md:text-4xl">Hi, I'm Deepkumar Das</p>
            <p className="transition-colors subtext text-base leading-relaxed md:text-lg group-hover:text-white">
              I build clean, user-focused web experiences and data-driven AI solutions from idea to production. (Click to read more)
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2: Achievements & Certifications */}
        <div
          onClick={() => {
            if (!isDraggingRef.current) setActiveModal('achievements');
          }}
          className="cursor-pointer grid-default-color grid-2"
        >
          <div
            ref={grid2Container}
            className="relative flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl font-bold md:text-5xl text-gray-400">
              Certifications <br />& Achievements
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Projects"
              containerRef={grid2Container}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Hackathons"
              containerRef={grid2Container}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
            <Card
              style={{ rotate: "15deg", top: "15%", left: "55%" }}
              text="Events"
              containerRef={grid2Container}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
            <Card
              style={{ rotate: "-10deg", bottom: "10%", left: "15%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
            <Card
              style={{ rotate: "45deg", top: "80%", left: "80%" }}
              text="NPTEL"
              containerRef={grid2Container}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          </div>
        </div>

        {/* Grid 3: My Approach */}
        <div
          onClick={() => {
            if (!isApproachDraggingRef.current) setActiveModal('approach');
          }}
          className="cursor-pointer grid-aqua-color grid-3"
        >
          <div className="z-10 w-[80%]">
            <p className="headtext">My Approach</p>
            <p className="text-lg font-medium leading-relaxed md:text-xl text-neutral-300">
              <span className="text-aqua">01</span> Discovery & Strategy <br />
              <span className="text-aqua">02</span> Clean & Scalable Code <br />
              <span className="text-aqua">03</span> Performance First <br />
              <span className="block mt-4 text-sm text-aqua/40">(Click to expand)</span>
            </p>
          </div>
          <figure
            className="absolute left-[30%] top-[10%]"
            onPointerDown={handleApproachPointerDown}
            onPointerMove={handleApproachPointerMove}
            onPointerUp={handleApproachPointerUp}
          >
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Contact */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack */}
        <div
          onClick={() => setActiveModal('techStack')}
          className="cursor-pointer grid-default-color grid-5"
        >
          <div className="z-10 w-full pr-20 md:w-[64%] md:pr-28 lg:w-[60%]">
            <p className="mb-2 text-2xl font-bold md:text-3xl">Tech Stack</p>
            <p className="text-base leading-relaxed md:text-lg text-neutral-400">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications. <br />
              <span className="block mt-2 text-sm text-neutral-500">(Click for details)</span>
            </p>
          </div>
          <div className="absolute inset-y-0 right-[-42%] w-[78%] pointer-events-none scale-[1.0] md:inset-y-9 md:right-[-20%] md:w-[48%] lg:right-[-12%] lg:w-[40%] md:scale-[1.62]">
            <Frameworks />
          </div>
        </div>
      </div>

      <Modal isOpen={activeModal === 'intro'} onClose={closeModal} title="About Me">
        <div className="space-y-4 text-lg">
          <p>
            I am a passionate <strong className="text-white">Student</strong> with a strong eye for design and a deep focus on creating seamless user experiences. With hands-on expertise in both frontend and backend development, I turn ideas into reliable products through clean code and practical, innovative solutions.
          </p>
          <p>
            Alongside this, I am a final-year <strong className="text-white">Artificial Intelligence and Data Science</strong> student at Fr. Conceicao Rodrigues College of Engineering, where I focus on building data-driven solutions for real-world challenges. I apply the technical depth and collaborative leadership I have developed through hackathons to deliver meaningful, business-focused outcomes.
          </p>
          <p>
            Outside development, I enjoy exploring emerging technologies and researching product strategy, company management, marketing, and consumer experience. I believe in continuous learning and staying current with trends in web development, AI, and management.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'achievements'}
        onClose={closeModal}
        title={
          <span className="flex flex-wrap items-center gap-2">
            <span>Achievements & Certifications</span>
            <a
              href="https://www.linkedin.com/in/deepkumardas/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-semibold transition-colors text-aqua hover:text-mint"
            >
              - Link (click here)
            </a>
          </span>
        }
      >
        <ul className="pl-5 space-y-4 list-disc text-neutral-300">
          <li><strong className="text-lavender">Winner</strong> - FullStack.AI Hackathon</li>
          <li><strong className="text-lavender">6th Rank</strong> - AMD Slingshot 2026 (among 40k+ teams)</li>
          <li><strong className="text-lavender">Finalist</strong> - Convolve 4.0 Pan IIT Hackathon (Top 15 Teams)</li>
          <li><strong className="text-lavender">1st Place</strong> - E-Cell Business Idea Competition (1st/30 teams)</li>
          <li><strong className="text-lavender">First Runner Up</strong> - Code-a-Thon 2.0 Hackathon at DMCE</li>
          <li><strong className="text-aqua">Google Cloud</strong> - Cloud Engineer Track (Mar 2026)</li>
          <li><strong className="text-aqua">Google Cloud</strong> - Cybersecurity Track (Aug 2025)</li>
          <li><strong className="text-aqua">Deloitte</strong> - Technology Job Simulation (June 2025)</li>
          <li><strong className="text-aqua">HackerRank</strong> - SQL Intermediate</li>
          <li><strong className="text-mint">College Department Rank 2</strong> with CGPA 9.24</li>
          <li><strong className="text-mint">NPTEL</strong> - Business Marketing Tech Focus & Project Management</li>
        </ul>
      </Modal>

      <Modal isOpen={activeModal === 'approach'} onClose={closeModal} title="My Approach">
        <div className="space-y-6">
          <div className="p-5 border rounded-xl bg-white/5 border-white/10">
            <h4 className="text-xl font-bold text-white"><span className="text-lavender">01</span> Discovery & Strategy</h4>
            <p className="mt-2 text-neutral-300">
              Understanding the core problem before writing a single line of code. I prioritize clear requirements and user-centric planning to ensure the final product hits the mark perfectly.
            </p>
          </div>
          <div className="p-5 border rounded-xl bg-white/5 border-white/10">
            <h4 className="text-xl font-bold text-white"><span className="text-aqua">02</span> Clean & Scalable Code</h4>
            <p className="mt-2 text-neutral-300">
              Writing maintainable, modular code that scales seamlessly. I strictly adhere to modern architectural patterns and best practices for both frontend and backend development.
            </p>
          </div>
          <div className="p-5 border rounded-xl bg-white/5 border-white/10">
            <h4 className="text-xl font-bold text-white"><span className="text-mint">03</span> Performance First</h4>
            <p className="mt-2 text-neutral-300">
              Optimizing for speed and efficiency across all API integrations and database queries. I ensure smooth interactions and lightning-fast load times for better user retention.
            </p>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'techStack'} onClose={closeModal} title="My Tech Stack">
        <div className="grid gap-5 md:grid-cols-2">
          {techStackByCategory.map((category) => (
            <div key={category.title} className="p-5 border rounded-xl bg-white/5 border-white/10">
              <h4 className={`mb-4 text-xl font-bold ${category.titleClass}`}>{category.title}</h4>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2 p-2 rounded-lg bg-white/5">
                    {item.icon ? (
                      <img src={item.icon} className="w-10 h-10" alt={`${item.name} icon`} />
                    ) : (
                      <div className="flex items-center justify-center w-10 h-10 text-xs font-semibold rounded-full bg-white/10 text-neutral-100">
                        {item.short}
                      </div>
                    )}
                    <span className="text-xs font-medium leading-tight text-center text-neutral-200">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default About;
