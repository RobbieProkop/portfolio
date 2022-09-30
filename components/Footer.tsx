import { SocialIcon } from "react-social-icons";

type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="h-20 flex justify-center items-center">
      <SocialIcon
        url="https://www.linkedin.com/in/robbie-prokop-1a968a230/"
        fgColor="gray"
        bgColor="transparent"
        target="_blank"
      />
      <SocialIcon
        url="https://www.github.com/robbieprokop"
        fgColor="gray"
        bgColor="transparent"
        target="_blank"
      />
    </div>
  );
};
export default Footer;
