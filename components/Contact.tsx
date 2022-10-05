import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import BackgroundCircles from "./BackgroundCircles";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};
const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    // may need these classes for background cirlcles: h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center top-24 space-y-8 overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scale: [0, 1, 2, 2, 1, 1, 0],
          rotate: [0, 0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="box flex items-center justify-center mx-auto z-25 top-0"
      />
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center items-center flex flex-col">
          You aren't going to be disapointed,
          <span className="underline declaration-green-600/50">Let's Talk</span>
        </h4>

        <div className="space-y-10">
          {/* Icons */}
          <div className="flex items-center justify-center space-x-5">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-green-600/70 animate-pulse"
              size="lg"
            />
            <p className="text-2xl">+1-859-666-4244</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-green-600/70 animate-pulse"
              size="lg"
            />
            <p className="text-2xl">robbieprokop@pm.me</p>
          </div>
        </div>

        <form
          name="contact"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
          method="POST"
          data-netlify="true"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-green-600 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
