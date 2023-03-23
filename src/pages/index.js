import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Testimoni from "@/components/Testimoni";

export default function Home () {
  return (
    <div>
      <Nav />
      <Main />
      <Experience />
      <Projects />
      <Testimoni />
      <Contact />
      <Footer />
    </div>
  )
}