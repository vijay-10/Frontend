import React from "react";
import Card from "./Card";
import { BsDot } from "react-icons/bs";

const Graphs = () => {
  return (
    <div className="h-44 flex flex-row justify-between w-full">
      <div className="w-[49%] h-full rounded-3xl shadow-xl bg-[white]">
        <div className="flex flex-row justify-between items-center px-4 py-2 relative">
          <h1 className="text-xl font-bold">Costs</h1>
          <p className="text-sm text-slate-400 absolute top-3 left-48">
            Aug 21 - Sep 21
          </p>
          <div className="w-[40%] flex flex-row justify-around items-center  text-base font-semibold">
            <span className="flex flex-row items-center">
              <BsDot className="text-2xl text-purple-500" />
              <span>Costs</span>
            </span>
            <span className="flex flex-row items-center">
              <BsDot className="text-2xl text-blue-500" />
              <span> Exps</span>
            </span>
            <span className="flex flex-row items-center">
              <BsDot className="text-2xl text-yellow-500" />
              <span> Odds</span>
            </span>
          </div>
        </div>

        <div>
            <div className="relative">
                <span className="text-base ml-6 text-gray-400">8</span>
                <div className="w-[80%] mx-auto h-[1px] border absolute top-5 left-14"></div>
            </div>
            <div className="relative">
                <span className="text-base ml-6 text-gray-400">6</span>
                <div className="w-[80%] mx-auto h-[1px] border absolute top-5 left-14"></div>
            </div>
            <div className="relative">
                <span className="text-base ml-6 text-gray-400">4</span>
                <div className="w-[80%] mx-auto h-[1px] border absolute top-5 left-14"></div>
            </div>
            <div className="relative">
                <span className="text-base ml-6 text-gray-400">2</span>
                <div className="w-[80%] mx-auto h-[1px] border absolute top-5 left-14"></div>
            </div>
        </div>
      </div>

      <div className="w-[49%] h-full rounded-3xl shadow-xl bg-[white]">
        <div className="flex flex-row justify-between items-center px-4 py-2 relative">
          <h1 className="text-xl font-bold">ACoS vs TACoS</h1>
          <p className="text-sm text-slate-400 absolute top-3 left-48">
            Aug 21 - Sep 21
          </p>
          <div className="w-[40%] flex flex-row justify-around items-center  text-base font-semibold">
            <span className="flex flex-row items-center">
              <BsDot className="text-2xl text-purple-500" />
              <span>Costs</span>
            </span>
            <span className="flex flex-row items-center">
              <BsDot className="text-2xl text-blue-500" />
              <span> Exps</span>
            </span>
            <span className="flex flex-row items-center">
              <BsDot className="text-2xl text-yellow-500" />
              <span> Odds</span>
            </span>
          </div>
        </div>

        <div className="relative">
            <div className="relative">
                <span className="text-base ml-6 text-gray-400">8</span>
                <div className="w-[80%] mx-auto h-[1px] border absolute top-5 left-14"></div>
            </div>
            <div className="relative">
                <span className="text-base ml-6 text-gray-400">6</span>
                <div className="w-[80%] mx-auto h-[1px] border absolute top-5 left-14"></div>
            </div>
            <div className="relative">
                <span className="text-base ml-6 text-gray-400">4</span>
                <div className="w-[80%] mx-auto h-[1px] border absolute top-5 left-14"></div>
            </div>
            <div className="relative">
                <span className="text-base ml-6 text-gray-400">2</span>
                <div className="w-[80%] mx-auto h-[1px] border absolute top-5 left-14"></div>
            </div>

            <div className="h-[75%] w-24 bg-purple-500 rounded-xl absolute top-5 right-40"></div>
            <div className="text-white bg-black px-2 py-1 rounded-xl text-sm absolute top-[3.5rem] left-[8rem] z-10">8.15%</div>
            <div className="h-[75%] w-24 bg-purple-500 rounded-xl absolute top-5 left-40"></div>
            <div className="text-white bg-black px-2 py-1 rounded-xl text-sm absolute top-[2rem] right-[8rem] z-10">72.25%</div>

            <div className="w-[35%] h-[1px] border border-black absolute top-[3.9rem] left-[15rem] rotate-[-7deg]	"></div>
        </div>

      </div>
    </div>
  );
};

export default Graphs;
