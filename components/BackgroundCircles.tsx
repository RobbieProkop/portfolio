import { motion } from "framer-motion";

type Props = {};
const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className=" absolute border [#333333] rounded-full h-[650px] w-[650px] mt-[43rem] animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-[43rem] animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-[43rem] animate-ping" />
      <div className=" absolute border border-red-500 rounded-full h-[650px] w-[650px] mt-[43rem] animate-pulse opcaity-20" />
      <div />
      <div className=" absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-[43rem] animate-ping" />
    </div>
  );
};
export default BackgroundCircles;
