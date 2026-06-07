import { useRef, useEffect } from "react";
import { EXPERIENCES } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-item", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
        },
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={experienceRef} className="py-10">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-medium lg:text-4xl">
          Work Experience
        </h2>

        <div className="flex flex-col space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="experience-item flex flex-col justify-between md:flex-row md:items-start"
            >
              {/* Ano */}
              <div className="mb-4 w-full text-sm font-semibold text-stone-300 md:mb-0 md:w-1/4 lg:text-lg">
                {exp.yearRange}
              </div>

              {/* Conteúdo */}
              <div className="w-full md:w-3/4">
                <h3 className="mb-2 text-xl font-semibold lg:text-2xl">
                  {exp.role} -{" "}
                  <span className="bg-linear-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                </h3>

                <p className="mb-4 text-sm lg:text-base text-stone-400">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, id) => (
                    <span
                      key={id}
                      className="rounded-full border-2 bg-pink-500/30 px-3 py-1 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;