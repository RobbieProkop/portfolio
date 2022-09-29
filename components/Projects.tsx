type Props = {};
const Projects = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Projects
      </h3>

      <div className="w-full absolute top-[30%] bg-green-600/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
};
export default Projects;
