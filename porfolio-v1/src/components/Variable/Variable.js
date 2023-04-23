import { useState, useEffect } from "react";

import "./Variable.css";

const Variable = () => {
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const elements = document.querySelectorAll(".stat-title");

    const timer = setInterval(() => {
      setCounts((prevCounts) => [
        prevCounts[0] + 5,
        prevCounts[1] + 3,
        prevCounts[2] + 7,
      ]);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid-container variable-number">
      <div className="stat-container sm:p-0 ">
        <span className="stat-title">{counts[0]}</span>
        <span className="Plus">+</span>
        <div className="stat-desc slogan">Coding Days</div>
        <div className="stat-desc">
          Every Day practice makes perfect.This is me!
        </div>
      </div>
      <div className="stat-container sm:p-0">
        <span className="stat-title">{counts[1]}</span>
        <span className="Plus">+</span>
        <div className="stat-desc slogan">Design Blocks</div>
        <div className="stat-desc">
          Good design is a language, not a style.This is me!
        </div>
      </div>
      <div className="stat-container sm:p-0">
        <span className="stat-title">{counts[2]}</span>
        <span className="Plus">+</span>
        <div className="stat-desc slogan">Pages</div>
        <div className="stat-desc">
          Save 1 hour a day, we can have 365 hours a year!
        </div>
      </div>
    </div>
  );
};

export default Variable;
