import css from "./mainCss.css";


const Clock = require(`./clockJs/clock`);

const clock = new Clock.Clock(document.querySelector(`.clock`));

clock.showData()
// clock.updateHourPointerPosition();
// clock.updateMinutePointerPosition();
// clock.updateSecondPointerPosition();

// ------------------------------
// ------------------------------
// ------------------------------

// console.log(document.querySelector(`.clock`).childNodes[19]);


// Proba animacji

const proba = () => {

    clock.updateTime();
    clock.updateHour();
    clock.updateMinutes();
    clock.updateSeconds();

    clock.updateHourPointerPosition();
    clock.updateMinutePointerPosition();
    clock.updateSecondPointerPosition();


}

const proba2 = () => {

    window.requestAnimationFrame(proba);
    setTimeout(() => {
        proba2();
    }, 1);

}

proba2();