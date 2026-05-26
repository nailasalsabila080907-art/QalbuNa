const dzikirData = {

  subhanallah : {
    category : "Dzikir Harian",
    arabic : "سُبْحَانَ ٱللَّٰهِ",
    latin : "Subhanallah",
    meaning : "Maha Suci Allah",
    target : 33
  },

  alhamdulillah : {
    category : "Dzikir Harian",
    arabic : "ٱلْحَمْدُ لِلَّٰهِ",
    latin : "Alhamdulillah",
    meaning : "Segala puji bagi Allah",
    target : 33
  },

  allahuakbar : {
    category : "Dzikir Harian",
    arabic : "ٱللَّٰهُ أَكْبَرُ",
    latin : "Allahu Akbar",
    meaning : "Allah Maha Besar",
    target : 33
  },

  astaghfirullah : {
    category : "Istighfar",
    arabic : "أَسْتَغْفِرُ ٱللَّٰهَ",
    latin : "Astaghfirullah",
    meaning : "Aku memohon ampun kepada Allah",
    target : 100
  },

  lailahaillallah : {
    category : "Tauhid",
    arabic : "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
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
    arabic : "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ ۝٢٥٥",
    latin : "allâhu lâ ilâha illâ huw, al-ḫayyul-qayyûm, lâ ta'khudzuhû sinatuw wa lâ na'ûm, lahû mâ fis-samâwâti wa mâ fil-ardl, man dzalladzî yasyfa‘u ‘indahû illâ bi'idznih, ya‘lamu mâ baina aidîhim wa mâ khalfahum, wa lâ yuḫîthûna bisyai'im min ‘ilmihî illâ bimâ syâ', wasi‘a kursiyyuhus-samâwâti wal-ardl, wa lâ ya'ûduhû ḫifdhuhumâ, wa huwal-‘aliyyul-‘adhîm",
    meaning : "Allah, tidak ada tuhan selain Dia, Yang Mahahidup lagi terus-menerus mengurus (makhluk-Nya). Dia tidak dilanda oleh kantuk dan tidak (pula) oleh tidur. Milik-Nyalah apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka. Mereka tidak mengetahui sesuatu apa pun dari ilmu-Nya, kecuali apa yang Dia kehendaki. Kursi-Nya (ilmu dan kekuasaan-Nya) meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dialah yang Mahatinggi lagi Mahaagung.",
    target : 1
  },

  sholawat : {
    category : "Sholawat",
    arabic : "اللهم صل على سيدنا محمد",
    latin : "Allahumma shalli ala sayyidina Muhammad",
    meaning : "Ya Allah limpahkan sholawat kepada Nabi Muhammad",
    target : 100
  },

  zikirArrafah : {
    category : "Zikir Arafah",

    arabic : "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    
    latin : "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul mulku wa lahul hamdu wa huwa 'alaa kulli syai'in qodiir",
    
    meaning : "Tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Milik-Nya segala kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
    target : 1000
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

const quotes = [

  "“Hati menjadi tenang dengan mengingat Allah.”",

  "“Dzikir adalah cahaya bagi hati.”",

  "“Semoga setiap dzikir menjadi pahala.”",

  "“Allah selalu dekat dengan hamba-Nya.”",

  "“Jangan lelah mendekat kepada Allah.”"

];

function randomQuote(){

  const random =
    Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText =
    quotes[random];

}

randomQuote();

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