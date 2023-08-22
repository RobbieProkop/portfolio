import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};
const Header = (props: Props) => {
  return (
    <header className="p-5 flex justify-between sticky top-0 max-w-7xl mx-auto z-20 text-gray-400 ">
      <Link href="#hero">
        <motion.h3
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 4.5,
            duration: 1.7,
            type: "spring",
          }}
          className="hover:text-[#FBAE3C] cursor-pointer transition-all duration-300 ease-in-out"
        >
          DhammaDevs
        </motion.h3>
      </Link>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 4.5,
          duration: 1.4,
        }}
        className="flex flex-flex-row items-center cursor-pointer"
      >
        <Link href="https://flowcv.com/resume/sdqld3o6di">
          <a target="_blank">
            {/* <h3 className="hidden md:inline-flex text-sm  pr-3 hover:text-white"> */}
            <h3 className=" text-sm  pr-3 hover:text-[#FBAE3C]">Resume</h3>
          </a>
        </Link>
        <Link href="#about">
          {/* <h3 className="hidden md:inline-flex text-sm  pr-3 hover:text-white"> */}
          <h3 className=" text-sm  pr-3 hover:text-[#FBAE3C]">About</h3>
        </Link>
        <Link href="#projects">
          <h3 className=" text-sm  pr-3 hover:text-[#FBAE3C] transition-colors">
            Projects
          </h3>
        </Link>
        <Link href="#contact">
          <h3 className=" text-sm hover:text-[#FBAE3C]">Contact</h3>
        </Link>
      </motion.div>
    </header>
  );
};
export default Header;
