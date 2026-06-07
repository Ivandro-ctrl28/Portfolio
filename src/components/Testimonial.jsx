import { useRef, useEffect } from "react";
import { TESTIMONIAL } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-img", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-text", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
        },
      });
    }, testimonialRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonial" ref={testimonialRef} className="py-10">
      <h2 className="mb-8 text-3xl font-bold text-center text-white">
        Testimonials
      </h2>

      <div className="px-4 md:px-0">
        <div className="flex flex-col items-center text-center">
          <img
            src={TESTIMONIAL.image}
            alt={TESTIMONIAL.name}
            className="testimonial-img mb-6 h-60 w-60 rounded-full object-cover"
          />

          <blockquote className="testimonial-text max-w-xl text-lg leading-relaxed lg:text-2xl">
            &quot;{TESTIMONIAL.quote}&quot;
          </blockquote>

          <div className="testimonial-text mt-4 text-lg">
            <p>{TESTIMONIAL.name}</p>
            <p className="text-sm">{TESTIMONIAL.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;