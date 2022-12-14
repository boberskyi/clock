"use strict";

const secondHand = document.querySelector('.second-hand'),
  minsHand = document.querySelector('.min-hand'),
  hoursHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;

  const hours = now.getHours();
  const hoursDegrees = (((hours / 12) + ((mins/60)/12)) * 360) + 90;


  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setDate();

setInterval(setDate, 1000);