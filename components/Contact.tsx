import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};
const Contact = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center">
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
      </div>
    </div>
  );
};
export default Contact;
