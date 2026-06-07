import { useRef, useEffect } from 'react';
import { SKILLS } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const SkillsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-item", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: SkillsRef.current,
                    start: "top 80%",
                }
            });
        }, SkillsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-10" id="skills" ref={SkillsRef}>
            <div className="p-4">
                <h2 className="text-3xl mb-8 text-center font-medium lg:text-4xl">
                    My Skills
                </h2>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {SKILLS.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-item flex flex-col items-center text-center"
                        >
                            <div className="mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-medium mb-2">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;