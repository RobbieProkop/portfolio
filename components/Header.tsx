import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faBars } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};
const Header = (props: Props) => {
  return (
    <header className="py-5 flex justify-between sticky top-0 max-w-7xl mx-auto z-20">
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
          delay: 4,
          duration: 1.7,
          type: "spring",
        }}
      >
        DhammaDevs
      </motion.h3>
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
          delay: 4,
          duration: 1.4,
        }}
        className="flex flex-flex-row items-center cursor-pointer"
      >
        {/* <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: 25, color: "grey" }}
          className="sm:inline-flex md:hidden "
        /> */}
        <h3 className="hidden md:inline-flex text-sm text-gray-400 pr-3">
          about
        </h3>
        <h3 className="hidden md:inline-flex text-sm text-gray-400 pr-3">
          projects
        </h3>
        <h3 className="hidden md:inline-flex text-sm text-gray-400">contact</h3>
      </motion.div>
    </header>
  );
};
export default Header;
