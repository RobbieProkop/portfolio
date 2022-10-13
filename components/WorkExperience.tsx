import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExpCard from "./ExpCard";

type Props = {
  experiences: Experience[];
};
const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative  overflow-hidden flex-col text-left md:flex-row max-w-[900px] px-10 justify-evenly items-center mx-auto scroll-smooth"
    >
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-600/80">
        {experiences.map((experience) => (
          <ExpCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};
export default WorkExperience;
