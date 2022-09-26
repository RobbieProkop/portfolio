import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance, faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Props = {};
const Header = (props: Props) => {
  return (
    <header>
      <FontAwesomeIcon
        icon={faLinkedin}
        style={{ fontSize: 25, color: "grey" }}
      />
    </header>
  );
};
export default Header;
