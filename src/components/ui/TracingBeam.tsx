"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
    window.addEventListener(
      "resize",
      () => {
        if (contentRef.current) {
          setSvgHeight(contentRef.current.offsetHeight);
        }
      },
      false
    );
  }, []);

  const y1 = useSpring(
    useTransform(
      scrollYProgress,
      [0, svgHeight > 2500 ? 0.68 : svgHeight > 2000 ? 0.6 : 0.62],
      [20, svgHeight]
    ),
    {
      stiffness: 1000,
      damping: 90,
    }
  );
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [20, svgHeight]), {
    stiffness: 1000,
    damping: 90,
  });

  return (
    <motion.div ref={ref} className={className}>
      <div className="absolute top-5 right-5 z-[9999]">
        <svg
          viewBox={`0 0 20 ${svgHeight - 40}`}
          width="20"
          height={svgHeight - 40}
          className="block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0 V -36 l 18 24 V ${svgHeight} l 0 24 V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeWidth="2"
            strokeOpacity="0.15"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0 V -36 l 18 24 V ${svgHeight} l 0 24 V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#017BDF" stopOpacity="0"></stop>
              <stop stopColor="#017BDF"></stop>
              <stop offset="0.2" stopColor="#00EE65"></stop>
              <stop offset="1" stopColor="#04ADAE" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
