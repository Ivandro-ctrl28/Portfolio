import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAVIGATION_LINKS = [
 
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      90;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center">

      <nav
        className="
        w-[92%]
        max-w-4xl
        rounded-full
        border border-white/20
        bg-black/30
        backdrop-blur-xl
        shadow-lg
        "
      >
        <div className="flex h-16 items-center justify-between px-8">

          {/* Logo */}

          <a
            href="#home"
            className="text-lg font-bold tracking-wide text-white"
          >
            DAVID STONES
          </a>

          {/* Desktop */}

          <ul className="hidden items-center gap-8 md:flex">

            {NAVIGATION_LINKS.map((item) => (
              <li key={item.href}>

                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="
                  text-gray-300
                  transition
                  duration-300
                  hover:text-white
                  "
                >
                  {item.label}
                </a>

              </li>
            ))}

          </ul>

          {/* Mobile */}

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </nav>

      {menuOpen && (
        <div
          className="
          absolute
          top-20
          w-[92%]
          rounded-3xl
          border border-white/20
          bg-black/80
          backdrop-blur-xl
          md:hidden
          "
        >
          <ul className="flex flex-col">

            {NAVIGATION_LINKS.map((item) => (
              <li key={item.href}>

                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="
                  block
                  px-6
                  py-4
                  text-gray-300
                  transition
                  hover:bg-white/5
                  hover:text-white
                  "
                >
                  {item.label}
                </a>

              </li>
            ))}

          </ul>
        </div>
      )}

    </header>
  );
};

export default Navbar;