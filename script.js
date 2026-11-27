// Update the clock
function updateClock() {
    const clock = document.getElementById("clock");

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0")

    const suffix = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    clock.textContent = `${hours}:${minutes}:${seconds} ${suffix}`;
}
function updateRuntimeclock() {
    let runtime = 0;
    const runtimeclock = getElementById(runtimeclock);
    setInterval(1);
    let ms = runtime.toString().padStart(3, "0");
    runtime++;
    runtimeclock.textContent;
}


function login(){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if(user === "GUEST" && pass === "djCORsa"){
        document.getElementById("loginScreen").style.display="none";
        document.getElementById("desktop").style.display="block";
        updateRuntimeclock()

    }
    else{
        let flashes = 0;

        let interval = setInterval(() => {
            error.textContent = 
                error.textContent === "" 
                ? "WRONG! TRY AGAIN!" 
                : "";

            flashes++;

            if(flashes >= 6){
                clearInterval(interval);
                error.textContent="";
            }
        },300);
    }
}

updateClock();
setInterval(updateClock, 1000);

// Boot sequence
setTimeout(() => {
    document.getElementById("bootScreen").style.display = "none";
    document.getElementById("loginScreen").style.display="flex";
    document.getElementById("desktop").style.display = "block";
}, 3000);