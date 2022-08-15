/*const secondsHand = document.getElementById("seconds-hand")
const minutesHand = document.getElementById("minutes-hand")
const hoursHand = document.getElementById("hours-hand")

function getTime() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  const timeInterval = 6
  secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
  minutesHand.style.transform ='rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
  hoursHand.style.transform = 'rotate('+ (hours * 30 + minutes / 2) + 'deg)'
}

setInterval(getTime, 100)*/
const monthpanel=document.getElementById("month")
const daypanel=document.getElementById("day")
const yearpanel=document.getElementById("year")

const secondspanel=document.getElementById("seconds")
const minutespanel=document.getElementById("minutes")
const hourspanel=document.getElementById("hours")



function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6

    seconds.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutes.style.transform ='rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
    hours.style.transform = 'rotate('+ (hours * 30 + minutes / 2) + 'deg)'
  }
}