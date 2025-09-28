"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const FadeUpClient = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const container = document.querySelector(".fadeup-container") as HTMLElement;
    if (!container) return;
    gsap.set(container, {
      opacity: 0,
      y: 30,
    });
    const tl = gsap.timeline().to(container, {
      opacity: 1,
      y: 0,
      duration: 0.6,
    });
    return () => {
      tl.kill();
    };
  }, []);
  return children;
};

export default FadeUpClient;
