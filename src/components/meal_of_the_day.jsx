import React from "react";
const MealOfTheDay = ({ next_meal, action }) => {
  return (
    <div className="relative">
      {next_meal && next_meal.time === action.time && <p className="absolute bg-indigo-600 w-fit px-4 top-[-10] left-5 rounded-md text-white">NEXT</p>}
      <div className={`mt-5 border-2 rounded-lg p-6 ${next_meal && next_meal.time === action.time ? "border-indigo-600 bg-indigo-100" : "border-gray-300"}`}>
        <h2>{action.time}</h2>
        {action.items.map((item, ind) => {
          return <p key={`${action.time}-action-${ind}`}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default MealOfTheDay;
