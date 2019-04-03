
// const setUpClock = () => {
//     console.log(`Ustawianie zegara`);
// }

// const startClock = () => {
//     console.log(`Start zegara`);
// }

class Clock {

    constructor(clockElement) {
        this.clock = clockElement;
        this.hourPointer = this.clock.childNodes[19];
        this.minutePointer = this.clock.childNodes[21];
        this.secondsPointer = this.clock.childNodes[23];
        this.clockWidth = this.clock.clientWidth;
        this.clockHeight = this.clock.clientHeight;
        this.actualTime = new Date();
        this.actualHour = this.actualTime.getHours();
        this.actualMinutes = this.actualTime.getMinutes();
        this.actualSeconds = this.actualTime.getSeconds();
    }

    updateClockWidth() {
        this.clockWidth = this.clock.clientWidth;
    }

    updateClockHeight() {
        this.clockHeight = this.clock.clientHeight;
    }

    updateTime() {
        this.actualTime = new Date();
    }

    updateHour() {
        this.actualHour = this.actualTime.getHours();
    }

    updateMinutes() {
        this.actualMinutes = this.actualTime.getMinutes();
    }

    updateSeconds() {
        this.actualSeconds = this.actualTime.getSeconds();
    }

    


    showData() {
        // console.log(this.clock);
        // console.log(this.hourPointer);
        // console.log(this.minutePointer);
        // console.log(this.secondsPointer);
        // console.log(this.clockWidth);
        // console.log(this.clockHeight);
        console.log(this.actualTime);
        console.log(this.actualHour);
        console.log(this.actualMinutes);
        console.log(this.actualSeconds);
    }
}



module.exports = {
    Clock
};


// Zdarzenie resize zrobic