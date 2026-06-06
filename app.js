const seedPosts = [
  {
    init: "MK", name: "Mike K.", handle: "@mikek_r34", time: "2h · Montclair, NJ", verified: true, liked: false,
    car: "2002 Nissan Skyline R34",
    bg: "radial-gradient(ellipse at 30% 40%, #1a2e1a 0%, #0a140a 100%)",
    likes: 342, comments: 28,
    caption: "Finally got the new wheels mounted. Volk TE37s in bronze hit different on Bayside Blue.",
    tags: ["RB26DETT", "Bronze TE37", "550whp"]
  },
  {
    init: "SP", name: "Spencer M.", handle: "@spence_gt3", time: "5h · Hoboken, NJ", verified: true, liked: false,
    car: "2021 Porsche 911 GT3",
    bg: "radial-gradient(ellipse at 60% 50%, #2e1a2e 0%, #14081a 100%)",
    likes: 891, comments: 64,
    caption: "Track day at NJMP this weekend. Who else is going? Weather looks perfect.",
    tags: ["Manual 6spd", "502 HP", "Track pkg"]
  },
  {
    init: "CR", name: "Carlos R.", handle: "@cr_sti", time: "8h · Parsippany, NJ", verified: false, liked: false,
    car: "2022 Subaru WRX STI",
    bg: "radial-gradient(ellipse at 40% 60%, #1a1a2e 0%, #08081a 100%)",
    likes: 156, comments: 19,
    caption: "Rally tune done. This thing is a different animal now. Pulls hard all the way to redline.",
    tags: ["Stage 2", "272 HP", "Recaro"]
  },
  {
    init: "AL", name: "Alex J.", handle: "@alexj_builds", time: "1d · Fairfield, NJ", verified: true, liked: false,
    car: "2019 BMW M3 Competition",
    bg: "radial-gradient(ellipse at 50% 40%, #2e2410 0%, #1a1305 100%)",
    likes: 478, comments: 41,
    caption: "New KW V3 coilovers installed. Sitting just right now. Sakhir Orange never gets old.",
    tags: ["S58", "503 HP", "KW V3"]
  }
];

const seedMeets = [
  {
    name: "Sunday Euro Morning", type: "Euro", date: "2026-06-14", time: "08:00",
    loc: "Willowbrook Mall lot, Wayne NJ",
    desc: "Bring your Euros. Coffee truck on site. Bays fill up fast so get there early.",
    bg: "radial-gradient(ellipse at 40% 50%, #2e1a2e 0%, #14081a 100%)",
    going: 42, rsvped: false, mine: false
  },
  {
    name: "Route 23 Night Cruise", type: "Cruise", date: "2026-06-20", time: "20:00",
    loc: "Meet at Wawa, Riverdale NJ → run north",
    desc: "Chill cruise up 23 to the lookout. No street racing, keep it clean. All cars welcome.",
    bg: "radial-gradient(ellipse at 60% 40%, #1a1a2e 0%, #08081a 100%)",
    going: 28, rsvped: false, mine: false
  },
  {
    name: "Cars & Coffee Morristown", type: "Cars & Coffee", date: "2026-06-28", time: "09:00",
    loc: "The Green, Morristown NJ",
    desc: "Weekly meet on the Green. Family friendly, every kind of car shows up.",
    bg: "radial-gradient(ellipse at 30% 60%, #2e2410 0%, #1a1305 100%)",
    going: 87, rsvped: false, mine: false
  },
  {
    name: "NJMP Track Day (HPDE)", type: "Track Day", date: "2026-07-12", time: "07:30",
    loc: "NJ Motorsports Park, Millville NJ",
    desc: "Open lapping, run group by experience. Helmet required (loaners available). $150 entry.",
    bg: "radial-gradient(ellipse at 50% 40%, #1a2e1a 0%, #0a140a 100%)",
    going: 31, rsvped: false, mine: false
  }
];

