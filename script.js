const CORRECT_MONTH=8,CORRECT_DAY=22;
const screens=["home","intro","about","memories","gallery","things","letter","gift","wish"];
let current=0;
function go(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const el=document.getElementById(id); if(!el)return;
  el.classList.add("active"); current=Math.max(0,screens.indexOf(id));
  document.getElementById("progress").style.width=(current/(screens.length-1)*100)+"%";
  el.scrollTop=0;
}
function openSecret(){
  const m=+document.getElementById("month").value,d=+document.getElementById("day").value;
  const err=document.getElementById("error");
  if(m===CORRECT_MONTH&&d===CORRECT_DAY){err.style.display="none";go("intro")}
  else{err.style.display="block";document.querySelector(".birthday").animate([{transform:"translateX(0)"},{transform:"translateX(-7px)"},{transform:"translateX(7px)"},{transform:"translateX(0)"}],{duration:350})}
}
function openGift(){
  const g=document.querySelector(".gift"),r=document.getElementById("giftReveal"),h=document.getElementById("giftHint");
  if(g.classList.contains("open"))return;
  g.classList.add("open");setTimeout(()=>{r.classList.add("show");h.textContent="希望你会喜欢。"},650);
}
function saveWish(){
  const input=document.getElementById("wishInput"),v=input.value.trim();
  if(!v){input.focus();return}
  localStorage.setItem("zhenni-wish",v);
  document.getElementById("savedWish").textContent="✦ 已经帮你留下了。";
  document.getElementById("savedWish").style.display="block";
  document.getElementById("ending").classList.add("show");
}
document.addEventListener("DOMContentLoaded",()=>{
  const old=localStorage.getItem("zhenni-wish");
  if(old){document.getElementById("wishInput").value=old}
});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&document.getElementById("home").classList.contains("active"))openSecret()});
