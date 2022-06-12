import React, { useState } from "react";
import { days, getCurDay } from "../utils/utils";

const PickDay = ({ onSel }) => {
  const curDay = getCurDay();

  return (
    <div className=" bg-indigo-600 w-full h-full fixed top-0 left-0 flex flex-col items-center">
      <img src="icons/close.png" className="w-12 mt-10 cursor-pointer" onClick={() => onSel()} />
      <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
        {days.map((d, ind) => {
          if (curDay === d) {
            return (
              <p key={`${d}-action-${ind}`} onClick={() => onSel(d)} className="text-3xl text-white mt-4">
                Today
              </p>
            );
          }
          return (
            <p key={`${d}-action-${ind}`} onClick={() => onSel(d)} className="text-3xl mt-4 text-slate-400">
              {d.capitalize()}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PickDay;
