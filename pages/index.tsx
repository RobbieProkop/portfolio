import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Box from "../components/Box";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="py-5 max-w-7xl mx-auto text-white snap-y snap-proximity z-0 overflow-y-scroll overflow-x-hidden">
      <Head>
        <title>DhammaDevs</title>
        <meta name="description" content="Portfolio for Robbie Prokop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
