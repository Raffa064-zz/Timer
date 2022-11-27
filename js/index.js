var startTime = Date.now().toPrecision()
var stoped = false

const display = document.querySelector('#timer-display')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

stop.onclick = stopTimer
reset.onclick = resetTimer

function stopTimer() {
    stoped = true;
    display.classList.add('paused')
}

function resetTimer() {
    startTime = Date.now().toPrecision()
    stoped = false
    display.classList.remove('paused')
}

setInterval(update, 250)

function update() {
    if (!stoped) {
        var now = Date.now()
        var time = (now.toPrecision() - startTime)
        var hours = twoDigits(parseInt(time / (1000 * 60 * 60)) % 60)
        var minutes = twoDigits(parseInt(time / (1000 * 60)) % 60)
        var secunds = twoDigits(parseInt(time / (1000)) % 60)
        display.innerHTML = `${hours}:${minutes}:${secunds}`
    }
}

function twoDigits(value) {
    if (value.toString().length == 1) {
        return '0'+value;
    }
    return value;
}