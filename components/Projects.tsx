import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typings";
import sanityClient from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});
const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Projects
      </h3>

      <div className="relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory  z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-600/80">
        {projects
          ?.sort((a, b) => {
            if (a._createdAt < b._createdAt) return -1;
            if (a._createdAt > b._createdAt) return 1;
            return 0;
          })
          .map((project) => {
            const imageProps = useNextSanityImage(
              configuredSanityClient,
              project?.image
            );
            return (
              <div
                className="max-w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                key={project._id}
              >
                <Link
                  href={project?.linkToBuild}
                  className="hover:cursor-pointer"
                >
                  <a target="_blank">
                    <motion.div
                      initial={{
                        y: -300,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      className="h-[350px] w-[350px] flex justify-center items-center"
                    >
                      <Image {...imageProps} className="hover:cursor-pointer" />
                    </motion.div>
                  </a>
                </Link>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-green-600/50">
                      {project?.Title}
                    </span>
                  </h4>

                  <p className="text-lg text-center md:text-left">
                    {project?.summary}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="w-full absolute top-[30%] bg-green-600/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
};
export default Projects;
