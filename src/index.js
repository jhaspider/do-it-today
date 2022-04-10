import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import MealOfTheDay from "./components/meal_of_the_day";
import PickDay from "./components/pick_day";

import data from "./data/do_it_data.json";

import { days, getCurDay } from "./utils/utils";

const dt = new Date();

const Today = () => {
  const [sel_day, setSelDay] = useState(false);

  const [day, setDay] = useState(() => {
    return getCurDay();
  });

  const day_data = data[day];
  let next_meal = null;
  if (day === getCurDay()) next_meal = day_data.find((meal) => meal.hr > dt.getHours() && meal.min > dt.getMinutes());

  const onDaySelection = (d) => {
    if (d) setDay(d);
    setSelDay(false);
  };

  const pickDay = () => setSelDay(true);

  return (
    <>
      <div className="p-5">
        <h1 className="mt-5">Today</h1>
        <p onClick={pickDay} className="bg-indigo-600 text-white px-5 py-2 w-fit rounded-2xl">
          {day.capitalize()}
        </p>

        <div className="mt-20 mb-20">
          {day_data.map((action, ind) => {
            return <MealOfTheDay action={action} next_meal={next_meal} key={`time-ind-${ind}`} />;
          })}
        </div>
      </div>
      {sel_day && <PickDay onSel={onDaySelection} />}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Today tab="home" />);
