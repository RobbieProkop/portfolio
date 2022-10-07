import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import sanityClient from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";

type Props = {
  pageInfo: PageInfo;
};

//for next-image from sanity
const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});
const About = ({ pageInfo }: Props) => {
  const imageProps = useNextSanityImage(
    configuredSanityClient,
    pageInfo?.profilePic
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row-reverse max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} // used only if want to happen once
        transition={{
          duration: 1.2,
          type: "spring",
        }}
        className="relative mb-7 mt-7 md:mb-0 flex-shrink-0 w-56 h-56 md:w-96 md:h-96 xl:w-[500px] xl:h-[500px]"
      >
        <Image {...imageProps} className="rounded-full md:rounded-lg" alt="" />
      </motion.div>

      <div className="space-y px-0 md:px-10">
        <h4 className="text-4xl mb-3 font-semibold">Who am I?</h4>

        <p className="text-lg">{pageInfo?.backgroundInfo}</p>
      </div>
    </motion.div>
  );
};
export default About;
