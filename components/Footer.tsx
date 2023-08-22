import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
import cv from "../asset/images/cv.png";
import Image from "next/image";
import Link from "next/link";

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

      <Link href="https://flowcv.com/resume/sdqld3o6di">
        <a target="_blank">
          <Image src={cv} alt="cv" height={30} width={30}></Image>
        </a>
      </Link>
    </div>
  );
};
export default Footer;
