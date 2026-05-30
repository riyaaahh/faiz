import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="noise-overlay relative min-h-screen">
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
