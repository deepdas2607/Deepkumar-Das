import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Interactive", "Responsive", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Deepkumar
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Student <br /> Dedicated to Learning
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Solutions
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
            className="flex gap-6 mt-10"
          >
            <a href="#work" className="px-8 py-3 text-lg font-semibold text-center rounded-lg cursor-pointer shadow-[0_0_20px_rgba(122,87,219,0.3)] bg-radial from-lavender to-royal hover-animation text-white">
              View my work
            </a>
            <a href="https://drive.google.com/file/d/1bRzPS7ydu4PwvaDuwAlHkjNvQBfocN_l/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-lg font-medium text-center border border-white/20 rounded-lg cursor-pointer bg-white/5 hover:-translate-y-1 duration-200 text-white hover:bg-white/10">
              Resume
            </a>
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Deepkumar
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
            className="flex justify-center gap-4 mt-8"
          >
            <a href="#work" className="px-6 py-3 text-base font-semibold text-center rounded-lg cursor-pointer shadow-[0_0_20px_rgba(122,87,219,0.3)] bg-radial from-lavender to-royal hover-animation text-white">
              View my work
            </a>
            <a href="https://drive.google.com/file/d/1bRzPS7ydu4PwvaDuwAlHkjNvQBfocN_l/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-base font-medium text-center border border-white/20 rounded-lg cursor-pointer bg-white/5 hover:-translate-y-1 duration-200 text-white hover:bg-white/10">
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
