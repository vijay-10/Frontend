import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="h-64 flex flex-row justify-between">
      <Card>
        <div className="w-full h-full flex flex-col space-y-2 px-8 py-2">
          <h1 className="font-semibold">Summary</h1>
          <div className="space-y-1">
            <div className="text-base font-semibold p-2 flex flex-row justify-between border rounded-2xl bg-blue-200 text-blue-900">
              <p>Overview</p>
              <span className="border bg-blue-100 rounded-2xl px-2">1,552</span>
            </div>
            <div className="text-base font-semibold p-2 flex flex-row justify-between border rounded-2xl bg-violet-200 text-violet-900">
              <p>Campaigns</p>
              <span className="border bg-violet-100 rounded-2xl px-2">
                1,552
              </span>
            </div>
            <div className="text-base font-semibold p-2 flex flex-row justify-between border rounded-2xl bg-pink-200 text-pink-900">
              <p>Ad Group</p>
              <span className="border bg-pink-100 rounded-2xl px-2">1,552</span>
            </div>
            <div className="text-base font-semibold p-2 flex flex-row justify-between border rounded-2xl bg-yellow-200 text-yellow-900">
              <p>Keywords</p>
              <span className="border bg-yellow-100 rounded-2xl px-2">
                1,552
              </span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="w-full h-full flex flex-col space-y-2 px-8 py-2">
          <div className="flex flex-col items-center justify-between space-y-4">
            <h1 className="font-semibold">Top 5 products by spend</h1>
            <p className="text-sm text-gray-400 font-semibold">Total Score</p>
            <h2 className="text-4xl font-semibold">2,985</h2>
            <div className="bg-[#f1f3e9] w-fit text-center p-2 rounded-2xl text-lg">
              <h3 className="font-semibold">$1,815.67</h3>
              <p className="text-gray-400"> B07MCGRV7M</p>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="w-full h-full flex flex-col space-y-2 px-8 py-2">
          <h1 className="font-semibold">Highest ACoS campaigns</h1>
          <div className="flex h-full text-[0.95rem] font-semibold gap-6">
            <div>
              <h2 className="font-semibold text-slate-400">Campaign</h2>
              <div className="flex items-center space-x-1">
                <div class="w-5 h-5 rounded-full bg-pink-400 border-1 border-gray-200 flex justify-center items-center">
                  <span class="text-lg font-semibold">A</span>
                </div>
                <h3>B07MCGRV7M</h3>
              </div>
              <div className="flex items-center space-x-1">
                <div class="w-5 h-5 rounded-full bg-pink-400 border-1 border-gray-200 flex justify-center items-center">
                  <span class="text-lg font-semibold">A</span>
                </div>
                <h3>Campaign - 3..</h3>
              </div>
              <div className="flex items-center space-x-1">
                <div class="w-5 h-5 rounded-full bg-yellow-400 border-1 border-gray-200 flex justify-center items-center">
                  <span class="text-lg font-semibold">M</span>
                </div>
                <h3>Research - Ac...</h3>
              </div>
              <div className="flex items-center space-x-1">
                <div class="w-5 h-5 rounded-full bg-yellow-400 border-1 border-gray-200 flex justify-center items-center">
                  <span class="text-lg font-semibold">M</span>
                </div>
                <h3>BOBS&CSSHSS6</h3>
              </div>
              <div className="flex items-center space-x-1">
                <div class="w-5 h-5 rounded-full bg-pink-400 border-1 border-gray-200 flex justify-center items-center">
                  <span class="text-lg font-semibold">A</span>
                </div>
                <h3>House Numb...</h3>
              </div>
            </div>
            <div className="text-slate-400">
              <h2 className="font-semibold text-slate-400">Spend</h2>
              <h3>$34.09</h3>
              <h3>$32.63</h3>
              <h3>$40.23</h3>
              <h3>$41.26</h3>
              <h3>$49.72</h3>
            </div>
            <div className="text-slate-400">
              <h2 className="font-semibold text-slate-400">Sales</h2>
              <h3>$134.09</h3>
              <h3>$322.63</h3>
              <h3>$240.23</h3>
              <h3>$441.26</h3>
              <h3>$649.72</h3>
            </div>
            <div>
              <h2 className="font-semibold text-slate-400">ACoS</h2>
              <h3>$234.09</h3>
              <h3>$622.63</h3>
              <h3>$140.23</h3>
              <h3>$241.26</h3>
              <h3>$449.72</h3>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
