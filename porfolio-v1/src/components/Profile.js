import AnimatedLetters from "./AnimatedLetters";
import Test from "./ContactCard";
import { useState } from "react";
import classnames from "classnames";

import ProfileCard from "./ProfileCard";
const Profile = (props) => {
  const [page, setPage] = useState(1);
  const updatePage = (type) => {
    if (type === "remove") {
      if (page > 1) {
        setPage((val) => --val);
      }
    } else {
      if (page < 3) {
        setPage((val) => ++val);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <AnimatedLetters
            strArray={"Profile".split("")}
            customerData="Profile"
          />
        </div>
        <ProfileCard page={page}></ProfileCard>
      </div>
      <nav aria-label="Page navigation">
        <ul className="flex space-x-2 justify-center mt-6 ">
          <li>
            <button
              onClick={() => updatePage("remove")}
              className="flex items-center justify-center w-10 h-10 text-sky-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-sky-100"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage(1)}
              className={classnames(
                "w-10 h-10 text-sky-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-sky-100",
                { "bg-sky-600": page === 1, "text-white": page === 1 }
              )}
            >
              1
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage(2)}
              className={classnames(
                "w-10 h-10 text-sky-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-sky-100",
                { "bg-sky-600": page === 2, "text-white": page === 2 }
              )}
            >
              2
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage(3)}
              className={classnames(
                "w-10 h-10 text-sky-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-sky-100",
                { "bg-sky-600": page === 3, "text-white": page === 3 }
              )}
            >
              3
            </button>
          </li>
          <li>
            <button
              onClick={() => updatePage("add")}
              className="flex items-center justify-center w-10 h-10 text-sky-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-sky-100"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
