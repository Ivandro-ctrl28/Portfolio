import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 80,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="pt-10"
    >
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="grow overflow-hidden rounded-xl border border-purple-300/20 bg-[#12001d] transition duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </a>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold lg:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-gray-400">
                    {project.description}
                  </p>

                  <strong className="mb-2 block">
                    Tech Stack:
                  </strong>

                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="rounded-full border border-pink-500/30 px-3 py-1 text-sm font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;