import React from "react";
import { earningData } from "../data/dummy";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked } from "../components";

const Home = () => {
  return (
    <div className="h-full m-10 mt-20 bg-white rounded-lg dark:text-white dark:bg-second-bg-dark lg:mt-10">
      <div className="flex justify-center">
        <div className="w-full m-3 mt-10 bg-white bg-center bg-cover h-60 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl bg-hero-pattern p-9">
          <div className="flex items-center justify-between text-center">
            <div className="px-12 py-3 text-lg text-white rounded-lg bg-white/50">
              <p className="text-sm ">Earnings</p>
              <p className="text-2xl text-gray-600">$1,000,000+</p>
              <button className="p-3 mt-3 duration-200 ease-in-out rounded-lg bg-cyan-700/60 hover:bg-transparent">
                <a href="/#revenue">Check Revenues</a>
              </button>
            </div>
            <p className="pr-20 tracking-widest text-white text-8xl">Company</p>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-wrap items-center justify-center gap-1 text-center">
        {earningData.map((item) => (
          <div
            className="p-4 duration-200 ease-in-out bg-cyan-700/10 hover:bg-cyan-700/30 rounded-xl md:w-56 dark:text-white dark:bg-second-bg-dark pt-9"
            key={item.title}
          >
            <h2 className="text-xl ">{item.title}</h2>
            <p>{item.amount}</p>
            <p className={`text-${item.pcColor}`}>{item.percentage}</p>
            <button
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
              className="p-5 mt-2 text-xl text-gray-500 rounded-full shadow-md hover:scale-105"
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>

      {/* expenses revenues */}
      <div className="flex flex-wrap justify-center gap-10 m-6" id="revenue">
        <div className="p-4 m-3 bg-cyan-700/10 dark:text-gray-200 dark:bg-second-bg-dark rounded-xl">
          <div className="flex justify-between">
            <p className="text-xl">Revenue Updates</p>
            <div className="flex text-xs tracking-widest">
              <GoPrimitiveDot className="mt-1" />
              <span>Expenses </span>
              <GoPrimitiveDot color="teal" className="mt-1 ml-3" />
              <span className="mr-3"> Budjet</span>
            </div>
          </div>

          {/* Chart */}
          <div className="flex flex-wrap justify-center gap-10 mt-8 ">
            <div className="pr-10 m-4 border-r border-white">
              <p>
                <span className="text-2xl">$88,540</span>
                <span className="p-2 ml-1 text-xs font-bold text-gray-600 bg-white rounded-full">
                  27%
                </span>
              </p>
              <p>Budjet</p>
              <div className="mt-10">
                <p>
                  <span className="text-2xl">$60,500</span>
                </p>
                <p>Expenses</p>
              </div>

              <div className="p-3 mt-10 duration-200 ease-in-out rounded-lg bg-cyan-700/60 hover:bg-transparent ">
                <button>Download Report</button>
              </div>
            </div>

            {/* stacked chart */}
            <Stacked width="320px" height="360px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
