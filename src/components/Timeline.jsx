"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full left-0 md:-left-[15px] bg-midnight">
                <div className="w-3 h-3 sm:w-4 sm:h-4 p-1.5 sm:p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-2 font-bold md:flex md:pl-20 text-neutral-300">
                <h3 className="text-xl md:text-2xl">{item.date}</h3>
                <h3 className="text-lg md:text-2xl text-neutral-400 whitespace-pre-line">{item.title}</h3>
                <h3 className="text-base md:text-xl text-neutral-500 whitespace-pre-line">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pl-10 sm:pl-12 md:pl-20 pr-2 sm:pr-4">
              <div className="block mb-4 font-bold text-left text-neutral-300 md:hidden">
                <h3 className="text-base sm:text-xl">{item.date}</h3>
                <h3 className="text-sm sm:text-lg text-neutral-400 whitespace-pre-line">{item.title}</h3>
                <h3 className="text-xs sm:text-base text-neutral-500 whitespace-pre-line">{item.job}</h3>
              </div>
              {item.contents.map((content, index) => (
                <p className="mb-3 text-sm sm:text-lg md:text-xl font-normal text-neutral-400 break-words" key={index}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[11px] sm:left-[15px] md:left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