function loadPosts() {
  try {
    const saved = localStorage.getItem('revmatch_posts');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(seedPosts));
  } catch (e) { return JSON.parse(JSON.stringify(seedPosts)); }
}
function savePosts() {
  try { localStorage.setItem('revmatch_posts', JSON.stringify(posts)); } catch (e) {}
}
function loadMeets() {
  try {
    const saved = localStorage.getItem('revmatch_meets');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(seedMeets));
  } catch (e) { return JSON.parse(JSON.stringify(seedMeets)); }
}
function saveMeets() {
  try { localStorage.setItem('revmatch_meets', JSON.stringify(meets)); } catch (e) {}
}

const seedGarage = [
  { name: "2019 BMW M3 Competition", spec: "S58 · 503 HP · 6MT", bg: "radial-gradient(ellipse at 40% 50%, #2e2410 0%, #1a1305 100%)" },
  { name: "1995 BMW M3 E36", spec: "S50B32 · Track only", bg: "radial-gradient(ellipse at 50% 40%, #1a1a2e 0%, #08081a 100%)" }
];
function loadGarage() {
  try {
    const saved = localStorage.getItem('revmatch_garage');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(seedGarage));
  } catch (e) { return JSON.parse(JSON.stringify(seedGarage)); }
}
function saveGarage() {
  try { localStorage.setItem('revmatch_garage', JSON.stringify(garage)); } catch (e) {}
}

let posts = loadPosts();
let meets = loadMeets();
let garage = loadGarage();

const carSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2m-6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/></svg>`;
const carMini = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`;
const verifySVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;

const bgOptions = [
  "radial-gradient(ellipse at 30% 40%, #1a2e1a 0%, #0a140a 100%)",
  "radial-gradient(ellipse at 60% 50%, #2e1a2e 0%, #14081a 100%)",
  "radial-gradient(ellipse at 40% 60%, #1a1a2e 0%, #08081a 100%)",
  "radial-gradient(ellipse at 50% 40%, #2e2410 0%, #1a1305 100%)"
];

