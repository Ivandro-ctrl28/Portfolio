import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="relative mx-auto min-h-screen overflow-x-hidden bg-[#090013] text-white antialiased">

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-image bg-cover bg-center bg-fixed"></div>

      <Navbar />

       <div className="pt-24 lg:pt-32">
        <Hero />
      </div>

      <Projects />

      <Skills />
      <Experience />
      <Education />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default App;