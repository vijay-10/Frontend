import React, { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

const Header = () => {
  const [brightness, setBrightness] = useState(true);
    const clickHandler = () => {
        setBrightness((prevState) => {
            return !prevState;
        })
    }
  return (
    <div>
      <h1>DevDetective</h1>
      <div>
        <p>LIGHT</p>
        <button onClick={clickHandler}>
          {brightness ? (
            <BsMoonFill className="dark-icon" />
          ) : (
            <BsSunFill className="bright-icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
