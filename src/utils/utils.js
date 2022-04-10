Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function getCurDay() {
  const dt = new Date();
  return days[dt.getDay()];
}

export { days, getCurDay };
