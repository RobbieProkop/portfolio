import { motion } from "framer-motion";

type Props = {};
const Hero = (props: Props) => {
  return (
    <motion.div
      animate={{
        scale: [0, 1, 2, 2, 1, 1],
        rotate: [0, 0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        // repeat: Infinity,
        // repeatDelay: 1,
      }}
      className="box flex items-center justify-center w-full"
    >
      <motion.div className="h-screen flex flex-col justify-center items-center">
        <div className="line"></div>
        <h1 className="">Hi I'm Robbie</h1>
        <div className="line"></div>
      </motion.div>
    </motion.div>
  );
};
// <motion.div
//   initial={{
//     opacity: 0,
//     scale: 0,
//     x: 0,
//   }}
//   animate={{
//     opacity: 1,
//     scale: 1,
//     // rotate: 360,
//     x: 500,
//     // rotateY: 360,
//   }}
//   transition={{
//     delay: 2,
//     duration: 4.5,
//     type: "spring",
//   }}
//   className="h-screen flex flex-col justify-center items-center"
// >
//   <div className="line"></div>
//   <h1 className="">Hi I'm Robbie</h1>
//   <div className="line"></div>
// </motion.div>
export default Hero;
