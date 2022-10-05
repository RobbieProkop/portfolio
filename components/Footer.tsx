import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};
const Footer = ({ socials }: Props) => {
  return (
    <div className="h-20 flex justify-center items-center">
      {socials.map((social) => (
        <SocialIcon
          key={social._id}
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="hover:animate-pulse"
        />
      ))}
    </div>
  );
};
export default Footer;
