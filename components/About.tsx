import Image from "next/image";
import headshot from "../asset/images/headshot.jpg";
import { motion } from "framer-motion";

type Props = {};
const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        }}
        className="relative mb-20 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      >
        <Image
          src={headshot}
          layout="fill"
          objectFit="cover"
          className="rounded-full md:rounded-lg"
        />
      </motion.div>
    </div>
  );
};
export default About;
