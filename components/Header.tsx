import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faBars } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};
const Header = (props: Props) => {
  return (
    <header className="p-5 flex justify-between sticky top-0 max-w-7xl mx-auto z-20 text-gray-400 ">
      {/* <SocialIcon
        url="https://www.linkedin.com/in/robbie-prokop-1a968a230/"
        fgColor="gray"
        bgColor="transparent"
        target="_blank"
      /> */}
      {/* <SocialIcon
        url="https://www.github.com/robbieprokop"
        fgColor="gray"
        bgColor="transparent"
        target="_blank"
      /> */}
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
          className="hover:text-white cursor-pointer"
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
        {/* <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: 25, color: "grey" }}
          className="sm:inline-flex md:hidden "
        /> */}
        <Link href="#about">
          <h3 className="hidden md:inline-flex text-sm  pr-3 hover:text-white">
            about
          </h3>
        </Link>
        <Link href="#projects">
          <h3 className="hidden md:inline-flex text-sm  pr-3 hover:text-white transition-colors">
            projects
          </h3>
        </Link>
        <Link href="#contact">
          <h3 className="hidden md:inline-flex text-sm hover:text-white">
            contact
          </h3>
        </Link>
      </motion.div>
    </header>
  );
};
export default Header;
