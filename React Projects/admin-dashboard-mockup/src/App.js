import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App flex bg-[#f9faf5]">
      <Navigation className="flex flex-col w-[5%] h-screen justify-between items-center p-6 text-2xl"/>
      <Main className="flex flex-col w-[95%] h-screen p-4 text-2xl gap-4"/>
    </div>
  );
};

export default App;
