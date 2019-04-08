
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
        this.animation = null;

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

    /**
     * Updating hour pointer posiotion
     */
    updateHourPointerPosition() {

        let hourTransformationDegrees = 0;

        // Calculate rotate degres
        if (this.actualHour > 12) {
            // Degress for hour
            let deg = (this.actualHour - 12) * 30;
            // Degress for minutes
            let mdeg = 30 / (360 / (this.actualMinutes * 6));
            // Adding both
            hourTransformationDegrees = deg + mdeg;
        } else {
            // Degress for hour
            let deg = this.actualHour * 30;
            // Degress for minutes
            let mdeg = 30 / (360 / (this.actualMinutes * 6));
            // Adding both
            hourTransformationDegrees = deg + mdeg;
        }

        // Setting new rotation angle
        this.hourPointer.style.transform = `rotate(${hourTransformationDegrees}deg)`;

        // Caclculation of new coordinates for pointer in a circle
        let cx = this.clockWidth / 2;
        let cy = this.clockHeight / 2;

        let r = this.clockWidth / 2 - (this.clockWidth * 0.07);

        let x = r * Math.cos((hourTransformationDegrees - 90) * Math.PI / 180) + this.clockWidth / 2;
        let y = r * Math.sin((hourTransformationDegrees - 90) * Math.PI / 180) + this.clockWidth / 2;

        // Seting new pointer position
        this.hourPointer.style.left = `${x + this.hourPointer.clientWidth}px`;
        this.hourPointer.style.top = `${y}px`;

    }

    /**
    * Updating minute pointer posiotion
    */
    updateMinutePointerPosition() {

        let minuteTransformationDegrees = 0;

        // Calculate rotate degres
        let deg = this.actualMinutes * 6;

        // Setting new rotation angle
        this.minutePointer.style.transform = `rotate(${deg}deg)`;

        // Caclculation of new coordinates for pointer in a circle
        let cx = this.clockWidth / 2;
        let cy = this.clockHeight / 2;

        let r = this.clockWidth / 2 - (this.clockWidth * 0.02);

        let x = r * Math.cos((deg - 90) * Math.PI / 180) + this.clockWidth / 2;
        let y = r * Math.sin((deg - 90) * Math.PI / 180) + this.clockWidth / 2;

        // Seting new pointer position
        this.minutePointer.style.left = `${x}px`;
        this.minutePointer.style.top = `${y}px`;

    }

    /**
    * Updating seconds pointer posiotion
    */
    updateSecondPointerPosition() {

        let secondTransformationDegrees = 0;

        // Calculate rotate degres
        let deg = this.actualSeconds * 6;

        // Seting new rotation angle
        this.secondsPointer.style.transform = `rotate(${deg}deg)`;

        // Caclculation of new coordinates for pointer in a circle
        let cx = this.clockWidth / 2;
        let cy = this.clockHeight / 2;

        let r = this.clockWidth / 2 - (this.clockWidth * 0.17);

        let x = r * Math.cos((deg - 90) * Math.PI / 180) + this.clockWidth / 2;
        let y = r * Math.sin((deg - 90) * Math.PI / 180) + this.clockWidth / 2;

        // Seting new pointer position
        this.secondsPointer.style.left = `${x + this.secondsPointer.clientWidth}px`;
        this.secondsPointer.style.top = `${y}px`;

    }


    /**
     * Setting proper pointers start position
     */
    setStartPosition() {

        this.updateTime();
        this.updateHour();
        this.updateMinutes();
        this.updateSeconds();

        this.updateHourPointerPosition();
        this.hourPointer.style.display = `block`;

        this.updateMinutePointerPosition();
        this.minutePointer.style.display = `block`;

        this.updateSecondPointerPosition();
        this.secondsPointer.style.display = `block`;

    }


    /**
     * Updating time values then updates pointers positions
     */
    animationFrame() {

        // Updating times
        this.updateTime();
        this.updateHour();
        this.updateMinutes();
        this.updateSeconds();

        // Updating pointers position
        this.updateHourPointerPosition();
        this.updateMinutePointerPosition();
        this.updateSecondPointerPosition();

    }

    /**
     * Starts clock animation
     */
    startAnimation() {

        this.animation = setTimeout(() => {
            window.requestAnimationFrame(this.animationFrame.bind(this));
            this.startAnimation();
        }, 1);

    }

    /**
     * Stops clock animation
     */
    stopAnimation() {

        clearTimeout(this.animation);

    }



}




module.exports = {
    Clock
};


// Zdarzenie resize zrobic