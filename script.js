let count = localStorage.getItem("dzikirCount")
  ? parseInt(localStorage.getItem("dzikirCount"))
  : 0;

const countElement = document.getElementById("count");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const dzikirSelect = document.getElementById("dzikirSelect");

const arabicText = document.getElementById("arabicText");
const latinText = document.getElementById("latinText");

const clickSound = document.getElementById("clickSound");
const targetInput = document.getElementById("targetInput");

const targetNumber = document.getElementById("targetNumber");

let target = localStorage.getItem("dzikirTarget")
  ? parseInt(localStorage.getItem("dzikirTarget"))
  : 33;

targetInput.value = target;

targetNumber.innerText = target;

const quotes = [

  "“Hati menjadi tenang dengan mengingat Allah.”",

  "“Dzikir adalah cahaya bagi hati.”",

  "“Jangan lelah mendekat kepada Allah.”",

  "“Lisan yang berdzikir akan menenangkan jiwa.”",

  "“Semoga setiap dzikir menjadi pahala.”"

];

function randomQuote(){

  const random = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText = quotes[random];
}

randomQuote();

updateDisplay();

dzikirSelect.addEventListener("change", function(){

  const value = this.value.split("|");

  arabicText.innerText = value[0].trim();
  latinText.innerText = value[1].trim();

});

function tambah(){

  count++;

  if(navigator.vibrate){
    navigator.vibrate(40);
  }

  clickSound.currentTime = 0;
  clickSound.play();

  localStorage.setItem("dzikirCount", count);

  updateDisplay();

  if(count === target){

    setTimeout(() => {

      alert("✨ MasyaAllah, dzikir selesai ✨");

    }, 200);

  }

}

function resetCount(){

  count = 0;

  localStorage.setItem("dzikirCount", count);

  updateDisplay();

}

function updateDisplay(){

  countElement.innerText = count;

  progressText.innerText = count;

  let progress = (count / target) * 100;

  if(progress > 100){
    progress = 100;
  }

  progressBar.style.width = progress + "%";

  if(count === target){

    countElement.style.color = "#facc15";

  }else{

    countElement.style.color = "#86efac";

  }

}

targetInput.addEventListener("input", function(){

  target = parseInt(this.value);

  if(target < 1 || isNaN(target)){
    target = 1;
  }

  localStorage.setItem("dzikirTarget", target);

  targetNumber.innerText = target;

  updateDisplay();

});

function tambahTargetValue(){

  target++;

  saveTarget();

}

function kurangTarget(){

  if(target > 1){

    target--;

    saveTarget();

  }

}

function saveTarget(){

  targetInput.value = target;

  targetNumber.innerText = target;

  localStorage.setItem(
    "dzikirTarget",
    target
  );

  updateDisplay();

}