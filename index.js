// Date limit of our countdown
let countDate = new Date('Apr 10 2018 00:00:00')
//Arrow Fuction to bring us the Remaining Time, Seconds, Minutes, Hours and Days
const TimeLeft = countDate => {
    let now = new Date(),
    rTime = (new Date(countDate) - now + 1000) / 1000,
    rSeconds = ( '0' + Math.floor(rTime % 60)).slice(-2),
    rMinutes = ( '0' + Math.floor(rTime / 60 % 60)).slice(-2),
    rHours = ( '0' + Math.floor(rTime / 3600 % 24)).slice(-2),
    rDays = Math.floor(rTime / (3600 * 24))
    // Return an object with all the date data
    return {
        rTime,
        rSeconds,
        rMinutes,
        rHours,
        rDays
    }
};
//Set up our interval to start the countdown
 const countdown = setInterval(() => {
    //call the arrow function sending the string with the CountDown Date
    let t = TimeLeft(countDate)
    //Set to all divs the current data
    document.getElementById("days").textContent = t.rDays + '\r\n'
    document.getElementById("hours").textContent = t.rHours + '\r\n'
    document.getElementById("minutes").textContent = t.rMinutes + '\r\n'
    document.getElementById("seconds").textContent = t.rSeconds + '\r\n'
    if (t.rTime <= 1) {
        clearInterval(countdown)
        alert('The time is over!')
    }
 }, 1000);