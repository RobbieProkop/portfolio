import Image from "next/image";
import monk from "../asset/images/monk.jpeg";
import { motion } from "framer-motion";

type Props = {};
const Projects = (props: Props) => {
  // dummy array
  const projects = ["NLIF", "ZiziKarma", "Paw-Patrol", "API-Mania"];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Projects
      </h3>

      <div className="relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-[350px] w-[350px]"
            >
              <Image src={monk} objectFit="contain" />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-green-600/50">
                  ZiziKarma
                </span>{" "}
                Psychology
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                quidem officia voluptatem provident mollitia ipsam alias
                repudiandae expedita. Nisi recusandae debitis blanditiis optio
                minima nesciunt labore expedita aliquid nihil nulla, amet,
                soluta aliquam deserunt pariatur laborum iusto quis consequuntur
                facere earum, inventore a ut voluptates! Fuga obcaecati odio
                porro quasi?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-green-600/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
};
export default Projects;
