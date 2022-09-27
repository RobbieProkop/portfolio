import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance, faAnchor } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

type Props = {};
const Header = (props: Props) => {
  return (
    <header>
      {/* <FontAwesomeIcon
        icon={faLinkedin}
        style={{ fontSize: 25, color: "grey" }}
      /> */}
      <SocialIcon
        url="https://www.linkedin.com/in/robbie-prokop-1a968a230/"
        fgColor="gray"
        bgColor="transparent"
        target="_blank"
      />
      <h2>DhammaDevs</h2>
    </header>
  );
};
export default Header;
