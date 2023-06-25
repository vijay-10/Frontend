import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count-1)
  }
  function increaseHandler() {
    setCount(count+1)
  }
  function resetHandler() {
    setCount(0)
  }

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg-[#344151] gap-8'>
      <h1 className="text-2xl font-semibold text-[#0398d4]">Increment & Decrement</h1>
      <div className="flex py-1 items-center bg-white rounded-sm text-5xl font-semibold">
        <button className="border-r-2 my-2 px-8" onClick={decreaseHandler}>-</button>
        <div className="px-10">{count}</div>
        <button className="border-l-2 border-gray my-2 px-8" onClick={increaseHandler}>+</button>
      </div>
      <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm" onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
