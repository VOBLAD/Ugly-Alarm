const timer  = document.getElementById("timer");
const tval = document.getElementById("tval");
const alarmOff = document.getElementById("off");
const alarmTime = document.getElementById("alarmtime")


ringtone = new Audio("./files/ringtone.mp3");


function setAlarm(){
    //Добавление время
    let date = new Date();
    hours = date.getHours();
    minutes = (date.getMinutes()<10?"0":"") + date.getMinutes();
 
    timer.innerHTML = `${hours}:${minutes}`;
    
    alarmy = tval.value;
    //Добавляем условные операторы 
    if(alarmy === `${hours}:${minutes}`){
        ringtone.play();
        alarmOff.style.cursor = "pointer";
    }else if(alarmy != ""){
        alarmTime.innerHTML = "Будильник сработает в " + alarmy
        alarmOff.style.cursor = "pointer";
    }else{
        alarmOff.style.cursor = "no-drop"
    }

}
window.setInterval("setAlarm()", 1000)

//Функция отключения будильника
alarmOff.addEventListener("click", () =>{
    tval.value = "";
    ringtone.pause();
    alarmTime.innerHTML = ""
})
