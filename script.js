const dzikirData = {

  subhanallah : {
    category : "Dzikir Harian",
    arabic : "سبحان الله",
    latin : "Subhanallah",
    meaning : "Maha Suci Allah",
    target : 33
  },

  alhamdulillah : {
    category : "Dzikir Harian",
    arabic : "الحمد لله",
    latin : "Alhamdulillah",
    meaning : "Segala puji bagi Allah",
    target : 33
  },

  allahuakbar : {
    category : "Dzikir Harian",
    arabic : "الله أكبر",
    latin : "Allahu Akbar",
    meaning : "Allah Maha Besar",
    target : 33
  },

  astaghfirullah : {
    category : "Istighfar",
    arabic : "أستغفر الله",
    latin : "Astaghfirullah",
    meaning : "Aku memohon ampun kepada Allah",
    target : 100
  },

  lailahaillallah : {
    category : "Tauhid",
    arabic : "لا إله إلا الله",
    latin : "Laa Ilaaha Illallah",
    meaning : "Tiada Tuhan selain Allah",
    target : 100
  },

  dzikirPagi : {
    category : "Dzikir Pagi",
    arabic : "أَصْـبَحْنا وَأَصْـبَحَ المـلكُ لله",
    latin : "Ash-bahnaa wa ash-bahal mulku lillaah",
    meaning : "Kami memasuki waktu pagi dan kerajaan hanya milik Allah",
    target : 1
  },

  dzikirPetang : {
    category : "Dzikir Petang",
    arabic : "أَمْسَيْـنا وَأَمْسـى المـلكُ لله",
    latin : "Amsainaa wa amsal mulku lillaah",
    meaning : "Kami memasuki waktu petang dan kerajaan hanya milik Allah",
    target : 1
  },

  ayatKursi : {
    category : "Ayat Pilihan",
    arabic : "اللّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ",
    latin : "Allahu laa ilaaha illaa huwal hayyul qayyuum",
    meaning : "Allah, tidak ada Tuhan selain Dia Yang Maha Hidup",
    target : 1
  },

  sholawat : {
    category : "Sholawat",
    arabic : "اللهم صل على سيدنا محمد",
    latin : "Allahumma shalli ala sayyidina Muhammad",
    meaning : "Ya Allah limpahkan sholawat kepada Nabi Muhammad",
    target : 100
  }

};

const dzikirSelect = document.getElementById("dzikirSelect");

const arabicText = document.getElementById("arabicText");

const latinText = document.getElementById("latinText");

const meaningText = document.getElementById("meaningText");

const categoryText = document.getElementById("category");

const countElement = document.getElementById("count");

const progressBar = document.getElementById("progressBar");

const progressText = document.getElementById("progressText");

const targetInput = document.getElementById("targetInput");

const targetNumber = document.getElementById("targetNumber");

const clickSound = document.getElementById("clickSound");

let selectedDzikir = "subhanallah";

let count = 0;

let target = 33;

loadDzikir(selectedDzikir);

function loadDzikir(key){

  const dzikir = dzikirData[key];

  arabicText.innerText = dzikir.arabic;

  latinText.innerText = dzikir.latin;

  meaningText.innerText = dzikir.meaning;

  categoryText.innerText = dzikir.category;

  target = dzikir.target;

  targetInput.value = target;

  targetNumber.innerText = target;

  count = 0;

  updateDisplay();

}

dzikirSelect.addEventListener("change", function(){

  selectedDzikir = this.value;

  loadDzikir(selectedDzikir);

});

function tambah(){

  count++;

  if(navigator.vibrate){
    navigator.vibrate(40);
  }

  clickSound.currentTime = 0;

  clickSound.play();

  updateDisplay();

  if(count === target){

    setTimeout(() => {

      alert("✨ Dzikir selesai ✨");

    }, 200);

  }

}

function resetCount(){

  count = 0;

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

}

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

  updateDisplay();

}