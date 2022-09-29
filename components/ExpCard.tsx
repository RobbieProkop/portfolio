import Image from "next/image";
import monk from "../asset/images/monk.jpeg";
import { motion } from "framer-motion";

type Props = {};
const ExpCard = (props: Props) => {
  return (
    <article>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 mx-auto xl:w-[200px] xl:h-[200px]"
      >
        <Image
          src={monk}
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of DhammaDevs</h4>
        <p className="font-bold text-2xl mt-1">DhammaDevs</p>
        <div className="flex space-x-2 my-2">
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
        <p>
          {/* dates */}
          Started June 2022 - PRESENT
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
};
export default ExpCard;
