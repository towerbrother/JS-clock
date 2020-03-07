
//query selector allows us to select each hand calling them by their unique class
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    
    //getSeconds() - method for the object Date
    //(seconds / 60) - you obtain the unit
    //(seconds / 60) * 360 - you obtain the all range of degrees
    // the (+ 90) - used to offset the default that we introduced in the stylesheet (transform: rotate(90deg);)
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //to make the second-hand move we need to add a style
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 24) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


//the setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds)
//1000 ms = 1 second
setInterval(setDate, 1000);