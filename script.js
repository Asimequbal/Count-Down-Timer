let Element = document.querySelector('.inner_container')
let EndCount = new Date('January 30 2023 03:00:00').getTime()
// console.log(EndCount)
setInterval(() =>{


let currentTime = new Date().getTime()    
let Time = EndCount - currentTime
// console.log(Time)
let days = Math.floor(Time/(1000*60*60*24))
let hours = Math.floor((Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let minutes = Math.floor((Time % (1000 * 60 * 60)) / (1000 * 60))
let seconds = Math.floor((Time % (1000 * 60)) / 1000)


console.log(currentTime)

document.querySelector('#Days').innerText = days
document.querySelector('#Hours').innerText = hours
document.querySelector('#Minutes').innerText = minutes
document.querySelector('#Seconds').innerText = seconds

// element.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds '

if (time < 0) {
    element.innerHTML = "Time is up!!!"
}

}, 1000);


