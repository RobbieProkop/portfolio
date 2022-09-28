import Image from "next/image";
import headshot from "../asset/images/headshot.jpg";
import { motion } from "framer-motion";

type Props = {};
const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row-reverse max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} // used only if want to happen once
        transition={{
          duration: 1.2,
          type: "spring",
        }}
        className="relative mb-7 mt-7 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      >
        <Image
          src={headshot}
          layout="fill"
          objectFit="cover"
          className="rounded-full md:rounded-lg"
        />
      </motion.div>

      <div className="space-y px-0 md:px-10">
        <h4 className="text-4xl mb-3 font-semibold">Who am I?</h4>

        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, maiores
          rem. Voluptatibus reiciendis quos vero quae, laudantium quisquam
          voluptate beatae, explicabo a sit, tempora illo commodi illum eveniet.
          Et nostrum totam nobis delectus nisi, mollitia, aliquam expedita
          doloribus saepe aperiam unde voluptate excepturi iure magnam
          consectetur? Illo, ab voluptate. Deleniti mollitia voluptas inventore
          consequatur nam consequuntur neque eaque officiis perferendis fugiat
          odio velit excepturi accusamus nostrum repudiandae dolorum, culpa
          laudantium perspiciatis. Nisi rem asperiores exercitationem
          consequuntur corrupti a blanditiis aut ab tenetur reprehenderit
          suscipit enim ea eum officiis placeat aliquid, quidem similique
          explicabo minus commodi atque temporibus illo eveniet. Officiis.
        </p>
      </div>
    </motion.div>
  );
};
export default About;
