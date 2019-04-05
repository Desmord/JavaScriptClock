
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

        this.hourPointer.style.transform = `rotate(${hourTransformationDegrees}deg)`;

        let cx = this.clockWidth / 2;
        let cy = this.clockHeight / 2;

        let r = this.clockWidth / 2 - (this.clockWidth * 0.07);

        let x = r * Math.cos((hourTransformationDegrees - 90) * Math.PI / 180) + 300;
        let y = r * Math.sin((hourTransformationDegrees - 90) * Math.PI / 180) + 300;


        this.hourPointer.style.left = `${x + this.hourPointer.clientWidth}px`;
        this.hourPointer.style.top = `${y}px`;

    }

    updateMinutePointerPosition() {

        let minuteTransformationDegrees = 0;

        let deg = this.actualMinutes * 6;

        this.minutePointer.style.transform = `rotate(${deg}deg)`;


        let cx = this.clockWidth / 2;
        let cy = this.clockHeight / 2;

        let r = this.clockWidth / 2 - (this.clockWidth * 0.02);

        let x = r * Math.cos((deg - 90) * Math.PI / 180) + 300;
        let y = r * Math.sin((deg - 90) * Math.PI / 180) + 300;


        this.minutePointer.style.left = `${x + this.minutePointer.clientWidth}px`;
        this.minutePointer.style.top = `${y}px`;

    }


    showData() {

    }
}

// one hour = 30deg;
// one minute = 6 deg
// one secont = 6 deg






module.exports = {
    Clock
};


// Zdarzenie resize zrobic