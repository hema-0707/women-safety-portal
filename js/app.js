/* ---------- PAGE SWITCHING ---------- */
function showSection(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
showSection('home');

/* ---------- SIREN ---------- */
const sirenAudio = document.getElementById("sirenAudio");

function playSiren(){
  sirenAudio.play().catch(()=>{
    alert("Tap once to enable sound.");
  });
}

function stopSiren(){
  sirenAudio.pause();
  sirenAudio.currentTime = 0;
}

/* ---------- EMERGENCY CALL ---------- */
function makeEmergencyCall(num){
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if(isMobile){
    location.href = `tel:${num}`;
  } else {
    alert("Emergency calling works only on mobile.");
  }
}
