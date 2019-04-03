
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

    updateHourPointerPosition() {

        let hourTransformationDegrees = 0;

        if (this.actualHour > 12) {
            let deg = (this.actualHour - 12) * 30;
            let mdeg = 30 / (360 / (this.actualMinutes * 6));
            hourTransformationDegrees = deg + mdeg;
        } else {
            let deg = this.actualHour * 30;
            let mdeg = 30 / (360 / (this.actualMinutes * 6));
            hourTransformationDegrees = deg + mdeg;
        }

        console.log(hourTransformationDegrees);

        this.hourPointer.style.transform = `rotate(${hourTransformationDegrees}deg)`;

        //  tutaj obiliczyc p[ołozenie]
        // / x = cx + r * cos(a);
        // y = cy + * sin (a);

        let orginx = this.hourPointer.offsetLeft;
        let orginy = this.hourPointer.offsetTop;
        let r = (this.clockHeight / 2) - (((this.clockHeight / 2) * 0.07));

        let x = orginx + r * Math.cos(hourTransformationDegrees);
        let y = orginy + r * Math.sin(hourTransformationDegrees);
        console.log(x);
        console.log(y);

        // console.log(this.hourPointer.style);
        this.hourPointer.style.top = `${y}px`;
        this.hourPointer.style.left = `${x}px`;

        // console.log(this.hourPointer);//offset left top

        //Naprawic połąznie i jego oblicznia na okregu
        //  ZMienic rotate zeby bylo dobrz obraca sie nakalo swoich wspolzednych anie nie w srodkowym punkcie
    }


    showData() {
        // console.log(this.clock);
        // console.log(this.hourPointer);
        // console.log(this.minutePointer);
        // console.log(this.secondsPointer);
        // console.log(this.clockWidth);
        // console.log(this.clockHeight);
        // console.log(this.actualTime);
        // console.log(this.actualHour);
        // console.log(this.actualMinutes);
        // console.log(this.actualSeconds);
    }
}

// one hour = 30deg;
// one minute = 6 deg
// one secont = 6 deg






module.exports = {
    Clock
};


// Zdarzenie resize zrobic