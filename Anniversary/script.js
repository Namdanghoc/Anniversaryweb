/* =========================================================================
   LOGIC TRANG WEB — không cần sửa file này.
   Muốn đổi nội dung (chữ, ảnh, kỷ niệm...) hãy sửa file content.js
   ========================================================================= */

/* ---------------- TRANG CHỦ ---------------- */
function renderHero(){
  const h = SITE_CONTENT.hero;
  document.getElementById('siteLogo').textContent = h.logo;
  document.getElementById('heroTitle').innerHTML = h.title;
  document.getElementById('heroSub').textContent = h.sub;
  updateCounters(h.startDate);
}

function updateCounters(startDateStr){
  const daysEl = document.getElementById('daysCount');
  const yearsEl = document.getElementById('yearsCount');
  if(!startDateStr){ daysEl.textContent='—'; yearsEl.textContent='—'; return; }
  const parts = startDateStr.split('/');
  if(parts.length!==3){ daysEl.textContent='—'; yearsEl.textContent='—'; return; }
  const d = new Date(parts[2], parts[1]-1, parts[0]);
  if(isNaN(d)){ daysEl.textContent='—'; yearsEl.textContent='—'; return; }
  const now = new Date();
  const diffDays = Math.floor((now - d) / 86400000);
  daysEl.textContent = diffDays >= 0 ? diffDays.toLocaleString('vi-VN') : '0';
  yearsEl.textContent = diffDays >= 0 ? (diffDays/365).toFixed(1) : '0';
}

/* ---------------- DÒNG THỜI GIAN ---------------- */
function renderMoments(){
  const list = document.getElementById('momentsList');
  list.innerHTML = '';
  SITE_CONTENT.timeline.forEach((m, i)=>{
    const div = document.createElement('div');
    div.className = 'moment';
    const photoInner = m.img
      ? `<img src="${m.img}" alt="${escapeHtml(m.title)}">`
      : String(i+1).padStart(2,'0');
    div.innerHTML = `
      <div class="dot"></div>
      <div class="photo">${photoInner}</div>
      <div class="date">${escapeHtml(m.date)}</div>
      <h3>${escapeHtml(m.title)}</h3>
      <p>${escapeHtml(m.text)}</p>
    `;
    list.appendChild(div);
  });
}

/* ---------------- HIỆU ỨNG "I LOVE YOU" ---------------- */

const revealSequence = [
  { text: 'I', cls: '' }, 
  { text: '♥', cls: 'heart' }, 
  { text: 'YOU', cls: '' }
];

function buildReveal() {
  const wrap = document.getElementById('revealWords');
  wrap.innerHTML = '';
  revealSequence.forEach(w => {
    const span = document.createElement('span');
    span.textContent = w.text;
    if (w.cls) span.classList.add(w.cls);
    wrap.appendChild(span);
  });
}

function playReveal() {
  buildReveal();
  
  const spans = document.querySelectorAll('.reveal-words span');
  const cardsContainer = document.getElementById('photoCards');
  const cards = document.querySelectorAll('.photo-cards .card');
  const replayBtn = document.querySelector('.replay-btn');
  const hint = document.getElementById('revealHint');

  // Reset trạng thái ban đầu
  cardsContainer.classList.remove('show');
  replayBtn.classList.remove('show');
  hint.style.opacity = '0';
  cards.forEach(card => card.style.transitionDelay = '0s');

  // 1. Hiển thị từng chữ cách nhau 800ms (Kéo dài thời gian mở bài)
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add('on');
      
      // Nếu là trái tim, sau khi hiện ra thì bật hiệu ứng đập
      if (span.classList.contains('heart')) {
        setTimeout(() => span.classList.add('pulse'), 600);
      }
    }, index * 800); 
  });

  // 2. Chờ chữ xuất hiện xong (3 chữ * 800ms = 2400ms) -> Hiện card ảnh kỉ niệm
  setTimeout(() => {
    cardsContainer.classList.add('show');
    
    // Hiệu ứng các card ảnh thi nhau trồi lên cách nhau 400ms
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.4}s`;
    });

  }, revealSequence.length * 800 + 400);

  // 3. Cuối cùng hiện nút Replay và Hint sau khi ảnh đã lên hết
  setTimeout(() => {
    replayBtn.classList.add('show');
    hint.style.opacity = '1';
  }, revealSequence.length * 800 + (cards.length * 400) + 1000);
}

// Tự động chạy lần đầu tiên khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
  playReveal();
});

/* ---------------- LÁ THƯ ---------------- */
function renderLetter(){
  const l = SITE_CONTENT.letter;
  document.getElementById('letterRibbon').textContent = l.ribbon;
  document.getElementById('letterGreet').textContent = l.greet;
  document.getElementById('letterBody').textContent = l.body;
  document.getElementById('letterSign').textContent = l.sign;
}

/* ---------------- SỔ LƯU BÚT (TĨNH) ---------------- */
function renderGuestbook(){
  const list = document.getElementById('gbList');
  const msgs = SITE_CONTENT.guestbookMessages || [];
  if(!msgs.length){
    list.innerHTML = '<div class="gb-empty">Chưa có lời chúc nào — hãy là người đầu tiên! 💌</div>';
    return;
  }
  list.innerHTML = '';
  msgs.slice().reverse().forEach(m=>{
    const div = document.createElement('div');
    div.className = 'gb-item';
    div.innerHTML = `<div class="who">${escapeHtml(m.name)}</div><div class="msg">${escapeHtml(m.message)}</div><div class="when">${escapeHtml(m.date)}</div>`;
    list.appendChild(div);
  });
}

function submitGuestbook(){
  const nameEl = document.getElementById('gbName');
  const msgEl = document.getElementById('gbMsg');
  const name = nameEl.value.trim();
  const message = msgEl.value.trim();
  if(!name || !message){ alert('Vui lòng nhập tên và lời nhắn nhé!'); return; }
  const to = SITE_CONTENT.guestbookEmail || '';
  const subject = encodeURIComponent(`Lời chúc từ ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}`);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

function escapeHtml(s){
  const d = document.createElement('div');
  d.textContent = s == null ? '' : String(s);
  return d.innerHTML;
}

/* ---------------- KHỞI TẠO ---------------- */
(function init(){
  renderHero();
  renderMoments();
  renderLetter();
  renderGuestbook();
  buildReveal();
  revealObserver.observe(document.getElementById('reveal'));
})();

const bgMusic = document.getElementById("bgMusic");

// Phát nhạc sau lần chạm/click đầu tiên
document.addEventListener(
    "click",
    () => {
        bgMusic.play().catch(() => {});
    },
    { once: true }
);