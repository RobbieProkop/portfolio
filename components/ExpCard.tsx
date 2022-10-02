import Image from "next/image";
import monk from "../asset/images/monk.jpeg";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import sanityClient from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";

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

  return (
    <motion.article
      initial={{ y: 0 }}
      whileHover={{ y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] bg-[#292929] px-6 py-8 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 xl:w-[150px] xl:h-[150px]"
      >
        <Image
          {...imageProps}
          objectFit="contain"
          objectPosition="center"
          className="rounded-full"
        />
      </motion.div>
      <div className="px-0 md:px-8">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl my-1">{experience?.company}</p>
        <div className="flex space-x-2 ">
          {experience.technologies.map((tech) => {
            const techProps = useNextSanityImage(
              configuredSanityClient,
              tech.image
            );
            return (
              <div key={tech._id} className="h-10 w-10">
                <Image {...techProps} className="rounded-full" />
              </div>
            );
          })}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {/* dates */}
          Started {experience.dateStarted} -{" "}
          {experience.dateEnded ? experience.dateEnded : `PRESENT`}
        </p>
        <ul className="list-disc space-y-3 ml-5 text-lg">
          <li>Lead developer for DhammaDevs</li>
          <li>Built fullstack and static websites</li>
          <li>Consulted with clients</li>
        </ul>
      </div>
    </motion.article>
  );
};
export default ExpCard;
