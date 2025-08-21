const display = document.getElementById("display")
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function Start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 100);
        isRunning = true;
    }
}

function Stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function Reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = ("00:00:00:00");
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / 1000 % 60);
    let milsec = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    milsec = String(milsec).padStart(2, "0");

    display.textContent = `${hours}:${min}:${sec}:${milsec}`
}