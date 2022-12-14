import Image from "next/image";
import monk from "../asset/images/monk.jpeg";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import sanityClient from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import useWindowDimensions from "../utils/getWindowDimensions";

type Props = {
  experience: Experience;
};

//for next-image from sanity
const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const ExpCard = ({ experience }: Props) => {
  const imageProps = useNextSanityImage(
    configuredSanityClient,
    experience?.companyImage
  );

  const { width, height } = useWindowDimensions();
  const isMobile = Number(width) < Number(418);

  return (
    <motion.article
      initial={{ y: 0 }}
      whileHover={{ y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-lg justify-center items-center space-y-10 flex-shrink-0 w-full h-[650px] bg-[#292929]/40 px-6 py-8 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 xl:w-[150px] xl:h-[150px] relative exp-img"
      >
        <Image
          {...imageProps}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="rounded-full"
          alt=""
        />
      </motion.div>
      <div className="px-0 md:px-8 exp-card">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl my-1">{experience?.company}</p>
        <div className="flex flex-wrap max-w-[350px] items-center">
          {!isMobile &&
            experience.technologies.map((tech) => {
              const TechProps = () =>
                useNextSanityImage(configuredSanityClient, tech.image);

              return (
                <div
                  key={tech._id}
                  className="h-12 w-12 flex justify-center items-center ml-2 mt-1"
                >
                  <Image {...TechProps()} alt="" />
                </div>
              );
            })}
          {isMobile &&
            experience.technologies
              .map((tech) => {
                const TechProps = () =>
                  useNextSanityImage(configuredSanityClient, tech.image);

                return (
                  <div
                    key={tech._id}
                    className="h-12 w-12 flex justify-center items-center ml-2 mt-1"
                  >
                    <Image {...TechProps()} alt="" />
                  </div>
                );
              })
              .slice(0, 9)}
        </div>
        <p className="uppercase py-3 text-gray-300 ">
          {new Date(experience.dateStarted).toLocaleDateString("en-GB", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString("en-GB", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
        </p>
        <ul className="list-disc space-y-3 ml-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-green-600/80 pr-5">
          {/* CHANGE THIS INDEX TO UUID OR SOMETHING ELSE */}
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};
export default ExpCard;
