import React, { useState } from "react";
import { getCurDay } from "../utils/utils";
const MealOfTheDay = ({ next_meal, action }) => {
  return (
    <div className={`mt-5 border-2 rounded-lg p-6 ${next_meal && next_meal.time === action.time ? "border-indigo-600 bg-indigo-100" : "border-gray-300"}`}>
      <h2>{action.time}</h2>
      {action.items.map((item, ind) => {
        return <p key={`${action.time}-action-${ind}`}>{item}</p>;
      })}
    </div>
  );
};

export default MealOfTheDay;
