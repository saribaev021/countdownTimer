const
      days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      minutes = document.getElementById("minutes"),
      seconds = document.getElementById("seconds"),
      input = document.getElementById("date"),
      show = document.getElementById("show"),
      stop = document.getElementById("stop");

const countdownTimer = () => {
    let
        arrTime =  new Date(input.value).toISOString().split(/[\-\T\:\.]/),
        selectY = +arrTime[0],
        selectM = +arrTime[1] - 1,
        selectD = +arrTime[2];


    let target = new Date(selectY, selectM, selectD);
    const timer = setInterval(() => {
        let
            toDay = Date.now(),
            remainingDays = Math.floor((target - toDay) / 1000 / 60 / 60 / 24),
            remainingHours = Math.floor((target - toDay) / 1000 / 60 / 60 % 24),
            remainingMinutes = Math.floor((target - toDay) / 1000 / 60 % 60),
            remainingSeconds = Math.floor((target - toDay) / 1000 % 60);
        
        if (remainingSeconds <= 0 && remainingMinutes <= 0) {
            stop.style.display = "none"
            show.style.display = "block"
            input.value = ""
            clearInterval(timer);
            
            days.textContent = "0 д ";
            hours.textContent = "0 ч ";
            minutes.textContent = "0 м ";
            seconds.textContent = "0 с ";
        } else {
            days.textContent = remainingDays + " д ";
            hours.textContent = remainingHours + " ч ";
            minutes.textContent = remainingMinutes + " м ";
            seconds.textContent = remainingSeconds + " с ";
        }
        stop.addEventListener("click", () => {
            clearInterval(timer);
            stop.style.display = "none"
            show.style.display = "block"
        
        })
    }, 1000);
}
show.addEventListener("click", () => {
    if(new Date(input.value) == "Invalid Date"){
        alert("Дата введена некорректно")
        input.value = ""
    }else{
        show.style.display = "none";
        stop.style.display = "block";
        countdownTimer();
    }
})

