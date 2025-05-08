"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Ashton Pate
      Date:  5/8/2025 

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

//step 3 create timer constructor
function timer(min, sec)
{
      timer.minutes = min;
      timer.seconds = sec;
      timer.timeID = null;
}

/*
console.log("step 3 good");
*/

//step 4
timer.prototype.runPause(timer, minBox, secBox) 
{
      //step 5 
      if (timer.timeID == truthy)
      {
            window.clearInterval(timer.timeID);
      }
      else
      {

            window.setInterval(countdown(1000));

            timer.timeID = setInterval();
      }
}


//step 6 creats countdown function
function countdown()
{
      if(timer.seconds > 0)
      {
            timer.seconds = timer.seconds - 1;
      }
      else if(timer.minutes > 0)
      {
            timer.minutes = timer.minutes - 1;

            timer.seconds = 59;

           // console.log("if else statment");
      }
      else
      {
            window.clearInterval(timer.timeID,);
      }

      //console.log("after if else")

      minBox.value = timer.minutes;
      secBox.value = timer.seconds;

      /*
      timer.minutes = minBox.value;
      timer.seconds = secBox.value;
      */
}



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//step 7
timer = new myTimer(minBox.value, secBox.value);

//step 8
document.getElementById("minutesBox").onchange = (myTimer.minutes = minBox.value);

document.getElementById("secondsBox").onchange = (myTimer.seconds = secBox.value);




//step 9
/*
document.getElementById("runPauseButton").onclick = runPause(myTimer, minBox, secBox);
*/

runPauseButton.addEventListner("click", runPause(myTimer, minBox, secBox));