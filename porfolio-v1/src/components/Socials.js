import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Socials = () => {
  return (
    <ul className="text-base text-white">
      <li>
        <a href="https://linkedin.com" target="blank" rel="non-content">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:text-yellow-400 my-4 w-6 mx-auto"
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com" target="blank">
          <FontAwesomeIcon
            icon={faTwitter}
            className="hover:text-yellow-400 my-4  w-6 mx-auto"
          />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:text-yellow-400 my-4  w-6 mx-auto"
          />
        </a>
      </li>
    </ul>
  );
};
export default Socials;
