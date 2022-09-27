import { motion } from "framer-motion";

type Props = {};
const Hero = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 360,
        // rotateY: 360,
      }}
      transition={{
        delay: 2,
        duration: 4.5,
        type: "spring",
      }}
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="line"></div>
      <h1 className="">Hi I'm Robbie</h1>
      <div className="line"></div>
    </motion.div>
  );
};
export default Hero;
