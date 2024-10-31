const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const container = document.querySelector('body')
const ampm = document.querySelector('.ampm')
setInterval(()=>{
    let totalTIme = new Date();
    let timer = totalTIme.getHours();
    if(Number(totalTIme.getHours()) >= 1 && Number(totalTIme.getHours()) <= 12){
        ampm.innerText = "AM"
    }
    else {
        ampm.innerText = "PM"
    }
    if(timer === 0) {
        hour.innerText = 12;
    }
    else if(timer === 12) {
        hour.innerText = 12;
    }
    else if(Number(timer) > 12) {
        hour.innerText = Number(timer) - 12;
    }
    else {
        hour.innerText = timer;
    }
    minute.innerText = totalTIme.getMinutes();
    second.innerText = totalTIme.getSeconds();
    if(Number(timer) >= 5 && Number(timer) <= 12){
        container.style.backgroundImage = 'url("./material/morining.webp")';
    }
    else if(Number(timer) >= 1 && Number(timer) <= 4) {
        container.style.backgroundImage = 'url("./material/afternoon.jpg")';
    } 
    else if(Number(timer) >= 5 && Number(timer) <= 10) {
        container.style.backgroundImage = 'url("./material/evening.webp")';
    }
    else if(Number(timer) >= 11 && Number(timer) <= 4) {
        container.style.backgroundImage = 'url("./material/night.webp")';
    }
})


