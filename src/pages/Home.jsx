import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tags from "../components/Tags";
import Projects from "../components/Projects";
import Inspiration from "../components/Inspiration";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tags />
      <Projects />
      <Inspiration />
      <Contact />
    </div>
  );
}
