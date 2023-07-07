import React from "react";

const Card = (props) => {
  return (
    <div className='w-[30%] h-full rounded-3xl shadow-xl bg-[white]'>
      {props.children}
    </div>
  );
};

export default Card;