function renderFeed() {
  document.getElementById('feed').innerHTML = posts.map((p, i) => `
    <div class="post">
      <div class="post-head">
        <div class="avatar">${p.init}</div>
        <div class="post-user">
          <div class="post-name">${p.name} ${p.verified ? verifySVG : ''}</div>
          <div class="post-meta">${p.handle} · ${p.time}</div>
        </div>
        <div class="post-more">
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
        </div>
      </div>

      <div class="post-img" style="background:${p.bg};">
        ${carSVG}
        <div class="car-tag">${carMini} ${p.car}</div>
      </div>

      <div class="post-actions">
        <div class="action ${p.liked ? 'liked' : ''}" onclick="toggleLike(this, ${i})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span class="like-count">${p.liked ? p.likes + 1 : p.likes}</span>
        </div>
        <div class="action">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>${p.comments}</span>
        </div>
        <div class="action">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </div>
        <div class="action-spacer"></div>
        <div class="action">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </div>
      </div>

      <div class="post-caption">
        <b>${p.handle}</b> ${p.caption}
        ${p.tags.length ? `<div class="post-specs">${p.tags.map(t => `<span class="spec">${t}</span>`).join('')}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleLike(el, i) {
  posts[i].liked = !posts[i].liked;
  const countEl = el.querySelector('.like-count');
  if (posts[i].liked) {
    el.classList.add('liked');
    countEl.textContent = posts[i].likes + 1;
  } else {
    el.classList.remove('liked');
    countEl.textContent = posts[i].likes;
  }
  savePosts();
}

/* ── Create post ── */
let photoAdded = false;

function openCreate() {
  document.getElementById('createScreen').classList.add('open');
}
function closeCreate() {
  document.getElementById('createScreen').classList.remove('open');
  resetForm();
}
function fakePhoto() {
  photoAdded = true;
  const drop = document.getElementById('photoDrop');
  drop.classList.add('filled');
  drop.style.background = bgOptions[Math.floor(Math.random() * bgOptions.length)];
  drop.innerHTML = carSVG;
  checkForm();
}
function checkForm() {
  const car = document.getElementById('carInput').value.trim();
  const caption = document.getElementById('captionInput').value.trim();
  document.getElementById('shareBtn').disabled = !(photoAdded && car && caption);
}
function publishPost() {
  const car = document.getElementById('carInput').value.trim();
  const caption = document.getElementById('captionInput').value.trim();
  const specsRaw = document.getElementById('specsInput').value.trim();
  const tags = specsRaw ? specsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
  const drop = document.getElementById('photoDrop');

  posts.unshift({
    init: "ME", name: "You", handle: "@you", time: "Just now", verified: false,
    car, bg: drop.style.background || bgOptions[0],
    likes: 0, comments: 0, liked: false, caption, tags
  });

  savePosts();
  renderFeed();
  closeCreate();
  switchView('feed');
  document.getElementById('feed').scrollTop = 0;
  showToast("Posted to your feed");
}
function resetForm() {
  photoAdded = false;
  document.getElementById('carInput').value = '';
  document.getElementById('captionInput').value = '';
  document.getElementById('specsInput').value = '';
  const drop = document.getElementById('photoDrop');
  drop.classList.remove('filled');
  drop.style.background = '';
  drop.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><p>Tap to add a photo of your car</p>`;
  document.getElementById('shareBtn').disabled = true;
}

/* ── Meets ── */
const pinSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const clockSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

function fmtDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
}
function fmtTime(t) {
  if (!t) return '';
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hr = h % 12 || 12;
  return `${hr}:${String(m).padStart(2, '0')} ${ampm}`;
}

function renderMeets() {
  document.getElementById('meetsList').innerHTML = meets.map((m, i) => `
    <div class="meet ${m.mine ? 'mine' : ''}">
      <div class="meet-banner" style="background:${m.bg};">
        <div class="meet-banner-overlay"></div>
        <div class="meet-date">${fmtDate(m.date)}</div>
        <div class="meet-type-pill">${m.type}</div>
      </div>
      <div class="meet-info">
        <div class="meet-name">${m.name}</div>
        <div class="meet-detail">${clockSVG} ${fmtTime(m.time)}</div>
        <div class="meet-detail">${pinSVG} ${m.loc}</div>
        ${m.desc ? `<div class="meet-detail" style="align-items:flex-start; margin-top:6px; color:var(--text2);">${m.desc}</div>` : ''}
      </div>
      <div class="meet-foot">
        <div class="meet-going">
          <div class="going-stack">
            <div class="going-dot">JD</div>
            <div class="going-dot">MK</div>
            <div class="going-dot">+</div>
          </div>
          <span class="going-count">${m.going} going</span>
        </div>
        <button class="rsvp-btn ${m.rsvped ? 'going' : ''}" onclick="toggleRsvp(${i})">
          ${m.rsvped ? "You're in" : "RSVP"}
        </button>
      </div>
    </div>
  `).join('');
}

function toggleRsvp(i) {
  meets[i].rsvped = !meets[i].rsvped;
  meets[i].going += meets[i].rsvped ? 1 : -1;
  saveMeets();
  renderMeets();
}

/* ── Create meet ── */
let selectedType = 'Cruise';
const meetBgOptions = [
  "radial-gradient(ellipse at 40% 50%, #2e1a2e 0%, #14081a 100%)",
  "radial-gradient(ellipse at 60% 40%, #1a1a2e 0%, #08081a 100%)",
  "radial-gradient(ellipse at 30% 60%, #2e2410 0%, #1a1305 100%)",
  "radial-gradient(ellipse at 50% 40%, #1a2e1a 0%, #0a140a 100%)"
];

function openCreateMeet() {
  document.getElementById('meetScreen').classList.add('open');
}
function closeCreateMeet() {
  document.getElementById('meetScreen').classList.remove('open');
  resetMeetForm();
}
function selectType(el, type) {
  document.querySelectorAll('#typeChips .type-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedType = type;
}
function checkMeetForm() {
  const name = document.getElementById('meetName').value.trim();
  const date = document.getElementById('meetDateInput').value;
  const time = document.getElementById('meetTime').value;
  const loc = document.getElementById('meetLoc').value.trim();
  document.getElementById('meetShareBtn').disabled = !(name && date && time && loc);
}
function publishMeet() {
  const name = document.getElementById('meetName').value.trim();
  const date = document.getElementById('meetDateInput').value;
  const time = document.getElementById('meetTime').value;
  const loc = document.getElementById('meetLoc').value.trim();
  const desc = document.getElementById('meetDesc').value.trim();

  meets.unshift({
    name, type: selectedType, date, time, loc, desc,
    bg: meetBgOptions[Math.floor(Math.random() * meetBgOptions.length)],
    going: 1, rsvped: true, mine: true
  });

  saveMeets();
  renderMeets();
  closeCreateMeet();
  switchView('meets');
  showToast("Meet posted — you're hosting!");
}
function resetMeetForm() {
  document.getElementById('meetName').value = '';
  document.getElementById('meetDateInput').value = '';
  document.getElementById('meetTime').value = '';
  document.getElementById('meetLoc').value = '';
  document.getElementById('meetDesc').value = '';
  selectedType = 'Cruise';
  document.querySelectorAll('#typeChips .type-chip').forEach((c, idx) => c.classList.toggle('selected', idx === 0));
  document.getElementById('meetShareBtn').disabled = true;
}

/* ── View switching ── */
function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.getElementById('nav-feed').classList.toggle('active', view === 'feed');
  document.getElementById('nav-meets').classList.toggle('active', view === 'meets');
  document.getElementById('nav-profile').classList.toggle('active', view === 'profile');
  if (view === 'profile') renderProfile();
}

/* ── Profile ── */
const heartMini = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

function renderProfile() {
  const myPosts = posts.filter(p => p.handle === '@you');
  const myMeets = meets.filter(m => m.mine || m.rsvped);

  document.getElementById('statPosts').textContent = myPosts.length;
  document.getElementById('statGarage').textContent = garage.length;
  document.getElementById('statMeets').textContent = myMeets.length;

  // Posts grid
  const postsPanel = document.getElementById('ptab-posts');
  if (myPosts.length) {
    postsPanel.innerHTML = `<div class="posts-grid">` + myPosts.map(p => `
      <div class="grid-post" style="background:${p.bg};">
        ${carSVG}
        <div class="grid-post-likes">${heartMini} ${p.liked ? p.likes + 1 : p.likes}</div>
      </div>
    `).join('') + `</div>`;
  } else {
    postsPanel.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      <p>No posts yet.<br>Tap + to share your first build.</p>
    </div>`;
  }

  // Garage grid
  document.getElementById('ptab-garage').innerHTML = `<div class="garage-grid">` +
    garage.map(c => `
      <div class="garage-card">
        <div class="garage-img" style="background:${c.bg};">${carSVG}</div>
        <div class="garage-card-body">
          <div class="garage-car-name">${c.name}</div>
          <div class="garage-car-spec">${c.spec}</div>
        </div>
      </div>
    `).join('') +
    `<div class="add-garage" onclick="addGarageCar()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      <span>Add car</span>
    </div></div>`;

  // Meets list
  const meetsPanel = document.getElementById('ptab-meets');
  if (myMeets.length) {
    meetsPanel.innerHTML = myMeets.map(m => {
      const d = new Date(m.date + 'T00:00:00');
      const mon = isNaN(d) ? '' : d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
      const day = isNaN(d) ? '' : d.getDate();
      return `<div class="mini-meet">
        <div class="mini-meet-date">
          <div class="mini-meet-mon">${mon}</div>
          <div class="mini-meet-day">${day}</div>
        </div>
        <div class="mini-meet-info">
          <div class="mini-meet-name">${m.name}</div>
          <div class="mini-meet-loc">${m.loc}</div>
        </div>
        <div class="mini-meet-badge">${m.mine ? 'HOSTING' : 'GOING'}</div>
      </div>`;
    }).join('');
  } else {
    meetsPanel.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <p>No meets yet.<br>RSVP or host one from the meets tab.</p>
    </div>`;
  }
}

function switchPtab(tab, el) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ptab-panel').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('ptab-' + tab).classList.add('active');
}

function addGarageCar() {
  const name = prompt("Car (year make model):");
  if (!name || !name.trim()) return;
  const spec = prompt("Quick spec (e.g. 500 HP · 6MT):") || "";
  garage.push({
    name: name.trim(),
    spec: spec.trim(),
    bg: bgOptions[Math.floor(Math.random() * bgOptions.length)]
  });
  saveGarage();
  renderProfile();
}

/* ── Toast ── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

renderFeed();
renderMeets();
