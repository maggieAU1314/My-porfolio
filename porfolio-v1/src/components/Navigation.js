import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIgloo,
  faAddressCard,
  faBookSkull,
  faEnvelopeOpenText,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Socials from "./Socials";

const Navigation = () => {
  return (
    <div className="nav-bar w-20 h-[100vh] bg-black top-0 left-0 fixed p-3 flex flex-col justify-center text-6xl">
      <Link className="logo text-white mb-auto">
        <button className="js-change-theme focus:outline-none h-6 w-6">
          🌙
        </button>
      </Link>
      <nav className="text-4xl text-white mb-10">
        <NavLink exact="true" activeclassname="active" to="/Login">
          <FontAwesomeIcon
            icon={faUser}
            className="hover:text-blue-400 my-6 mx-auto"
          />
          {/* <span>Contact</span> */}
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="">
          <FontAwesomeIcon
            icon={faIgloo}
            className=" hover:text-blue-400 my-6 "
          />
          {/* <span>Home</span> */}
        </NavLink>
        {/*only this one Home is active in devtool*/}
        <NavLink exact="true" activeclassname="active" to="/profile">
          <FontAwesomeIcon
            icon={faAddressCard}
            className="hover:text-blue-400 my-6 "
          />
          {/* <span>About</span> */}
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/portfolio">
          <FontAwesomeIcon
            icon={faBookSkull}
            className="hover:text-blue-400 my-6"
          />
          {/* <span>Portfolio</span> */}
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            className="hover:text-blue-400 my-6 mx-auto"
          />
          {/* <span>Contact</span> */}
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
