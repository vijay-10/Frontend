import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const InputField = (props) => {
  const [user, setUser] = useState("");
  const clickHandler = (event) => {
    event.preventDefault();
    props.setUsername(user);
  };
  return (
    <div>
      <BsSearch />
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter a GitHub username..."
      />
      <button onClick={clickHandler}>Search</button>
    </div>
  );
};

export default InputField;
