import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import data from "./data/do_it_data.json";

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function getCurDay() {
  const dt = new Date();
  return days[dt.getDay()];
}

const PickDay = ({ onSel }) => {
  return (
    <div className="w-full h-full bg-indigo-400 absolute top-0 left-0 flex flex-col justify-center items-center cursor-pointer">
      {days.map((d, ind) => {
        return (
          <p key={`${d}-action-${ind}`} onClick={() => onSel(d)} className="text-3xl mt-4">
            {d.capitalize()}
          </p>
        );
      })}
    </div>
  );
};

const TimeOfTheDay = ({ action }) => {
  return (
    <div className="mt-5 border rounded-lg p-6">
      <h2>{action.time}</h2>
      {action.items.map((item, ind) => {
        return <p key={`${action.time}-action-${ind}`}>{item}</p>;
      })}
    </div>
  );
};

const Today = () => {
  const [sel_day, setSelDay] = useState(false);
  const [day, setDay] = useState(() => {
    return getCurDay();
  });

  const day_data = data[day];

  const onDaySelection = (d) => {
    setDay(d);
    setSelDay(false);
  };

  const pickDay = () => {
    setSelDay(true);
  };
  return (
    <>
      <div className="p-5">
        <h1>Today</h1>
        <p onClick={pickDay} className="bg-indigo-200 px-5 py-2 w-fit rounded-2xl">
          {day.capitalize()}
        </p>

        {day_data.map((action, ind) => {
          return <TimeOfTheDay action={action} key={`time-ind-${ind}`} />;
        })}
      </div>
      {sel_day && <PickDay onSel={onDaySelection} />}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Today tab="home" />);
