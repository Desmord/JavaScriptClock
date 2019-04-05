import css from "./mainCss.css";


const Clock = require(`./clockJs/clock`);

const clock = new Clock.Clock(document.querySelector(`.clock`));

clock.showData()
clock.updateHourPointerPosition();
clock.updateMinutePointerPosition();

// ------------------------------
// ------------------------------
// ------------------------------

// console.log(document.querySelector(`.clock`).childNodes[19]);