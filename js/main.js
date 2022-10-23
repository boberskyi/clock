"use strict";

const secondHand = document.querySelector('.second-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);//detect how many degrees to rotate. 60 seconds in minute and 360 degrees max

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);