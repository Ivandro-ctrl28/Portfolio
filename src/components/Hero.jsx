import { useRef, useEffect } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import { gsap } from "gsap";
import david from "../assets/David.webp";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.6,
        },
      });

      tl.from(".hero-title", {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
      })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 lg:gap-0"
    >
      <div className="mt-8 text-center lg:mt-20">
        <h1 className="hero-title text-4xl uppercase lg:text-7xl">
          {PROFILE.name}
        </h1>

        <h2 className="hero-subheading bg-linear-to-r from-pink-200 to-purple-300 bg-clip-text text-3xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>

      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
        {PROFILE.subheading}
      </p>

      <a
        href="/David-Stones-Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="hero-btn mb-6 flex items-center gap-2 rounded-full border border-pink-200/50 px-4 py-2 tracking-tighter transition hover:bg-pink-200/10"
      >
        <span>Download CV</span>
        <RiArrowRightUpLine />
      </a>

      <img
        src={david}
        alt="David Stones"
        width={400}
        height={400}
        className="hero-img rounded-3xl border border-purple-300/20"
      />
    </section>
  );
};

export default Hero;