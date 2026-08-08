// ====== 这里可以改成她真正的生日 ======
const SECRET_MONTH = 8;
const SECRET_DAY = 22;
// ======================================

const screens = [...document.querySelectorAll('.screen')];

function go(id){
  screens.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function openSecret(){
  const m = Number(document.getElementById('month').value);
  const d = Number(document.getElementById('day').value);
  const error = document.getElementById('error');

  if(m === SECRET_MONTH && d === SECRET_DAY){
    error.style.display = 'none';
    go('intro');
  }else{
    error.style.display = 'block';
    document.getElementById('month').animate(
      [{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(0)'}],
      {duration:250}
    );
  }
}

function openGift(){
  const wrap = document.querySelector('.gift-wrap');
  wrap.classList.add('open');
  document.getElementById('giftTitle').textContent = '一只小蝴蝶，送给特别的你。';
  document.getElementById('giftText').innerHTML = '看到它的时候，第一时间就想到了你。<br>希望它以后也能陪你去很多地方。';
  document.getElementById('giftReveal').classList.add('show');
}

function saveWish(){
  const input = document.getElementById('wishInput');
  const value = input.value.trim();
  if(!value){
    input.focus();
    return;
  }
  localStorage.setItem('birthdayWish', value);
  document.getElementById('savedWish').textContent = '✓ 已经帮你留下了。';
  document.getElementById('savedWish').style.display = 'block';
  document.getElementById('ending').classList.add('show');
}

// 让星空每次进入时有一点随机感
const stars = document.getElementById('stars');
for(let i=0;i<35;i++){
  const s=document.createElement('i');
  s.style.position='fixed';
  s.style.width=(Math.random()*2+1)+'px';
  s.style.height=s.style.width;
  s.style.borderRadius='50%';
  s.style.background='rgba(255,255,255,'+(Math.random()*.55+.15)+')';
  s.style.left=Math.random()*100+'%';
  s.style.top=Math.random()*100+'%';
  s.style.animation=`twinkle ${2+Math.random()*4}s ease-in-out infinite alternate`;
  stars.appendChild(s);
}
const style=document.createElement('style');
style.textContent='@keyframes twinkle{from{opacity:.2;transform:scale(.7)}to{opacity:1;transform:scale(1.25)}}';
document.head.appendChild(style);
