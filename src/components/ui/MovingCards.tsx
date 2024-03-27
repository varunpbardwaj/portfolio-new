"use client";

import { cn } from "@/utils/cn";
import React, { ReactNode, useEffect, useState } from "react";

export const MovingCards = ({
  items,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    logo: ReactNode;
    className?: string;
  }[];
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        containerRef.current!.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current!.style.setProperty("--animation-duration", "80s");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    addAnimation();
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative scroller z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className={`w-fit max-w-full relative border border-b-0 flex-shrink-0 border-neutral-950 px-20 text-center flex flex-col items-center py-10 transition-colors duration-500 text-neutral-400 ${item.className}`}
            key={item.name}
          >
            <div className="text-2xl mb-2">{item.logo}</div>
            <span className="relative z-20 text-sm leading-[1.6] font-bold">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
