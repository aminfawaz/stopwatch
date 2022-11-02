let seconds = 00
let milliseconds = 00
let minutes = 00
let hours = 00

let stop = false
let r = false
let s = false

let millisec = document.getElementById("milliseconds")
let sec = document.getElementById("seconds")
let min = document.getElementById("minutes")
let hr = document.getElementById("hours")


setInterval(start, 10)


function start() {
    if (stop === false && r === false && s === true) {
        milliseconds ++
        if (milliseconds < 10){
            millisec.innerHTML = "0" + milliseconds
        }
        if (milliseconds > 9){
            millisec.innerHTML = milliseconds   
        }
        if (milliseconds > 98) {
            milliseconds = 00
            seconds += 1
            sec.innerHTML = seconds
        }
        if (seconds < 10){
            sec.innerHTML = "0" + seconds
        }
        if (seconds > 9){
            sec.innerHTML = seconds   
        }
        if (seconds > 59) {
            milliseconds = 0
            seconds = 0
            minutes += 1
            millisec.innerHTML = milliseconds
            sec.innerHTML = seconds
            min.innerHTML = minutes
        }
        if (minutes < 10){
            min.innerHTML = "0" + minutes
        }
        if (minutes > 9){
            min.innerHTML = minutes  
        }
        if (minutes > 59) {
            milliseconds = 0
            seconds = 0
            minutes = 0 
            hours += 1
            millisec.innerHTML = milliseconds
            sec.innerHTML = seconds
            min.innerHTML = minutes
            hr.innerHTML = hours
        }
        if (hours < 10){
            hr.innerHTML = "0" + hours
        }
        if (hours > 9){
            hr.innerHTML = hours 
        }
    }
    else if (stop === true) {
        return
    }
    else if (r === true) {
        milliseconds = 00
        seconds = 00
        minutes = 00
        hours = 00
        sec.innerHTML = "0" + seconds 
        millisec.innerHTML = "0" + milliseconds
        min.innerHTML = "0" + minutes
        hr.innerHTML = "0" + hours

    }
}

function stopfunction() {
    stop = true
}

function reset() {
    r = true
    stop = false
}

function st() {
    s = true
    stop = false
    r = false
    start()
}