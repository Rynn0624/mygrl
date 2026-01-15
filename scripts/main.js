const screens = document.querySelectorAll(".screen");
const musicIndex = document.getElementById("musicIndex");
const musicStory = document.getElementById("musicStory");

/* ================= UTIL ================= */
function showScreen(id){
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* ================= HEART FLOAT ================= */
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = "💗";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 12 + Math.random() * 18 + "px";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

/* ================= STEP 1 → CAKE ================= */
function goToCake(){
  musicIndex.volume = 0.5;
  musicIndex.play(); // autoplay AMAN (karena klik)
  showScreen("screenCake");
}

/* ================= CAKE ================= */
function blowCandle(){
  document.querySelectorAll(".flame").forEach(f => f.style.display = "none");
  document.getElementById("afterBlow").style.display = "block";

  // confetti love kecil
  for(let i=0;i<20;i++){
    const c=document.createElement("span");
    c.innerHTML="💖";
    c.style.left=Math.random()*100+"vw";
    c.style.fontSize="20px";
    c.style.position="fixed";
    c.style.top="50vh";
    c.style.animation="floatUp 3s linear";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}
const tapText = document.querySelector(".tap-text");
if (tapText) {
    tapText.style.opacity = "0";
    setTimeout(() => tapText.style.display = "none", 600);
}


/* ================= CARD TEXT ================= */
const texts = [
  "Hai Cantikk kenalin aku Adrian Saputra 💌",
  "Karena kamu lahir di tanggal 17-Januari-2005 ini yang dimana hari ini udah masuk pada tanggal itu berarti di hari  ini adalah Your Birthday Aku ucapin SELAMAT ULANG TAHUN YAAA  🎂",
  "Terima kasih sudah hadir dalam hidupku, Aku si harus banyak banyak terimakasih ya ke kamu dan banyak banyak minta maaf juga soalnya yaa kamu tau lah hehehe, but sekarang aku beneran gabakalan ngecewain kamu lagi ✨",
  "Aku akan selalu ada untukmu mau kamu susah aku gabakalan ngelakuin hal yang sama lagi seperti setelah apa yang terjadi, ohh aku tuhh sayangg bnegttt sama kamu hahaha love banyak banyak deh buat kamu makasih banyak udah tetep mau sama aku terima semua kekuranganku love uuu 🤍 , btw ini dibuat tanggal yang dimana kamu nanya marah marah aku main laptop mulu haha",
  "I love you forever cantikk hidup lebih lama lagi ya aku bakalan ajak kamu kemana aja, makasih udah nemenin aku dari 0 jangan tinggalin aku yaa 💖"
];

let i = 0;

function goToCard(){
  i = 0;
  showScreen("screenCard");
  document.getElementById("cardText").innerText = texts[i];
}

function nextCard(){
  i++;
  if(i < texts.length){
    document.getElementById("cardText").innerText = texts[i];
  } else {
    showScreen("screenFinal");
    calcDays();
  }
}

/* ================= DATE ================= */
function calcDays(){
  const start = new Date("2022-04-23");
  const now = new Date();
  const days = Math.floor((now - start) / (1000*60*60*24));
  document.getElementById("days").innerText =
    `Sudah ${days} hari bersama 🤍`;
}

/* ================= STORY ================= */
/* PENTING: PINDAH HALAMAN */
function goToStory(){
  musicIndex.pause();
  musicIndex.currentTime = 0;

  // simpan flag agar story auto-play setelah swipe
  sessionStorage.setItem("fromIndex", "true");

  // PINDAH KE FILE story.html
  window.location.href = "story.html";
}

function goToStory() {
    // tandai bahwa user klik tombol cerita
    sessionStorage.setItem("playStoryMusic", "yes");

    // pindah halaman
    window.location.href = "story.html";
}

function goToEnding() {
    // tandai user menuju ending
    sessionStorage.setItem("playEndingMusic", "yes");

    window.location.href = "ending.html";
}
