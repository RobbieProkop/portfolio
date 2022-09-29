import { motion } from "framer-motion";
import ExpCard from "./ExpCard";

type Props = {};
const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative  overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto scroll-smooth"
    >
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
      </div>
    </motion.div>
  );
};
export default Experience;
