import { motion } from "framer-motion";

type Props = {};
const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border [#333333] rounded-full h-[650px] w-[650px] mt-[41rem] animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-[41rem] animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-[41rem] animate-ping" />
      <div className=" absolute border border-red-500 rounded-full h-[650px] w-[650px] mt-[41rem] animate-pulse opcaity-20" />
      <div />
      <div className=" absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-[41rem] animate-ping" />
    </motion.div>
  );
};
export default BackgroundCircles;
