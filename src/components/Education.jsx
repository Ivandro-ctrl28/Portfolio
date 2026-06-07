import { useRef, useEffect } from "react";
import { EDUCATION } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-item", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
        },
      });
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10" id="education" ref={educationRef}>
      <div className="mx-auto max-w-full px-4">
        <h2 className="text-4xl text-center mb-8 text-white font-medium lg:text-4xl">
          Education
        </h2>

        <div className="flex flex-col space-y-8">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="education-item rounded-3xl border border-purple-300/20 p-6"
            >
              <h3 className="mb-2 text-lg lg:text-2xl">{edu.degree}</h3>
              <h4 className="text-lg font-medium lg:text-xl">
                {edu.institution}
              </h4>
              <p className="text-sm lg:text-base">{edu.duration}</p>
              <p className="text-gray-400 mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;