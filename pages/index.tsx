import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { PageInfo, Project, Skill, Social, Experience } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { useEffect, useState } from "react";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  title: "DhammaDevs";
  keywords: "portfolio, frontend, backend, fullstack, web development, programming, nextJS, React, NodeJS, JavaScript, ";
  description: "DhammaDevs - Portfolio for Robbie Prokop";
};

const Home = ({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
  title,
  keywords,
  description,
}: Props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  console.log("width after use effect", width);

  return (
    <>
      <div className="py-5 mx-auto text-white snap-y snap-proximity z-0  ">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content={keywords} />
          <meta name="description" content={description} />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <title>{title}</title>
        </Head>
        <Header />

        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>

        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-center">
          <Projects projects={projects} />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Link href="#hero">
          <div className="sticky bottom-5 max-w-7xl mx-auto cursor-pointer mt-4">
            <div className="flex items-center justify-end pr-5 hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faAngleDoubleUp}
                size="lg"
                className="rounded-full bg-gray-500 p-4 hover:animate-pulse transition-all duration-500 "
              />
            </div>
          </div>
        </Link>
        <Footer socials={socials} />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const title = "DhammaDevs";
  const keywords =
    "portfolio, frontend, backend, fullstack, web development, programming, nextJS, React, NodeJS, JavaScript, ";
  const description = "DhammaDevs - Portfolio for Robbie Prokop";

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      title,
      keywords,
      description,
    },

    revalidate: 10,
  };
};
