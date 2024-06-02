let startTime,updatedTime,difference,savedTime,tInterval;
let running=false;
savedTime=0;

const startBtn=document.getElementById('startBtn');
const stopBtn=document.getElementById('stopBtn');
const resetBtn=document.getElementById('resetBtn');
let display=document.getElementById('display');

function startTimer(){
    if (!running){
    startTime=new Date().getTime() - savedTime;
    tInterval=setInterval(getShowtime,1000);
    startBtn.disabled=true;
    stopBtn.disabled=false;
    resetBtn.disabled=true;
    running=true;
    }
}
function stopTimer(){
    if (running){
    clearInterval(tInterval);
    savedTime=new Date().getTime() - startTime;
    running=false;
    startBtn.disabled=false;
    stopBtn.disabled=true;
    resetBtn.disabled=false;
    }
}
function resetTimer(){
    clearInterval(tInterval);
    savedTime = 0;
    running = false;
    display.innerHTML="00:00:00";
    startBtn.disabled=false;
    stopBtn.disabled=true;
    resetBtn.disabled=true;
}

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);


stopBtn.disabled=true;
resetBtn.disabled=true;

function getShowtime(){
    updatedTime=new Date().getTime();
    difference=updatedTime-startTime;
     
    let seconds= Math.floor((difference/1000)%60);
    let minutes= Math.floor((difference/(1000*60))%60);
    let hours= Math.floor((difference/(1000*60*60))%24);

    seconds=(seconds<10)? '0'+seconds: seconds;
    minutes=(minutes<10)? '0'+minutes: minutes;
    hours=(hours<10)? '0'+hours: hours;
    
    display.innerHTML= hours+":"+minutes+":"+seconds;

}