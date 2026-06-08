import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import Spotlight from "./components/Spotlight";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/Experience";
import CreativeWork from "./components/CreativeWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="noise-overlay relative min-h-screen">
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={3000}
      />
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Spotlight />
        <About />
        <Skills />
        <CreativeWork />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
