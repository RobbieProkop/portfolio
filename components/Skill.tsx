import { motion } from "framer-motion";
import Image from "next/image";
import fav from "../asset/images/fav.jpeg";

type Props = {
  directionLeft?: boolean;
};
const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        // group-hover:animate-bounce
        className="h-24 w-24 border-gray-500 xl:h-32 xl:w-32 filter group-hover:grayscale group-hover:animate-spin
        transition-duration-300 ease-in-out"
      >
        <Image src={fav} objectFit="cover" className="rounded-full" />
      </motion.div>
    </div>
  );
};
export default Skill;
