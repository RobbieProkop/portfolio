type Props = {};
const Contact = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center">
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Contact
      </h3>

      <div>
        <h4 className="text-4xl font-semibold text-center">
          You aren't going to be disapointed{" "}
          <span className="underline declaration-green-600/50">Let's Talk</span>
        </h4>
      </div>
    </div>
  );
};
export default Contact;
