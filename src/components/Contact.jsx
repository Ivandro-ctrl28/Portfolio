import { RiTwitterFill, RiLinkedinBoxFill, RiGithubFill } from "@remixicon/react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy", e);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);
    
  return (
    <section ref={contactRef} className="py-10 max-w-7xl mx-auto" id="contact" >
      <div className="text-center">
        <h2 className="text-3xl font-medium mb-8 lg:text-4xl">Contact</h2>
        <p className="text-lg lg:text-xl mb-4 ">Feel free to reach out to me via email:</p>
        <div className="contact-item flex flex-col items-center gap-2 mb-6">
          <button
            onClick={copyEmail}
            className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 transition"
          >
            {email}
          </button>

          {copied && (
            <span className="border-white/20 hover:border-white/40 transition">Copied to clipboard ✓</span>
          )}
        </div>

        <div className="mt-8 flex justify-center space-x-8">
        <a href="https://twitter.com" className="text-2xl hover:text-blue-500"
            target="_blank" rel="noopener noreferrer" aria-label="Twitter"
        >
           <RiTwitterFill className="inline-block mr-1" /> 
        </a>
        <a href="https://linkedin.com" className="text-2xl hover:text-blue-500"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
        >
            <RiLinkedinBoxFill className="inline-block mr-1" />
        </a>
        <a href="https://github.com" className="text-2xl hover:text-blue-500"
            target="_blank" rel="noopener noreferrer" aria-label="GitHub"
        >
            <RiGithubFill className="inline-block mr-1" />
        </a>
        </div>
      </div>
    </section>
      )
}

export default Contact