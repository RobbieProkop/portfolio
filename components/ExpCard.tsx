import Image from "next/image";
import monk from "../asset/images/monk.jpeg";
import { motion } from "framer-motion";

type Props = {};
const ExpCard = (props: Props) => {
  return (
    <motion.article
      initial={{ y: 0 }}
      whileHover={{ y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] bg-[#292929] px-6 py-8 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-20"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 xl:w-[150px] xl:h-[150px]"
      >
        <Image
          src={monk}
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </motion.div>
      <div className="px-0 md:px-8">
        <h4 className="text-4xl font-light">CEO of DhammaDevs</h4>
        <p className="font-bold text-2xl my-1">DhammaDevs</p>
        <div className="flex space-x-2 ">
          <div className="h-10 w-10">
            <Image src={monk} className="rounded-full" />
          </div>
          <div className="h-10 w-10">
            <Image src={monk} className="rounded-full" />
          </div>
          <div className="h-10 w-10">
            <Image src={monk} className="rounded-full" />
          </div>
          <div className="h-10 w-10">
            <Image src={monk} className="rounded-full" />
          </div>
          {/* Tech Stacks */}
          {/* Tech Stacks */}
          {/* Tech Stacks */}
          {/* Tech Stacks */}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {/* dates */}
          Started June 2022 - PRESENT
        </p>
        <ul className="list-disc space-y-3 ml-5 text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </motion.article>
  );
};
export default ExpCard;
