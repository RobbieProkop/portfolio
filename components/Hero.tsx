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
      className="h-screen flex justify-center items-center"
    >
      <h1 className="">Hi I'm Robbie</h1>
    </motion.div>
  );
};
export default Hero;
