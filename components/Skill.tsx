import { motion } from "framer-motion";
import Image from "next/image";
import fav from "../asset/images/fav.jpeg";
import sanityClient from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import { Skill } from "../typings";
import useWindowDimensions from "../utils/getWindowDimensions";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

//for next-image from sanity
const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const Skill = ({ skill, directionLeft }: Props) => {
  const imageProps = useNextSanityImage(configuredSanityClient, skill.image);
  const { width, height } = useWindowDimensions();
  console.log("width", width);
  const isMobile = Number(width) < Number(768);
  console.log("isMobile", isMobile);

  return (
    <div className="group relative flex cursor-pointer">
      {isMobile && (
        <motion.div
          initial={{
            x: 0,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} // used only if want to happen once
          transition={{ duration: 1 }}
          // group-hover:animate-bounce
          className="h-24 w-24 flex items-center justify-center border-gray-500 xl:h-32 xl:w-32 filter group-hover:grayscale group-hover:animate-pulse
        transition duration-300 ease-in-out"
        >
          <Image {...imageProps} alt="" />
        </motion.div>
      )}
      {!isMobile && (
        <motion.div
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} // used only if want to happen once
          transition={{ duration: 1 }}
          // // group-hover:animate-bounce
          className="h-24 w-24 flex items-center justify-center border-gray-500 xl:h-32 xl:w-32 filter group-hover:grayscale group-hover:animate-pulse
        transition duration-300 ease-in-out"
        >
          <Image {...imageProps} alt="" />
        </motion.div>
      )}
    </div>
  );
};
export default Skill;
