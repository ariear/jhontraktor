import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Testimoni from "@/components/Testimoni";
import Head from "next/head";

export default function Home () {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Jhontraktor is a startup construction field" />
        <meta name="keywords" content="Keywords" />
        <title>Jhontraktor</title>
        <meta name="theme-color" content="#FF7420" />
      </Head>
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