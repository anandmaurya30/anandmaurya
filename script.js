let countdown;
let a = document.getElementById('start');
let b = document.getElementById('num');

a.addEventListener('click', timer);

function timer() {
    let minutes = parseInt(document.getElementById('left').value);
    let seconds = parseInt(document.getElementById('right').value);
    let totalSeconds = minutes * 60 + seconds;

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert('Please enter a valid time duration.');
        return;
    }

    clearInterval(countdown);
    countdown = setInterval(function () {
        if (totalSeconds > 0) {
            totalSeconds--;
            displayTime(totalSeconds);
        } else {
            clearInterval(countdown);
            alert('Time Completed');
        }
    }, 1000);
}

function displayTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    b.textContent = `${display(minutes)}:${display(remainingSeconds)}`;
}

function display(time) {
     if (time < 10) {
        return `0${time}`;
      } 
     else {
        return time;
      }
      
}
