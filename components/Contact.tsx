import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};
const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dhammadevs@gmail.com?subject=${formData.subject}&body=Hi, I'm ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="contact-box h-screen flex relative flex-col text-center md:text-left  max-w-7xl px-10 mx-auto justify-evenly items-center top-24 space-y-8 overflow-hidden">
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <BackgroundCircles />
        <h4 className="text-4xl font-semibold text-center items-center flex flex-col">
          You aren&apos;t going to be disapointed,
          <span className="underline declaration-green-600/50">
            Let&apos;s Talk
          </span>
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
          className="contact-form flex flex-col space-y-2 w-fit mx-auto"
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
