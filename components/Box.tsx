import { motion } from "framer-motion";

type Props = {};
const Box = (props: Props) => {
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -500,
      }}
      transition={{
        duration: 3,
      }}
      className=" flex items-center justify-center"
    >
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scale: [0, 1, 2, 2, 1, 1, 0],
          rotate: [0, 0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="box mx-auto top-0 z-25"
      />
    </motion.div>
  );
};
export default Box;
