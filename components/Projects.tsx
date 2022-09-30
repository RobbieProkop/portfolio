import Image from "next/image";
import monk from "../asset/images/monk.jpeg";

type Props = {};
const Projects = (props: Props) => {
  // dummy array
  const projects = ["NLIF", "ZiziKarma", "Paw-Patrol", "API-Mania"];
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20">
            <div className="h-[350px] w-[350px]">
              <Image src={monk} objectFit="contain" />
            </div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-green-600/50">
                  ZiziKarma
                </span>{" "}
                Psychology
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-green-600/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
};
export default Projects;
