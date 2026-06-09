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

const _NOW = Date.now();
const DM_SEED = [
  {
    id: 'mk', init: 'MK', name: 'Mike K.', handle: '@mikek_r34', verified: true,
    bg: 'radial-gradient(ellipse at 30% 40%, #1a2e1a 0%, #0a140a 100%)',
    msgs: [
      { from: 'them', text: 'Bro that M3 build is clean as hell 🔥', ts: _NOW - 7200000 },
      { from: 'me',   text: 'Appreciate it! Just got the coilovers sorted', ts: _NOW - 7100000 },
      { from: 'them', text: 'You going to Willowbrook Sunday?', ts: _NOW - 1800000 },
    ],
    unread: 1
  },
  {
    id: 'sp', init: 'SP', name: 'Spencer M.', handle: '@spence_gt3', verified: true,
    bg: 'radial-gradient(ellipse at 60% 50%, #2e1a2e 0%, #14081a 100%)',
    msgs: [
      { from: 'them', text: 'Track day NJMP this weekend. You in?', ts: _NOW - 86400000 },
      { from: 'me',   text: "Can't this weekend, car's at the dyno", ts: _NOW - 85000000 },
      { from: 'them', text: 'Damn. Next time 👊', ts: _NOW - 84000000 },
    ],
    unread: 0
  },
  {
    id: 'cr', init: 'CR', name: 'Carlos R.', handle: '@cr_sti', verified: false,
    bg: 'radial-gradient(ellipse at 40% 60%, #1a1a2e 0%, #08081a 100%)',
    msgs: [
      { from: 'them', text: 'Stage 2 done, 372whp on the dyno 🔥', ts: _NOW - 172800000 },
    ],
    unread: 0
  },
  {
    id: 'al', init: 'AL', name: 'Alex J.', handle: '@alexj_builds', verified: true,
    bg: 'radial-gradient(ellipse at 50% 40%, #2e2410 0%, #1a1305 100%)',
    msgs: [
      { from: 'them', text: 'KW V3s are the move fr, what springs did you run?', ts: _NOW - 259200000 },
    ],
    unread: 0
  }
];
function loadDMs() {
  try {
    const saved = localStorage.getItem('revmatch_dms');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DM_SEED));
  } catch(e) { return JSON.parse(JSON.stringify(DM_SEED)); }
}
function saveDMs() {
  try { localStorage.setItem('revmatch_dms', JSON.stringify(dmThreads)); } catch(e) {}
}

const SPEED_SEED = [
  { uid: 'sp', init: 'SP', name: 'Spencer M.', verified: true,
    car: '2021 Porsche 911 GT3', speed: 195, track: 'NJMP Lightning, NJ',
    bg: 'radial-gradient(ellipse at 60% 50%, #2e1a2e 0%, #14081a 100%)', ts: _NOW - 1814400000 },
  { uid: 'mk', init: 'MK', name: 'Mike K.', verified: true,
    car: '2002 Nissan Skyline R34', speed: 172, track: 'Monticello Motor Club, NY',
    bg: 'radial-gradient(ellipse at 30% 40%, #1a2e1a 0%, #0a140a 100%)', ts: _NOW - 1209600000 },
  { uid: 'al', init: 'AL', name: 'Alex J.', verified: true,
    car: '2019 BMW M3 Competition', speed: 168, track: 'Watkins Glen Int\'l, NY',
    bg: 'radial-gradient(ellipse at 50% 40%, #2e2410 0%, #1a1305 100%)', ts: _NOW - 604800000 },
  { uid: 'cr', init: 'CR', name: 'Carlos R.', verified: false,
    car: '2022 Subaru WRX STI', speed: 148, track: 'Pocono Raceway, PA',
    bg: 'radial-gradient(ellipse at 40% 60%, #1a1a2e 0%, #08081a 100%)', ts: _NOW - 259200000 },
];
function loadRuns() {
  try {
    const saved = localStorage.getItem('revmatch_runs');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(SPEED_SEED));
  } catch(e) { return JSON.parse(JSON.stringify(SPEED_SEED)); }
}
function saveRuns() {
  try { localStorage.setItem('revmatch_runs', JSON.stringify(speedRuns)); } catch(e) {}
}

const _N2 = Date.now();
const FORUM_SEED = [
  { id:'f1', cat:'Builds', pinned:true,
    title:'TE37s on a daily — worth it or nah?',
    author:{ init:'MK', name:'Mike K.', handle:'@mikek_r34', verified:true },
    body:'Finally pulled the trigger on bronze TE37s for the M3. Anyone running Volks as a daily? Curious about long-term durability on NJ roads.',
    ts: _N2-7200000,
    replies:[
      { init:'SP', name:'Spencer M.', verified:true, text:'Ran them on my GT3 for 2 years, zero issues. Just get road hazard.', ts:_N2-6000000 },
      { init:'AL', name:'Alex J.', verified:true, text:'NJ roads will bend them if you hit a pothole right. Budget for a spare.', ts:_N2-3600000 },
    ]},
  { id:'f2', cat:'Meets',
    title:'Anyone hitting NJMP in July? Looking to carpool',
    author:{ init:'SP', name:'Spencer M.', handle:'@spence_gt3', verified:true },
    body:'Signed up for the HPDE in July. Would be sick to roll in as a group. Anyone else registered?',
    ts: _N2-86400000,
    replies:[
      { init:'CR', name:'Carlos R.', verified:false, text:"I'm in, just sent my registration. What run group are you in?", ts:_N2-82000000 },
    ]},
  { id:'f3', cat:'Advice',
    title:'Stage 2 tune recs for FA20? Running hot under boost',
    author:{ init:'CR', name:'Carlos R.', handle:'@cr_sti', verified:false },
    body:"Just finished Stage 2 on the STI. Running lean above 6k and temps spike above 220°F in 3rd gear. Tune shop says normal but I'm not convinced.",
    ts: _N2-172800000,
    replies:[
      { init:'MK', name:'Mike K.', verified:true, text:"OTS maps on Cobb are notorious for running lean on modded cars. Get an e-tune.", ts:_N2-168000000 },
      { init:'AL', name:'Alex J.', verified:true, text:'Check injector duty cycle too. Might be maxing out.', ts:_N2-160000000 },
    ]},
  { id:'f4', cat:'Market',
    title:'WTB: E36 M3 tri-state, budget $15–22k',
    author:{ init:'AL', name:'Alex J.', handle:'@alexj_builds', verified:true },
    body:'Looking for a solid E36 M3, Alpine White or Cosmos Black. No track cars, want something streetable. DM if you know of anything.',
    ts: _N2-259200000, replies:[] },
  { id:'f5', cat:'General',
    title:'Best canyon roads within 2hrs of NJ?',
    author:{ init:'SP', name:'Spencer M.', handle:'@spence_gt3', verified:true },
    body:'Planning a weekend drive. Looking for twisties, nothing too crowded. Skyline Drive? Route 9W? Any hidden gems?',
    ts: _N2-345600000,
    replies:[
      { init:'MK', name:'Mike K.', verified:true, text:'Catskills, 23A from Tannersville to Haines Falls. Absolute banger.', ts:_N2-340000000 },
      { init:'CR', name:'Carlos R.', verified:false, text:'Storm King highway in the fall hits different', ts:_N2-300000000 },
    ]},
];
function loadForum() {
  try {
    const s = localStorage.getItem('revmatch_forum');
    return s ? JSON.parse(s) : JSON.parse(JSON.stringify(FORUM_SEED));
  } catch(e) { return JSON.parse(JSON.stringify(FORUM_SEED)); }
}
function saveForum() {
  try { localStorage.setItem('revmatch_forum', JSON.stringify(forumThreads)); } catch(e) {}
}

let posts = loadPosts();
let meets = loadMeets();
let garage = loadGarage();
let dmThreads = loadDMs();
let speedRuns = loadRuns();
let forumThreads = loadForum();

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
  const discoverBanner = `<div class="discover-banner" onclick="openMatch()">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.65"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2m-6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/></svg>
    <div class="discover-eyebrow">REVMATCH · NEW CARS</div>
    <div class="discover-title">FIND YOUR<br>NEXT CAR</div>
    <div class="discover-sub">Swipe through new cars matched to your budget and style</div>
    <div class="discover-cta">Start Matching
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </div>
  </div>`;
  document.getElementById('feed').innerHTML = discoverBanner + posts.map((p, i) => `
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

function cruiseMeetCard(m, i) {
  const fromCity = (m.from || '').split(',')[0].trim().toUpperCase();
  const toCity   = (m.to   || '').split(',')[0].trim().toUpperCase();
  const carTags  = (m.allowedCars || []).map(c => `<span class="cruise-car-tag">${c}</span>`).join('');
  return `<div class="meet cruise-meet ${m.mine ? 'mine' : ''}">
    <div class="cruise-banner">
      <div class="cruise-route-display">
        <div class="cruise-city">${fromCity}</div>
        <div class="cruise-arrow-wrap">
          <div class="cruise-arrow-line"></div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
        <div class="cruise-city">${toCity}</div>
      </div>
      <div class="cruise-badges">
        <div class="meet-type-pill">Cruise</div>
        <div class="cruise-vibe-pill">${m.vibe || 'Casual'}</div>
      </div>
    </div>
    <div class="meet-info">
      <div class="meet-name">${m.name}</div>
      <div class="meet-detail">${clockSVG} ${fmtTime(m.time)} &nbsp;·&nbsp; ${fmtDate(m.date)}</div>
      <div class="cruise-full-route">${m.from} &rarr; ${m.to}</div>
      ${carTags ? `<div class="cruise-car-tags">${carTags}</div>` : ''}
      ${m.desc ? `<div class="meet-detail" style="align-items:flex-start;margin-top:4px;color:var(--text2);">${m.desc}</div>` : ''}
    </div>
    <div class="meet-foot">
      <div class="meet-going">
        <div class="going-stack"><div class="going-dot">JD</div><div class="going-dot">MK</div><div class="going-dot">+</div></div>
        <span class="going-count">${m.going} going</span>
      </div>
      <button class="rsvp-btn ${m.rsvped ? 'going' : ''}" onclick="toggleRsvp(${i})">${m.rsvped ? "You're in" : "RSVP"}</button>
    </div>
  </div>`;
}

let meetsSeg = 'meets';

function switchMeetsSeg(seg, el) {
  meetsSeg = seg;
  document.querySelectorAll('.meets-seg-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  const intro = document.getElementById('meetsIntroText');
  if (intro) intro.textContent = seg === 'cruises' ? 'Cruises near Fairfield, NJ' : 'Meets near Fairfield, NJ';
  const banner = document.getElementById('radarBanner');
  if (banner) banner.style.display = seg === 'cruises' ? 'flex' : 'none';
  renderMeets();
}

function renderMeets() {
  const indexed = meets.map((m, i) => ({ m, i }));
  const visible = indexed.filter(({ m }) => meetsSeg === 'cruises' ? m.isCruise : !m.isCruise);

  if (!visible.length) {
    document.getElementById('meetsList').innerHTML = `<div class="empty-state" style="padding:40px 20px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:44px;height:44px;color:var(--accent);opacity:0.3;margin-bottom:12px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <p>No ${meetsSeg} yet.<br>Be the first to host one.</p>
    </div>`;
    return;
  }

  document.getElementById('meetsList').innerHTML = visible.map(({ m, i }) => m.isCruise ? cruiseMeetCard(m, i) : `
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

/* ── Cruise ── */
let cruiseMapObj = null, cruiseFromMarker = null, cruiseToMarker = null, cruiseRouteLayer = null;
let cruiseFromData = null, cruiseToData = null;
let cruiseVibe = 'Casual';
let cruiseAllowedCars = new Set(['All Welcome']);

function openHostChooser() {
  document.getElementById('hostChooser').classList.add('open');
}
function closeHostChooser() {
  document.getElementById('hostChooser').classList.remove('open');
}

function openCruise() {
  document.getElementById('cruiseScreen').classList.add('open');
  setTimeout(() => {
    if (!cruiseMapObj) {
      cruiseMapObj = L.map('cruiseMap', {
        zoomControl: false, attributionControl: false, scrollWheelZoom: false
      }).setView([40.85, -74.1], 10);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(cruiseMapObj);
    }
    cruiseMapObj.invalidateSize();
  }, 380);
}

function closeCruise() {
  document.getElementById('cruiseScreen').classList.remove('open');
  setTimeout(resetCruiseForm, 320);
}

function resetCruiseForm() {
  cruiseFromData = cruiseToData = null;
  if (cruiseRouteLayer && cruiseMapObj) { cruiseMapObj.removeLayer(cruiseRouteLayer); cruiseRouteLayer = null; }
  if (cruiseFromMarker && cruiseMapObj) { cruiseMapObj.removeLayer(cruiseFromMarker); cruiseFromMarker = null; }
  if (cruiseToMarker && cruiseMapObj)  { cruiseMapObj.removeLayer(cruiseToMarker);   cruiseToMarker   = null; }
  ['cruiseFrom','cruiseTo','cruiseName','cruiseDate','cruiseTime','cruiseNotes'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  cruiseVibe = 'Casual';
  cruiseAllowedCars = new Set(['All Welcome']);
  document.querySelectorAll('#vibeChips .type-chip').forEach((c,i)  => c.classList.toggle('selected', i === 0));
  document.querySelectorAll('#carsChips .type-chip').forEach((c,i)  => c.classList.toggle('selected', i === 0));
  document.getElementById('cruiseShareBtn').disabled = true;
  if (cruiseMapObj) cruiseMapObj.setView([40.85, -74.1], 10);
}

const fromIcon = L.divIcon({
  className: '',
  html: '<div style="width:12px;height:12px;background:#e8ff3d;border-radius:50%;border:2px solid #0a0a0a;box-shadow:0 0 8px rgba(232,255,61,0.9);"></div>',
  iconSize: [12,12], iconAnchor: [6,6]
});
const toIcon = L.divIcon({
  className: '',
  html: '<div style="width:12px;height:12px;background:#fff;border-radius:50%;border:2px solid #0a0a0a;box-shadow:0 0 8px rgba(255,255,255,0.7);"></div>',
  iconSize: [12,12], iconAnchor: [6,6]
});

async function geocodeLoc(q) {
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`);
    const d = await r.json();
    if (!d.length) return null;
    return {
      lat: parseFloat(d[0].lat), lng: parseFloat(d[0].lon),
      name: d[0].display_name.split(',').slice(0,2).join(', ').trim()
    };
  } catch(e) { return null; }
}

async function geocodeCruiseFrom() {
  const q = document.getElementById('cruiseFrom').value.trim();
  if (!q) return;
  const r = await geocodeLoc(q);
  if (!r) { showToast('Location not found'); return; }
  cruiseFromData = r;
  document.getElementById('cruiseFrom').value = r.name;
  if (cruiseFromMarker) cruiseMapObj.removeLayer(cruiseFromMarker);
  cruiseFromMarker = L.marker([r.lat, r.lng], { icon: fromIcon }).addTo(cruiseMapObj);
  fitCruiseMap();
  if (cruiseFromData && cruiseToData) drawCruiseRoute();
  checkCruiseForm();
}

async function geocodeCruiseTo() {
  const q = document.getElementById('cruiseTo').value.trim();
  if (!q) return;
  const r = await geocodeLoc(q);
  if (!r) { showToast('Location not found'); return; }
  cruiseToData = r;
  document.getElementById('cruiseTo').value = r.name;
  if (cruiseToMarker) cruiseMapObj.removeLayer(cruiseToMarker);
  cruiseToMarker = L.marker([r.lat, r.lng], { icon: toIcon }).addTo(cruiseMapObj);
  fitCruiseMap();
  if (cruiseFromData && cruiseToData) drawCruiseRoute();
  checkCruiseForm();
}

function fitCruiseMap() {
  if (!cruiseMapObj) return;
  if (cruiseFromData && cruiseToData) {
    cruiseMapObj.fitBounds(
      [[cruiseFromData.lat, cruiseFromData.lng],[cruiseToData.lat, cruiseToData.lng]],
      { padding: [32, 32] }
    );
  } else if (cruiseFromData) {
    cruiseMapObj.setView([cruiseFromData.lat, cruiseFromData.lng], 12);
  } else if (cruiseToData) {
    cruiseMapObj.setView([cruiseToData.lat, cruiseToData.lng], 12);
  }
}

async function drawCruiseRoute() {
  if (!cruiseMapObj || !cruiseFromData || !cruiseToData) return;
  if (cruiseRouteLayer) { cruiseMapObj.removeLayer(cruiseRouteLayer); cruiseRouteLayer = null; }
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${cruiseFromData.lng},${cruiseFromData.lat};${cruiseToData.lng},${cruiseToData.lat}?geometries=geojson&overview=full`;
    const data = await fetch(url).then(r => r.json());
    if (data.code === 'Ok' && data.routes?.length) {
      cruiseRouteLayer = L.geoJSON(data.routes[0].geometry, {
        style: { color: '#e8ff3d', weight: 3, opacity: 0.8, dashArray: '8 5' }
      }).addTo(cruiseMapObj);
      cruiseMapObj.fitBounds(cruiseRouteLayer.getBounds(), { padding: [28, 28] });
    }
  } catch(e) {}
}

function selectVibeChip(el) {
  document.querySelectorAll('#vibeChips .type-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  cruiseVibe = el.textContent.trim();
}

function toggleCruiseCar(el) {
  const label = el.textContent.trim();
  if (label === 'All Welcome') {
    cruiseAllowedCars = new Set(['All Welcome']);
    document.querySelectorAll('#carsChips .type-chip').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    return;
  }
  document.querySelector('#carsChips .type-chip').classList.remove('selected');
  cruiseAllowedCars.delete('All Welcome');
  if (cruiseAllowedCars.has(label)) {
    cruiseAllowedCars.delete(label); el.classList.remove('selected');
    if (!cruiseAllowedCars.size) {
      cruiseAllowedCars.add('All Welcome');
      document.querySelector('#carsChips .type-chip').classList.add('selected');
    }
  } else {
    cruiseAllowedCars.add(label); el.classList.add('selected');
  }
}

function checkCruiseForm() {
  document.getElementById('cruiseShareBtn').disabled = !(
    document.getElementById('cruiseName').value.trim() &&
    document.getElementById('cruiseDate').value &&
    document.getElementById('cruiseTime').value &&
    cruiseFromData && cruiseToData
  );
}

function publishCruise() {
  const fromLabel = cruiseFromData?.name || document.getElementById('cruiseFrom').value.trim();
  const toLabel   = cruiseToData?.name   || document.getElementById('cruiseTo').value.trim();
  meets.unshift({
    name:      document.getElementById('cruiseName').value.trim(),
    type:      'Cruise',
    date:      document.getElementById('cruiseDate').value,
    time:      document.getElementById('cruiseTime').value,
    loc:       fromLabel,
    desc:      document.getElementById('cruiseNotes').value.trim(),
    isCruise:  true,
    from:      fromLabel,
    to:        toLabel,
    vibe:      cruiseVibe,
    allowedCars: [...cruiseAllowedCars],
    bg:        'radial-gradient(ellipse at 50% 50%, #0f1a0f 0%, #050a05 100%)',
    going: 1, rsvped: true, mine: true
  });
  saveMeets();
  renderMeets();
  closeCruise();
  switchView('meets');
  showToast("Cruise posted — let's roll!");
}

/* ── Search ── */
function handleSearch(q) {
  document.getElementById('searchClear').style.opacity = q ? '1' : '0';
  renderSearch(q.trim().toLowerCase());
}

function clearSearch() {
  const inp = document.getElementById('searchInput');
  inp.value = '';
  inp.focus();
  handleSearch('');
}

function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function searchPostCard(p) {
  return `<div class="search-post-row">
    <div class="avatar">${escapeHtml(p.init)}</div>
    <div class="post-user">
      <div class="post-name">${escapeHtml(p.name)}${p.verified ? ' ' + verifySVG : ''}</div>
      <div class="search-post-car">${escapeHtml(p.car)}</div>
      <div class="post-meta search-post-caption">${escapeHtml(p.caption)}</div>
    </div>
    <div class="search-post-thumb" style="background:${p.bg};">${carSVG}</div>
  </div>`;
}

function searchMeetCard(m) {
  const d = new Date(m.date + 'T00:00:00');
  const mon = isNaN(d) ? '' : d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = isNaN(d) ? '' : d.getDate();
  return `<div class="mini-meet">
    <div class="mini-meet-date">
      <div class="mini-meet-mon">${mon}</div>
      <div class="mini-meet-day">${day}</div>
    </div>
    <div class="mini-meet-info">
      <div class="mini-meet-name">${escapeHtml(m.name)}</div>
      <div class="mini-meet-loc">${escapeHtml(m.loc)}</div>
    </div>
    <div class="mini-meet-badge">${escapeHtml(m.type)}</div>
  </div>`;
}

function renderSearch(q) {
  const container = document.getElementById('searchResults');
  if (!q) {
    container.innerHTML =
      '<div class="search-section-title">POSTS</div>' +
      posts.map(searchPostCard).join('') +
      '<div class="search-section-title">MEETS</div>' +
      '<div class="search-meets-wrap">' + meets.map(searchMeetCard).join('') + '</div>' +
      '<div style="height:80px;"></div>';
    return;
  }
  const matchedPosts = posts.filter(p =>
    [p.car, p.name, p.handle, p.caption, ...(p.tags || [])].some(s => s.toLowerCase().includes(q))
  );
  const matchedMeets = meets.filter(m =>
    [m.name, m.type, m.loc, m.desc || ''].some(s => s.toLowerCase().includes(q))
  );
  if (!matchedPosts.length && !matchedMeets.length) {
    container.innerHTML = `<div class="search-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <p>No results for <b>"${escapeHtml(q)}"</b></p>
    </div>`;
    return;
  }
  let html = '';
  if (matchedPosts.length) {
    html += '<div class="search-section-title">POSTS</div>' + matchedPosts.map(searchPostCard).join('');
  }
  if (matchedMeets.length) {
    html += '<div class="search-section-title">MEETS</div>' +
      '<div class="search-meets-wrap">' + matchedMeets.map(searchMeetCard).join('') + '</div>';
  }
  html += '<div style="height:80px;"></div>';
  container.innerHTML = html;
}

/* ── Forum ── */
let forumCat = 'All';
let activeThreadId = null;

function setForumCat(cat, el) {
  forumCat = cat;
  document.querySelectorAll('.forum-cat').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderForum();
}

function fmtForumTime(ts) {
  const d = Date.now() - ts;
  if (d < 3600000) return Math.max(1, Math.floor(d/60000)) + 'm ago';
  if (d < 86400000) return Math.floor(d/3600000) + 'h ago';
  return Math.floor(d/86400000) + 'd ago';
}

function renderForum() {
  const list = document.getElementById('forumList');
  if (!list) return;
  const filtered = forumCat === 'All' ? forumThreads : forumThreads.filter(t => t.cat === forumCat);
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state" style="padding:40px 20px;"><p>No threads yet in ${forumCat}.<br>Start the conversation.</p></div>`;
    return;
  }
  list.innerHTML = filtered.map(t => `
    <div class="forum-thread" onclick="openForumThread('${t.id}')">
      <div class="forum-thread-meta">
        <span class="forum-thread-cat">${t.cat}</span>
        <span class="forum-thread-time">${fmtForumTime(t.ts)}</span>
      </div>
      <div class="forum-thread-title">${t.title}</div>
      <div class="forum-thread-byline">
        <span class="forum-thread-avatar">${t.author.init}</span>
        <span class="forum-thread-author">${t.author.name}${t.author.verified ? ' <span class="verified-badge">✓</span>' : ''}</span>
        <span class="forum-thread-replies">${t.replies.length} ${t.replies.length === 1 ? 'reply' : 'replies'}</span>
      </div>
    </div>`).join('');
}

function openForumThread(id) {
  activeThreadId = id;
  const t = forumThreads.find(f => f.id === id);
  if (!t) return;
  document.getElementById('forumListPanel').style.display = 'none';
  const panel = document.getElementById('forumThreadPanel');
  panel.style.display = 'flex';
  document.getElementById('threadCatLabel').textContent = t.cat;
  const scroll = document.getElementById('forumThreadScroll');
  scroll.innerHTML = `
    <div class="forum-op">
      <div class="forum-op-head">
        <span class="forum-thread-avatar">${t.author.init}</span>
        <div>
          <div class="forum-op-name">${t.author.name}${t.author.verified ? ' <span class="verified-badge">✓</span>' : ''}</div>
          <div class="forum-op-handle">${t.author.handle || ''} · ${fmtForumTime(t.ts)}</div>
        </div>
      </div>
      <div class="forum-op-body">${t.body}</div>
    </div>
    <div class="forum-replies-label">${t.replies.length} ${t.replies.length === 1 ? 'Reply' : 'Replies'}</div>
    ${t.replies.map(r => `
      <div class="forum-reply">
        <span class="forum-thread-avatar forum-reply-avatar">${r.init}</span>
        <div class="forum-reply-body">
          <div class="forum-reply-name">${r.name}${r.verified ? ' <span class="verified-badge">✓</span>' : ''} <span class="forum-thread-time">${fmtForumTime(r.ts)}</span></div>
          <div class="forum-reply-text">${r.text}</div>
        </div>
      </div>`).join('')}`;
  scroll.scrollTop = scroll.scrollHeight;
}

function backToForumList() {
  document.getElementById('forumThreadPanel').style.display = 'none';
  document.getElementById('forumListPanel').style.display = 'flex';
  activeThreadId = null;
}

function postReply() {
  const inp = document.getElementById('replyInput');
  const text = inp.value.trim();
  if (!text || !activeThreadId) return;
  const t = forumThreads.find(f => f.id === activeThreadId);
  if (!t) return;
  t.replies.push({ init:'ME', name:'You', verified:false, text, ts: Date.now() });
  saveForum();
  inp.value = '';
  openForumThread(activeThreadId);
}

let newThreadCat = '';
function openNewThread() {
  newThreadCat = '';
  document.querySelectorAll('#threadCatChips .type-chip').forEach(c => c.classList.remove('selected'));
  document.getElementById('threadTitleInput').value = '';
  document.getElementById('threadBodyInput').value = '';
  checkThreadForm();
  document.getElementById('newThreadScreen').classList.add('open');
}
function closeNewThread() {
  document.getElementById('newThreadScreen').classList.remove('open');
}
function selectThreadCat(cat, el) {
  newThreadCat = cat;
  document.querySelectorAll('#threadCatChips .type-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  checkThreadForm();
}
function checkThreadForm() {
  const ok = newThreadCat && document.getElementById('threadTitleInput').value.trim().length > 2;
  document.getElementById('threadShareBtn').disabled = !ok;
}
function submitThread() {
  const title = document.getElementById('threadTitleInput').value.trim();
  const body = document.getElementById('threadBodyInput').value.trim();
  if (!title || !newThreadCat) return;
  const newThread = {
    id: 'f' + Date.now(),
    cat: newThreadCat,
    title,
    author: { init:'ME', name:'You', handle:'@you', verified:false },
    body: body || '',
    ts: Date.now(),
    replies: []
  };
  forumThreads.unshift(newThread);
  saveForum();
  closeNewThread();
  forumCat = 'All';
  document.querySelectorAll('.forum-cat').forEach((c, i) => c.classList.toggle('active', i === 0));
  renderForum();
  openForumThread(newThread.id);
}

/* ── Radar ── */
const RADAR_BLIPS = [
  { id:'rb1', init:'MK', name:'Mike K.', car:'2002 Nissan Skyline R34', dist:'0.8 mi', angle:47, ring:0.25, online:true },
  { id:'rb2', init:'AL', name:'Alex J.', car:'2019 BMW M3 Competition', dist:'1.9 mi', angle:142, ring:0.52, online:true },
  { id:'rb3', init:'SP', name:'Spencer M.', car:'2021 Porsche 911 GT3', dist:'3.1 mi', angle:255, ring:0.72, online:false },
  { id:'rb4', init:'CR', name:'Carlos R.', car:'2022 Subaru WRX STI', dist:'4.4 mi', angle:330, ring:0.88, online:true },
];

function openRadar() {
  const wrap = document.getElementById('radarWrap');
  const existingBlips = wrap.querySelectorAll('.radar-blip');
  existingBlips.forEach(b => b.remove());
  document.getElementById('radarBlipCard').style.display = 'none';
  RADAR_BLIPS.forEach(blip => {
    const rad = (blip.angle - 90) * Math.PI / 180;
    const r = blip.ring;
    const x = 50 + r * 50 * Math.cos(rad);
    const y = 50 + r * 50 * Math.sin(rad);
    const el = document.createElement('div');
    el.className = 'radar-blip' + (blip.online ? ' radar-blip-online' : '');
    el.textContent = blip.init;
    el.style.left = x + '%';
    el.style.top = y + '%';
    el.setAttribute('data-id', blip.id);
    el.onclick = () => selectBlip(blip.id);
    wrap.appendChild(el);
  });
  document.getElementById('radarScreen').classList.add('open');
}
function closeRadar() {
  document.getElementById('radarScreen').classList.remove('open');
}
function selectBlip(id) {
  const blip = RADAR_BLIPS.find(b => b.id === id);
  if (!blip) return;
  document.querySelectorAll('.radar-blip').forEach(b => b.classList.remove('radar-blip-selected'));
  const el = document.querySelector(`.radar-blip[data-id="${id}"]`);
  if (el) el.classList.add('radar-blip-selected');
  const card = document.getElementById('radarBlipCard');
  card.style.display = 'flex';
  document.getElementById('radarBcAvatar').textContent = blip.init;
  document.getElementById('radarBcName').textContent = blip.name;
  document.getElementById('radarBcCar').textContent = blip.car;
  document.getElementById('radarBcDist').textContent = blip.dist + ' away';
}

/* ── View switching ── */
function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.getElementById('nav-feed').classList.toggle('active', view === 'feed');
  document.getElementById('nav-search').classList.toggle('active', view === 'search');
  document.getElementById('nav-meets').classList.toggle('active', view === 'meets');
  document.getElementById('nav-profile').classList.toggle('active', view === 'profile');
  if (view === 'profile') renderProfile();
  if (view === 'search') renderForum();
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
    garage.map((c, i) => `
      <div class="garage-card">
        <div class="garage-img" style="background:${c.bg};">
          ${c.verified ? `<div class="garage-verified-flag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>` : ''}
        </div>
        <div class="garage-card-body">
          <div class="garage-car-name">${c.name}</div>
          <div class="garage-car-spec">${c.spec}</div>
          ${c.verified
            ? `<div class="garage-verified-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Verified</div>`
            : `<button class="garage-verify-btn" onclick="openVerifySheet(${i})">Verify ownership</button>`}
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
    bg: bgOptions[Math.floor(Math.random() * bgOptions.length)],
    verified: false
  });
  saveGarage();
  renderProfile();
}

/* ── Speed Board ── */
let selectedSpeedCar = null;

function renderSpeedBoard() {
  const sorted = [...speedRuns].sort((a, b) => b.speed - a.speed);
  const rankColors = ['var(--accent)', '#c0c0c0', '#cd7f32'];
  document.getElementById('speedBoardList').innerHTML = sorted.map((r, i) => `
    <div class="speed-entry ${i === 0 ? 'speed-entry-first' : ''}">
      <div class="speed-rank" style="color:${rankColors[i] || 'var(--text3)'}">${i + 1}</div>
      <div class="speed-avatar" style="background:${r.bg}">${r.init}</div>
      <div class="speed-entry-body">
        <div class="speed-entry-name">${escapeHtml(r.name)}${r.verified ? verifySVG : ''}</div>
        <div class="speed-entry-car">${escapeHtml(r.car)}</div>
        <div class="speed-entry-track">${escapeHtml(r.track)}</div>
      </div>
      <div class="speed-entry-right">
        <div class="speed-entry-num" style="${i === 0 ? 'color:var(--accent)' : ''}">${r.speed}</div>
        <div class="speed-entry-unit">mph</div>
      </div>
    </div>
  `).join('');
}

function openSpeedBoard() {
  document.getElementById('speedBoardPanel').style.display = 'flex';
  document.getElementById('speedLogPanel').style.display = 'none';
  renderSpeedBoard();
  document.getElementById('speedScreen').classList.add('open');
}

function closeSpeedBoard() {
  document.getElementById('speedScreen').classList.remove('open');
}

function openLogRun() {
  selectedSpeedCar = null;
  document.getElementById('speedMph').value = '';
  document.getElementById('speedTrack').value = '';
  document.getElementById('speedSubmitBtn').disabled = true;
  const chips = document.getElementById('speedCarChips');
  chips.innerHTML = garage.length
    ? garage.map((c, i) =>
        `<div class="type-chip" onclick="selectSpeedCar(${i},this,'speedCarChips')">${c.name}</div>`
      ).join('')
    : `<div style="font-size:12px;color:var(--text3);">Add a car to your garage first.</div>`;
  document.getElementById('speedBoardPanel').style.display = 'none';
  document.getElementById('speedLogPanel').style.display = 'flex';
}

function closeLogRun() {
  document.getElementById('speedLogPanel').style.display = 'none';
  document.getElementById('speedBoardPanel').style.display = 'flex';
}

function selectSpeedCar(idx, el, groupId) {
  selectedSpeedCar = idx;
  document.querySelectorAll(`#${groupId} .type-chip`).forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  checkRunForm();
}

function checkRunForm() {
  const mph = parseInt(document.getElementById('speedMph').value, 10);
  const track = document.getElementById('speedTrack').value.trim();
  document.getElementById('speedSubmitBtn').disabled =
    !(selectedSpeedCar !== null && mph >= 50 && mph <= 350 && track.length > 0);
}

function submitRun() {
  const mph = parseInt(document.getElementById('speedMph').value, 10);
  const track = document.getElementById('speedTrack').value.trim();
  const car = garage[selectedSpeedCar];
  if (!car) return;
  speedRuns.push({
    uid: 'me', init: 'AJ', name: 'Alex Johnson', verified: false,
    car: car.name, speed: mph, track, bg: car.bg, ts: Date.now()
  });
  saveRuns();
  document.getElementById('speedLogPanel').style.display = 'none';
  document.getElementById('speedBoardPanel').style.display = 'flex';
  renderSpeedBoard();
  showToast('Speed run posted 🏁');
}

/* ── DMs ── */
let activeDMId = null;
const DM_REPLIES = [
  'Haha yeah 🔥', 'Facts 💯', 'When are you free?', 'That thing rips bro',
  'Lmk 👊', 'Bet, let\'s link up', 'Sheesh 😮', 'Pull up to the meet',
  'No cap', 'Bro same 😂', 'What tune are you running?', 'That setup is clean'
];

function formatDMTime(ts) {
  const d = Date.now() - ts;
  if (d < 3600000) return Math.max(1, Math.floor(d / 60000)) + 'm';
  if (d < 86400000) return Math.floor(d / 3600000) + 'h';
  return Math.floor(d / 86400000) + 'd';
}

function updateDMBadge() {
  const total = dmThreads.reduce((n, t) => n + (t.unread || 0), 0);
  const badge = document.getElementById('dmBadge');
  if (badge) badge.style.display = total > 0 ? '' : 'none';
}

function renderDMList() {
  updateDMBadge();
  document.getElementById('dmList').innerHTML = dmThreads.map(t => {
    const last = t.msgs[t.msgs.length - 1];
    const preview = last ? (last.from === 'me' ? 'You: ' + last.text : last.text) : '';
    const time = last ? formatDMTime(last.ts) : '';
    return `<div class="dm-thread" onclick="openDMThread('${t.id}')">
      <div class="dm-thread-avatar" style="background:${t.bg}">${t.init}</div>
      <div class="dm-thread-body">
        <div class="dm-thread-top">
          <div class="dm-thread-name">${escapeHtml(t.name)}${t.verified ? verifySVG : ''}</div>
          <div class="dm-thread-time">${time}</div>
        </div>
        <div class="dm-thread-preview${t.unread ? ' dm-preview-unread' : ''}">${escapeHtml(preview)}</div>
      </div>
      ${t.unread ? '<div class="dm-unread-dot"></div>' : ''}
    </div>`;
  }).join('');
}

function renderDMChat(thread) {
  document.getElementById('dmChatTitle').innerHTML = escapeHtml(thread.name) + (thread.verified ? verifySVG : '');
  const msgsEl = document.getElementById('dmMessages');
  msgsEl.innerHTML = thread.msgs.map(m =>
    `<div class="dm-bubble ${m.from === 'me' ? 'dm-me' : 'dm-them'}">
      <div class="dm-bubble-text">${escapeHtml(m.text)}</div>
    </div>`
  ).join('');
  requestAnimationFrame(() => { msgsEl.scrollTop = msgsEl.scrollHeight; });
}

function openDMs() {
  document.getElementById('dmListPanel').style.display = 'flex';
  document.getElementById('dmChatPanel').style.display = 'none';
  renderDMList();
  document.getElementById('dmScreen').classList.add('open');
}

function closeDMs() {
  document.getElementById('dmScreen').classList.remove('open');
}

function openDMThread(id) {
  activeDMId = id;
  const thread = dmThreads.find(t => t.id === id);
  if (!thread) return;
  thread.unread = 0;
  saveDMs();
  document.getElementById('dmListPanel').style.display = 'none';
  document.getElementById('dmChatPanel').style.display = 'flex';
  renderDMChat(thread);
  updateDMBadge();
}

function backToDMList() {
  document.getElementById('dmChatPanel').style.display = 'none';
  document.getElementById('dmListPanel').style.display = 'flex';
  renderDMList();
}

function sendDM() {
  const input = document.getElementById('dmInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  const thread = dmThreads.find(t => t.id === activeDMId);
  if (!thread) return;
  thread.msgs.push({ from: 'me', text, ts: Date.now() });
  saveDMs();
  renderDMChat(thread);
  setTimeout(() => {
    const typing = document.getElementById('dmTyping');
    if (typing) { typing.style.display = 'flex'; }
    const msgsEl = document.getElementById('dmMessages');
    if (msgsEl) msgsEl.scrollTop = msgsEl.scrollHeight;
  }, 800);
  setTimeout(() => {
    const typing = document.getElementById('dmTyping');
    if (typing) typing.style.display = 'none';
    if (dmThreads.find(t => t.id === activeDMId) !== thread) return;
    thread.msgs.push({
      from: 'them',
      text: DM_REPLIES[Math.floor(Math.random() * DM_REPLIES.length)],
      ts: Date.now()
    });
    saveDMs();
    renderDMChat(thread);
    renderDMList();
  }, 2400);
}

/* ── Garage Verification ── */
let verifyIdx = null;

function openVerifySheet(idx) {
  verifyIdx = idx;
  document.getElementById('verifyCarName').textContent = garage[idx].name;
  document.getElementById('verifyOptions').style.display = '';
  document.getElementById('verifyChecking').style.display = 'none';
  document.getElementById('verifySuccess').style.display = 'none';
  document.getElementById('verifyCancelBtn').style.display = '';
  document.getElementById('verifySheet').classList.add('open');
}

function closeVerifySheet() {
  document.getElementById('verifySheet').classList.remove('open');
}

function doVerify(method) {
  document.getElementById('verifyOptions').style.display = 'none';
  document.getElementById('verifyCancelBtn').style.display = 'none';
  document.getElementById('verifyChecking').style.display = 'flex';
  setTimeout(() => {
    document.getElementById('verifyChecking').style.display = 'none';
    document.getElementById('verifySuccess').style.display = 'flex';
    garage[verifyIdx].verified = true;
    saveGarage();
    setTimeout(() => {
      closeVerifySheet();
      renderProfile();
    }, 900);
  }, 1600);
}

/* ── Auth ── */
function signIn() {
  const ls = document.getElementById('loginScreen');
  ls.classList.add('hiding');
  setTimeout(() => ls.remove(), 380);
}

/* ── EPA Car Data ── */
const EPA_BASE = 'https://www.fueleconomy.gov/ws/rest';
const EPA_YEAR = 2025;
const EPA_HDR  = { headers: { Accept: 'application/json' } };

const MAKE_ORIGIN = {
  'Audi':'German','BMW':'German','Mercedes-Benz':'German','Porsche':'German','Volkswagen':'German',
  'Toyota':'Japanese','Honda':'Japanese','Nissan':'Japanese','Mazda':'Japanese','Subaru':'Japanese',
  'Lexus':'Japanese','Acura':'Japanese','Infiniti':'Japanese','Mitsubishi':'Japanese',
  'Ford':'American','Chevrolet':'American','Dodge':'American','Jeep':'American','Ram':'American',
  'Cadillac':'American','Lincoln':'American','GMC':'American','Tesla':'American',
  'Rivian':'American','Lucid':'American','Buick':'American','Chrysler':'American',
  'Ferrari':'Italian','Lamborghini':'Italian','Alfa Romeo':'Italian','Maserati':'Italian','Fiat':'Italian',
  'Volvo':'European','Genesis':'Korean','Hyundai':'Korean','Kia':'Korean',
  'Land Rover':'British','Jaguar':'British','Mini':'British','Polestar':'European',
  'Rolls-Royce':'British','Bentley':'British','McLaren':'British'
};

const MAKE_PRICE = {
  'Toyota':32000,'Honda':29000,'Nissan':30000,'Mazda':31000,'Subaru':28000,
  'Mitsubishi':24000,'Lexus':52000,'Acura':42000,'Infiniti':45000,
  'BMW':55000,'Mercedes-Benz':62000,'Audi':50000,'Porsche':90000,'Volkswagen':31000,
  'Ford':34000,'Chevrolet':32000,'Dodge':34000,'Jeep':39000,'Ram':43000,
  'Cadillac':62000,'Lincoln':57000,'GMC':46000,'Tesla':50000,'Rivian':72000,
  'Lucid':95000,'Buick':36000,'Chrysler':34000,
  'Ferrari':225000,'Lamborghini':245000,'Alfa Romeo':46000,'Maserati':82000,'Fiat':25000,
  'Volvo':46000,'Genesis':42000,'Hyundai':28000,'Kia':26000,
  'Land Rover':72000,'Jaguar':62000,'Mini':31000,'Polestar':58000,
  'Rolls-Royce':350000,'Bentley':210000,'McLaren':215000
};

const CLASS_SPECS = {
  'Two Seaters':{power:400,accel:4.0},'Minicompact Cars':{power:290,accel:5.3},
  'Subcompact Cars':{power:148,accel:8.1},'Compact Cars':{power:182,accel:7.2},
  'Midsize Cars':{power:220,accel:6.6},'Large Cars':{power:285,accel:5.9},
  'Small Station Wagons':{power:165,accel:7.6},'Midsize Station Wagons':{power:208,accel:6.9},
  'Small Sport Utility Vehicles':{power:188,accel:7.5},
  'Sport Utility Vehicles':{power:275,accel:6.5},
  'Standard Sport Utility Vehicles':{power:355,accel:6.0},
  'Small Pickup Trucks':{power:268,accel:7.1},'Standard Pickup Trucks':{power:410,accel:6.1},
  'Minivans':{power:208,accel:7.8},'Vans, Cargo Type':{power:215,accel:8.3},
  'Special Purpose Vehicle':{power:248,accel:7.2}
};

const PREMIUM_MAKES = new Set([
  'BMW','Mercedes-Benz','Porsche','Cadillac','Lexus','Acura','Infiniti',
  'Ferrari','Lamborghini','Maserati','Rolls-Royce','Bentley','McLaren','Lucid'
]);

const MAKE_GRADIENTS = {
  'Toyota':'linear-gradient(135deg,#1a0000 0%,#3d0000 100%)',
  'Honda':'linear-gradient(135deg,#1a0000 0%,#2d0000 100%)',
  'Nissan':'linear-gradient(135deg,#001828 0%,#002438 100%)',
  'Mazda':'linear-gradient(135deg,#1a0010 0%,#3d0020 100%)',
  'Subaru':'linear-gradient(135deg,#001a3d 0%,#00264d 100%)',
  'Lexus':'linear-gradient(135deg,#1a1400 0%,#2e2200 100%)',
  'Acura':'linear-gradient(135deg,#1a0000 0%,#280000 100%)',
  'Infiniti':'linear-gradient(135deg,#0d0d1a 0%,#1a1a2d 100%)',
  'Mitsubishi':'linear-gradient(135deg,#001020 0%,#001828 100%)',
  'BMW':'linear-gradient(135deg,#0d1830 0%,#0a2545 100%)',
  'Mercedes-Benz':'linear-gradient(135deg,#0a0d18 0%,#101828 100%)',
  'Audi':'linear-gradient(135deg,#161616 0%,#282828 100%)',
  'Porsche':'linear-gradient(135deg,#181200 0%,#281e00 100%)',
  'Volkswagen':'linear-gradient(135deg,#001325 0%,#002040 100%)',
  'Ford':'linear-gradient(135deg,#00001a 0%,#00003d 100%)',
  'Chevrolet':'linear-gradient(135deg,#001800 0%,#002800 100%)',
  'Dodge':'linear-gradient(135deg,#1a0000 0%,#3d0000 100%)',
  'Jeep':'linear-gradient(135deg,#001500 0%,#002200 100%)',
  'Ram':'linear-gradient(135deg,#1a0000 0%,#2d0000 100%)',
  'Cadillac':'linear-gradient(135deg,#1a1500 0%,#281e00 100%)',
  'Lincoln':'linear-gradient(135deg,#0d0d1a 0%,#1a1a2d 100%)',
  'GMC':'linear-gradient(135deg,#001800 0%,#003800 100%)',
  'Tesla':'linear-gradient(135deg,#100004 0%,#250008 100%)',
  'Rivian':'linear-gradient(135deg,#001808 0%,#002810 100%)',
  'Lucid':'linear-gradient(135deg,#001828 0%,#00243d 100%)',
  'Buick':'linear-gradient(135deg,#0d1525 0%,#1a253d 100%)',
  'Ferrari':'linear-gradient(135deg,#220000 0%,#550000 100%)',
  'Lamborghini':'linear-gradient(135deg,#1a1400 0%,#504000 100%)',
  'Alfa Romeo':'linear-gradient(135deg,#1e0000 0%,#3d0000 50%,#001a3d 100%)',
  'Maserati':'linear-gradient(135deg,#001828 0%,#002640 100%)',
  'Fiat':'linear-gradient(135deg,#001a38 0%,#00264d 100%)',
  'Volvo':'linear-gradient(135deg,#001828 0%,#002640 100%)',
  'Genesis':'linear-gradient(135deg,#0d0d18 0%,#1a1a28 100%)',
  'Hyundai':'linear-gradient(135deg,#001828 0%,#00264d 100%)',
  'Kia':'linear-gradient(135deg,#1a0018 0%,#2d0028 100%)',
  'Land Rover':'linear-gradient(135deg,#001400 0%,#002000 100%)',
  'Jaguar':'linear-gradient(135deg,#080808 0%,#181818 100%)',
  'Mini':'linear-gradient(135deg,#150015 0%,#220022 100%)',
  'Polestar':'linear-gradient(135deg,#080808 0%,#181818 100%)',
  'Rolls-Royce':'linear-gradient(135deg,#151000 0%,#261e00 100%)',
  'Bentley':'linear-gradient(135deg,#001808 0%,#002810 100%)',
  'McLaren':'linear-gradient(135deg,#1a0800 0%,#2d1000 100%)'
};

function getMakeOrigin(make) { return MAKE_ORIGIN[make] || ''; }

function estimatePrice(make, vclass) {
  const base = MAKE_PRICE[make] || 35000;
  let mult = 1;
  if (vclass.includes('Standard Sport Utility')) mult = 1.3;
  else if (vclass.includes('Standard Pickup')) mult = 1.2;
  else if (vclass === 'Two Seaters') mult = 1.6;
  else if (vclass.includes('Subcompact') || vclass.includes('Small')) mult = 0.85;
  return Math.round(base * mult / 500) * 500;
}

function getClassSpecs(vclass) {
  for (const [cls, s] of Object.entries(CLASS_SPECS)) {
    if (vclass === cls || vclass.startsWith(cls)) return s;
  }
  if (vclass.includes('Pickup')) return { power: 380, accel: 6.5 };
  if (vclass.includes('Sport Utility') || vclass.includes('SUV')) return { power: 275, accel: 6.5 };
  if (vclass.includes('Van')) return { power: 210, accel: 7.8 };
  return { power: 200, accel: 7.0 };
}

function estimatePower(make, vclass, isEV) {
  const s = getClassSpecs(vclass);
  const p = Math.round(s.power * (PREMIUM_MAKES.has(make) ? 1.35 : 1));
  return isEV ? Math.round(p * 1.45) : p;
}

function estimateAccel(make, vclass, isEV) {
  const s = getClassSpecs(vclass);
  const a = parseFloat((s.accel * (PREMIUM_MAKES.has(make) ? 0.78 : 1)).toFixed(1));
  return isEV ? parseFloat((a * 0.7).toFixed(1)) : a;
}

function getMakeGradient(make) {
  return MAKE_GRADIENTS[make] || 'linear-gradient(135deg,#181818 0%,#282828 100%)';
}

function mapVClassToType(vclass) {
  if (vclass === 'Two Seaters' || vclass === 'Minicompact Cars') return 'Sports';
  if (vclass.includes('Pickup')) return 'Truck';
  if (vclass.includes('Sport Utility') || vclass.includes('Special Purpose')) return 'SUV';
  return 'Sedan';
}

function generateDesc(make, model, vclass, drive, fuelType, mpg) {
  const isEV = fuelType.toLowerCase().includes('electric');
  const isPremium = PREMIUM_MAKES.has(make);
  const drv = drive.replace('-Wheel Drive','WD').replace('All-Wheel Drive','AWD') || 'AWD';
  if (isEV) return `The ${make} ${model} delivers instant torque with ${mpg || 100} MPGe combined. Zero emissions, serious performance.`;
  if (vclass.includes('Pickup')) return `${make}'s ${model} combines ${drv} capability with modern tech and comfort. Built to work hard and look good.`;
  if (vclass === 'Two Seaters' || vclass === 'Minicompact Cars') return `Pure performance from ${make}. The ${model} strips away everything unnecessary — just driver, road, and thrills.`;
  if (vclass.includes('Sport Utility')) return `The ${make} ${model} brings ${drv} confidence with room for the whole crew. Practical on paper, exciting in reality.`;
  if (isPremium) return `${make}'s ${model} blends precision engineering with refined luxury. A statement machine with real driving substance.`;
  return `The ${make} ${model} balances everyday efficiency with reliability. ${mpg ? mpg + ' MPG combined — ' : ''}sensible without being boring.`;
}

function epaToCard(v) {
  if (!v?.make || !v?.model) return null;
  const fuel = (v.fuelType1 || v.fuelType || '').toLowerCase();
  const isEV = fuel.includes('electric') && !fuel.includes('plug-in hybrid');
  const type = isEV ? 'EV' : mapVClassToType(v.VClass || '');
  const brand = getMakeOrigin(v.make);
  const vclass = v.VClass || '';
  const price = estimatePrice(v.make, vclass);
  const power = estimatePower(v.make, vclass, isEV);
  const accel = estimateAccel(v.make, vclass, isEV);
  const mpg = isEV ? (v.combA08 || v.comb08 || 100) : v.comb08;
  const economy = isEV ? `${mpg} MPGe` : `${v.city08 || '--'}/${v.hwy08 || '--'} MPG`;
  const drive = (v.drive || '')
    .replace('Front-Wheel Drive','FWD').replace('Rear-Wheel Drive','RWD')
    .replace('All-Wheel Drive','AWD').replace('4-Wheel Drive','4WD')
    .replace('4-Wheel or All-Wheel Drive','AWD').replace('Part-time 4-Wheel Drive','4WD');
  const engine = isEV ? 'Electric Motor'
    : v.displ ? `${parseFloat(v.displ).toFixed(1)}L${v.cylinders ? ' ' + v.cylinders + '-Cyl' : ''}` : '';
  const trans = v.trany ? (v.trany.toLowerCase().startsWith('manual') ? 'Manual' : 'Automatic') : '';
  const tags = [drive, engine, trans].filter(t => t && t.trim());
  return {
    id: v.id, year: v.year || EPA_YEAR,
    make: v.make, model: v.model,
    type, brand, price,
    power: `${power} HP`, accel: `${accel}s`, economy,
    desc: generateDesc(v.make, v.model, vclass, v.drive || '', v.fuelType1 || '', mpg),
    tags, bg: getMakeGradient(v.make),
    rawDrive: (v.drive || '').toLowerCase(),
    rawFuel:  [(v.fuelType1 || v.fuelType || ''), (v.atvType || '')].join(' ').toLowerCase(),
    rawTrans: (v.trany || '').toLowerCase()
  };
}

function normItems(data) {
  if (!data?.menuItem) return [];
  return Array.isArray(data.menuItem) ? data.menuItem : [data.menuItem];
}

const cardImageCache = {};

async function fetchWikiImg(make, model) {
  const key = `${make}|${model}`;
  if (key in cardImageCache) return cardImageCache[key];
  cardImageCache[key] = null;
  const tries = [
    `${make}_${model}`, model, `${make}_${model.split(' ')[0]}`
  ].map(s => s.replace(/\s+/g, '_'));
  for (const title of tries) {
    try {
      const r = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=800&format=json&origin=*`
      );
      const d = await r.json();
      const page = Object.values(d?.query?.pages || {})[0];
      if (page?.thumbnail?.source && !('missing' in page)) {
        cardImageCache[key] = page.thumbnail.source;
        return page.thumbnail.source;
      }
    } catch(e) {}
  }
  return null;
}

function preloadCardImages(fromIdx) {
  for (let i = fromIdx; i < Math.min(fromIdx + 5, swipeQueue.length); i++) {
    const car = swipeQueue[i];
    const key = `${car.make}|${car.model}`;
    if (key in cardImageCache) continue;
    fetchWikiImg(car.make, car.model).then(url => {
      if (!url) return;
      if (swipeQueue[swipeIndex] === car) {
        const imgDiv = document.querySelector('#activeCard .swipe-card-img');
        if (imgDiv && !imgDiv.querySelector('.swipe-card-photo')) {
          const img = document.createElement('img');
          img.className = 'swipe-card-photo';
          img.src = url;
          img.alt = '';
          img.onerror = () => img.remove();
          imgDiv.insertBefore(img, imgDiv.firstChild);
        }
      }
    });
  }
}

async function loadCarsFromEPA() {
  const get = path => fetch(`${EPA_BASE}/${path}`, EPA_HDR).then(r => r.json());

  const allMakes = normItems(await get(`vehicle/menu/make?year=${EPA_YEAR}`)).map(m => m.text);
  const knownMakes = new Set(Object.keys(MAKE_ORIGIN));
  let makes = matchPrefs.brand !== 'Any'
    ? allMakes.filter(m => getMakeOrigin(m) === matchPrefs.brand)
    : allMakes.filter(m => knownMakes.has(m));
  if (!makes.length) return [];
  makes = makes.slice(0, 12);

  const modelLists = await Promise.all(
    makes.map(make =>
      get(`vehicle/menu/model?year=${EPA_YEAR}&make=${encodeURIComponent(make)}`)
        .then(d => ({ make, models: normItems(d).map(m => m.text) }))
        .catch(() => ({ make, models: [] }))
    )
  );

  const pairs = [];
  for (const { make, models } of modelLists) {
    models.slice(0, 6).forEach(model => pairs.push({ make, model }));
  }

  const idLists = await Promise.all(
    pairs.map(({ make, model }) =>
      get(`vehicle/menu/options?year=${EPA_YEAR}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`)
        .then(d => normItems(d).slice(0, 2).map(i => i.value))
        .catch(() => [])
    )
  );

  const vehicles = await Promise.all(
    idLists.flat().filter(Boolean).map(id => get(`vehicle/${id}`).catch(() => null))
  );

  return vehicles.filter(Boolean).map(epaToCard).filter(card => {
    if (!card) return false;
    const p = card.price, b = matchPrefs.budget;
    if (b === 'u40'    && p >= 40000) return false;
    if (b === '40-70'  && (p < 40000 || p >= 70000)) return false;
    if (b === '70-100' && (p < 70000 || p >= 100000)) return false;
    if (b === '100+'   && p < 100000) return false;
    if (matchPrefs.carType !== 'Any' && card.type !== matchPrefs.carType) return false;
    if (matchPrefs.drive !== 'Any') {
      const dm = { FWD:'front-wheel', RWD:'rear-wheel', AWD:'all-wheel', '4WD':'4-wheel' };
      if (!card.rawDrive.includes(dm[matchPrefs.drive] || matchPrefs.drive.toLowerCase())) return false;
    }
    if (matchPrefs.fuel !== 'Any') {
      const rf = card.rawFuel;
      if (matchPrefs.fuel === 'Gas'      && (!rf.includes('gasoline') || rf.includes('hybrid') || rf.includes('electric'))) return false;
      if (matchPrefs.fuel === 'Hybrid'   && !rf.includes('hybrid'))    return false;
      if (matchPrefs.fuel === 'Electric' && !rf.includes('electric'))  return false;
      if (matchPrefs.fuel === 'Diesel'   && !rf.includes('diesel'))    return false;
    }
    if (matchPrefs.trans !== 'Any') {
      if (!card.rawTrans.includes(matchPrefs.trans.toLowerCase())) return false;
    }
    return true;
  });
}

/* ── Match / Car Discover ── */
const newCars = [
  { id:1, year:2025, make:"Toyota", model:"GR86 Premium", type:"Sports", brand:"Japanese",
    price:29295, power:"228 HP", accel:"6.1s", economy:"21/32 MPG",
    desc:"Pure rear-wheel-drive sports car. Flat-six buzz, track-tuned suspension, zero fat.",
    tags:["RWD","6-Speed Manual","Torsen LSD"],
    bg:"radial-gradient(ellipse at 40% 30%, #2a1a06 0%, #0f0803 100%)" },
  { id:2, year:2025, make:"Subaru", model:"BRZ Limited", type:"Sports", brand:"Japanese",
    price:31095, power:"228 HP", accel:"6.1s", economy:"21/32 MPG",
    desc:"Co-developed with Toyota. Perfectly balanced lightweight coupe with Brembo brakes.",
    tags:["RWD","6-Speed Manual","Brembo Brakes"],
    bg:"radial-gradient(ellipse at 60% 40%, #061520 0%, #020a10 100%)" },
  { id:3, year:2025, make:"Mazda", model:"MX-5 Miata RF", type:"Sports", brand:"Japanese",
    price:37125, power:"181 HP", accel:"5.9s", economy:"26/34 MPG",
    desc:"The purest driving machine. Retractable fastback roof, perfect 50/50 weight balance.",
    tags:["RWD","6-Speed Manual","50/50 Balance"],
    bg:"radial-gradient(ellipse at 50% 40%, #1a1206 0%, #0a0803 100%)" },
  { id:4, year:2025, make:"Ford", model:"Mustang GT", type:"Sports", brand:"American",
    price:38690, power:"480 HP", accel:"4.2s", economy:"15/24 MPG",
    desc:"The legend reborn. All-new platform with 5.0L Coyote V8 fury and MagneRide.",
    tags:["RWD","5.0L V8","MagneRide"],
    bg:"radial-gradient(ellipse at 50% 30%, #200606 0%, #0f0202 100%)" },
  { id:5, year:2025, make:"Honda", model:"Civic Type R", type:"Sports", brand:"Japanese",
    price:44990, power:"315 HP", accel:"5.0s", economy:"22/28 MPG",
    desc:"Best FWD car ever made. Nürburgring-proven, three-mode adaptive dampers.",
    tags:["FWD","6-Speed Manual","Adaptive Dampers"],
    bg:"radial-gradient(ellipse at 40% 35%, #200808 0%, #0f0404 100%)" },
  { id:6, year:2025, make:"Subaru", model:"WRX TR", type:"Sedan", brand:"Japanese",
    price:42695, power:"271 HP", accel:"5.5s", economy:"19/26 MPG",
    desc:"Rally heritage meets daily practicality. Symmetrical AWD, flat-four rumble.",
    tags:["Symmetrical AWD","6-Speed Manual","STI Suspension"],
    bg:"radial-gradient(ellipse at 50% 35%, #0a1020 0%, #040810 100%)" },
  { id:7, year:2025, make:"VW", model:"Golf R", type:"Sedan", brand:"German",
    price:45595, power:"315 HP", accel:"4.7s", economy:"20/29 MPG",
    desc:"The ultimate sleeper. R-Performance torque vectoring AWD. Subtlety is the point.",
    tags:["4Motion AWD","DSG","R Performance"],
    bg:"radial-gradient(ellipse at 45% 35%, #101520 0%, #08101a 100%)" },
  { id:8, year:2025, make:"Dodge", model:"Challenger R/T Scat Pack", type:"Sports", brand:"American",
    price:54290, power:"485 HP", accel:"4.0s", economy:"15/23 MPG",
    desc:"Last of the American V8 muscle. 392 HEMI roar, line-lock, launch control.",
    tags:["RWD","6.4L HEMI V8","Line Lock"],
    bg:"radial-gradient(ellipse at 45% 30%, #1a1005 0%, #0f0803 100%)" },
  { id:9, year:2025, make:"BMW", model:"M2", type:"Sports", brand:"German",
    price:65900, power:"453 HP", accel:"4.1s", economy:"16/23 MPG",
    desc:"The last pure BMW M car. Rear-wheel-drive manual. No nonsense, all thrill.",
    tags:["RWD","6-Speed Manual","M Traction Control"],
    bg:"radial-gradient(ellipse at 40% 35%, #0d1525 0%, #060a0f 100%)" },
  { id:10, year:2025, make:"Audi", model:"RS3 Sedan", type:"Sedan", brand:"German",
    price:60495, power:"401 HP", accel:"3.8s", economy:"19/28 MPG",
    desc:"Five-cylinder fury. Torque vectoring RS Quattro AWD with drift mode.",
    tags:["RS Quattro AWD","5-Cyl Turbo","Drift Mode"],
    bg:"radial-gradient(ellipse at 50% 35%, #100f0a 0%, #090808 100%)" },
  { id:11, year:2025, make:"Tesla", model:"Model 3 Performance", type:"EV", brand:"American",
    price:50990, power:"510 HP", accel:"2.9s", economy:"315mi Range",
    desc:"0-60 under 3 seconds. Track Mode, Brembo brakes, carbon fiber aero. Silent devastation.",
    tags:["AWD","315mi Range","Track Mode"],
    bg:"radial-gradient(ellipse at 50% 35%, #041a10 0%, #020c08 100%)" },
  { id:12, year:2025, make:"Porsche", model:"Cayman S", type:"Sports", brand:"German",
    price:75300, power:"375 HP", accel:"4.0s", economy:"19/26 MPG",
    desc:"Mid-engine balance, flat-six sound. The sports car driver's sports car.",
    tags:["RWD","PDK or 6MT","PASM"],
    bg:"radial-gradient(ellipse at 45% 30%, #181510 0%, #0c0b08 100%)" },
  { id:13, year:2025, make:"BMW", model:"X3 M Competition", type:"SUV", brand:"German",
    price:78900, power:"503 HP", accel:"3.9s", economy:"15/20 MPG",
    desc:"M power in SUV form. Same S58 engine as the M3, wrapped in commanding presence.",
    tags:["xDrive AWD","S58 Twin-Turbo","Adaptive M Susp"],
    bg:"radial-gradient(ellipse at 40% 30%, #0d1525 0%, #060a0f 100%)" },
  { id:14, year:2025, make:"Ford", model:"F-150 Raptor", type:"Truck", brand:"American",
    price:72545, power:"450 HP", accel:"5.5s", economy:"15/18 MPG",
    desc:"The off-road performance truck. FOX Live Valve suspension, 37-inch tires standard.",
    tags:["4WD","FOX Suspension","37-in Tires"],
    bg:"radial-gradient(ellipse at 50% 30%, #1a1006 0%, #0a0803 100%)" },
  { id:15, year:2025, make:"BMW", model:"M4 Competition", type:"Sports", brand:"German",
    price:82900, power:"503 HP", accel:"3.7s", economy:"16/23 MPG",
    desc:"Four-door performance without compromise. S58 inline-six to 7,200 RPM.",
    tags:["xDrive AWD","Carbon Exterior Pkg","Laser Lights"],
    bg:"radial-gradient(ellipse at 40% 30%, #0d1525 0%, #060a0f 100%)" },
  { id:16, year:2025, make:"BMW", model:"M3 Competition", type:"Sedan", brand:"German",
    price:87900, power:"503 HP", accel:"3.8s", economy:"17/25 MPG",
    desc:"The benchmark sports sedan. Hand-built S58 screams to 7,200 RPM. Legendary.",
    tags:["xDrive AWD","Carbon Roof","M Bucket Seats"],
    bg:"radial-gradient(ellipse at 40% 30%, #0d2240 0%, #07101a 100%)" },
  { id:17, year:2025, make:"Alfa Romeo", model:"Giulia Quadrifoglio", type:"Sedan", brand:"Italian",
    price:83195, power:"505 HP", accel:"3.8s", economy:"17/24 MPG",
    desc:"Ferrari-derived V6, Italian passion in four doors. Nothing else sounds like it.",
    tags:["RWD","Ferrari-derived V6","Carbon Driveshaft"],
    bg:"radial-gradient(ellipse at 50% 30%, #200808 0%, #0f0404 100%)" },
  { id:18, year:2025, make:"Tesla", model:"Model S Plaid", type:"EV", brand:"American",
    price:89990, power:"1,020 HP", accel:"1.99s", economy:"396mi Range",
    desc:"Quickest accelerating production car ever. Tri-motor madness. Yoke steering.",
    tags:["AWD","396mi Range","Tri-Motor"],
    bg:"radial-gradient(ellipse at 50% 30%, #041510 0%, #020a08 100%)" },
  { id:19, year:2025, make:"Porsche", model:"911 Carrera S", type:"Sports", brand:"German",
    price:122900, power:"473 HP", accel:"3.4s", economy:"18/24 MPG",
    desc:"Rear-engine, rear-drive perfection. 60 years of engineering excellence distilled.",
    tags:["RWD","PDK","PASM Sport Chrono"],
    bg:"radial-gradient(ellipse at 45% 30%, #181510 0%, #0c0b08 100%)" },
  { id:20, year:2025, make:"Ferrari", model:"Roma", type:"Sports", brand:"Italian",
    price:230000, power:"620 HP", accel:"3.4s", economy:"15/21 MPG",
    desc:"La Dolce Vita in motion. Front-mid V8 twin-turbo, the most beautiful Ferrari in years.",
    tags:["RWD","3.9L Twin-Turbo V8","E-Diff"],
    bg:"radial-gradient(ellipse at 50% 30%, #1a0505 0%, #0f0303 100%)" },
  { id:21, year:2025, make:"Lamborghini", model:"Huracán EVO", type:"Sports", brand:"Italian",
    price:261274, power:"631 HP", accel:"2.9s", economy:"13/18 MPG",
    desc:"Naturally aspirated V10 — the last of its kind. Pure, raw, unforgettable.",
    tags:["AWD","5.2L V10 NA","LDVI System"],
    bg:"radial-gradient(ellipse at 50% 30%, #1a1505 0%, #0f0c02 100%)" }
];

let matchPrefs = { budget: 'any', carType: 'Any', brand: 'Any', drive: 'Any', fuel: 'Any', trans: 'Any', mustHave: [] };
let swipeQueue = [];
let swipeIndex = 0;
let isDragging = false;
let dragStartX = 0;
let dragCurrentX = 0;
let likedCars = (() => {
  try { return JSON.parse(localStorage.getItem('revmatch_liked') || '[]'); } catch(e) { return []; }
})();

function saveLikedCars() {
  try { localStorage.setItem('revmatch_liked', JSON.stringify(likedCars)); } catch(e) {}
}

function openMatch() { document.getElementById('matchScreen').classList.add('open'); }
function closeMatch() {
  document.getElementById('matchScreen').classList.remove('open');
  setTimeout(() => {
    document.getElementById('matchDeck').style.display = 'none';
    document.getElementById('matchPref').style.display = 'flex';
  }, 320);
}
function backToPrefs() {
  document.getElementById('matchDeck').style.display = 'none';
  document.getElementById('matchPref').style.display = 'flex';
}

function selectMatchPref(key, val, el, chipsId) {
  document.querySelectorAll('#' + chipsId + ' .type-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  matchPrefs[key] = val;
  updateMatchCount();
}

function toggleMustHave(tag, el) {
  el.classList.toggle('selected');
  const idx = matchPrefs.mustHave.indexOf(tag);
  if (idx === -1) matchPrefs.mustHave.push(tag);
  else matchPrefs.mustHave.splice(idx, 1);
  updateMatchCount();
}

function updateMatchCount() {
  let n = 520;
  if (matchPrefs.budget !== 'any')  n = Math.round(n * 0.38);
  if (matchPrefs.carType !== 'Any') n = Math.round(n * 0.44);
  if (matchPrefs.brand   !== 'Any') n = Math.round(n * 0.52);
  if (matchPrefs.drive   !== 'Any') n = Math.round(n * 0.60);
  if (matchPrefs.fuel    !== 'Any') n = Math.round(n * 0.50);
  if (matchPrefs.trans   !== 'Any') n = Math.round(n * 0.68);
  n = Math.max(4, n - matchPrefs.mustHave.length * 14);
  const el = document.getElementById('matchCountNum');
  if (el) el.textContent = n >= 100 ? Math.round(n / 10) * 10 + '+' : n;
}

function filterCars() {
  return newCars.filter(car => {
    const p = car.price;
    const b = matchPrefs.budget;
    if (b === 'u40'  && p >= 40000) return false;
    if (b === '40-70' && (p < 40000 || p >= 70000)) return false;
    if (b === '70-100' && (p < 70000 || p >= 100000)) return false;
    if (b === '100+' && p < 100000) return false;
    if (matchPrefs.carType !== 'Any' && car.type !== matchPrefs.carType) return false;
    if (matchPrefs.brand !== 'Any' && car.brand !== matchPrefs.brand) return false;
    return true;
  });
}

async function startSwiping() {
  document.getElementById('matchPref').style.display = 'none';
  const deck = document.getElementById('matchDeck');
  deck.style.display = 'flex';
  document.getElementById('swipeActions').style.display = 'none';
  document.getElementById('swipeDeck').innerHTML =
    `<div class="swipe-loading"><div class="swipe-spinner"></div><p>Finding your matches…</p></div>`;
  document.getElementById('swipeCounter').textContent = 'Loading…';

  let cars = [];
  try { cars = await loadCarsFromEPA(); } catch(e) {}
  if (!cars.length) cars = filterCars();
  if (!cars.length) { showToast("No matches — try broader preferences"); backToPrefs(); return; }

  swipeQueue = [...cars].sort(() => Math.random() - 0.5);
  swipeIndex = 0;
  document.getElementById('swipeActions').style.display = 'flex';
  renderSwipeDeck();
}

function renderSwipeDeck() {
  const deck = document.getElementById('swipeDeck');
  const remaining = swipeQueue.length - swipeIndex;

  if (swipeIndex >= swipeQueue.length) {
    deck.innerHTML = `<div class="swipe-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      <div class="swipe-empty-title">That's all of them</div>
      <div class="swipe-empty-sub">You saved ${likedCars.length} car${likedCars.length !== 1 ? 's' : ''}. Change preferences to see more.</div>
      <button class="match-go-btn" style="margin-top:20px;" onclick="backToPrefs()">Change Preferences</button>
    </div>`;
    document.getElementById('swipeActions').style.display = 'none';
    document.getElementById('swipeCounter').textContent = '';
    return;
  }

  document.getElementById('swipeCounter').textContent = remaining + ' left';
  const car = swipeQueue[swipeIndex];
  const next = swipeQueue[swipeIndex + 1];

  const cachedImg = cardImageCache[`${car.make}|${car.model}`];
  preloadCardImages(swipeIndex);

  deck.innerHTML = (next ? `<div class="swipe-card-next" style="background:${next.bg};"></div>` : '') +
    `<div class="swipe-card" id="activeCard">
      <div class="swipe-card-img" style="background:${car.bg};">
        ${cachedImg ? `<img class="swipe-card-photo" src="${cachedImg}" alt="" onerror="this.remove()">` : ''}
        <div class="swipe-card-img-overlay"></div>
        <div class="swipe-like-label">LIKE</div>
        <div class="swipe-pass-label">PASS</div>
        <div class="swipe-card-badge">${car.type}</div>
        <div class="swipe-card-origin">${car.brand}</div>
      </div>
      <div class="swipe-card-info">
        <div>
          <div class="swipe-card-price">$${car.price.toLocaleString()}</div>
          <div class="swipe-card-name">${car.year} ${car.make} ${car.model}</div>
        </div>
        <div class="swipe-card-stats">
          <div class="swipe-stat"><div class="swipe-stat-val">${car.power}</div><div class="swipe-stat-lbl">Power</div></div>
          <div class="swipe-stat"><div class="swipe-stat-val">${car.accel}</div><div class="swipe-stat-lbl">0-60</div></div>
          <div class="swipe-stat"><div class="swipe-stat-val">${car.economy}</div><div class="swipe-stat-lbl">Economy</div></div>
        </div>
        <div class="swipe-card-specs">${car.tags.map(t => `<span class="spec">${t}</span>`).join('')}</div>
        <div class="swipe-card-desc" onclick="this.classList.toggle('expanded')">${car.desc} <span class="desc-more">more</span></div>
      </div>
    </div>`;

  attachSwipeListeners();
}

function attachSwipeListeners() {
  const card = document.getElementById('activeCard');
  if (!card) return;
  card.addEventListener('mousedown', onDragStart);
  card.addEventListener('touchstart', onDragStart, { passive: true });
}

function onDragStart(e) {
  isDragging = true;
  dragStartX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  const card = document.getElementById('activeCard');
  if (card) { card.style.transition = 'none'; }
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('touchmove', onDragMove, { passive: true });
  document.addEventListener('mouseup', onDragEnd, { once: true });
  document.addEventListener('touchend', onDragEnd, { once: true });
}

function onDragMove(e) {
  if (!isDragging) return;
  const card = document.getElementById('activeCard');
  if (!card) return;
  dragCurrentX = (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX) - dragStartX;
  card.style.transform = `translateX(${dragCurrentX}px) rotate(${dragCurrentX * 0.055}deg)`;
  const like = card.querySelector('.swipe-like-label');
  const pass = card.querySelector('.swipe-pass-label');
  if (dragCurrentX > 20) {
    like.style.opacity = Math.min(1, (dragCurrentX - 20) / 60);
    pass.style.opacity = 0;
  } else if (dragCurrentX < -20) {
    pass.style.opacity = Math.min(1, (-dragCurrentX - 20) / 60);
    like.style.opacity = 0;
  } else {
    like.style.opacity = 0;
    pass.style.opacity = 0;
  }
}

function onDragEnd() {
  document.removeEventListener('mousemove', onDragMove);
  document.removeEventListener('touchmove', onDragMove);
  if (!isDragging) return;
  isDragging = false;
  if (dragCurrentX > 90) { animateCardOut('right'); }
  else if (dragCurrentX < -90) { animateCardOut('left'); }
  else {
    const card = document.getElementById('activeCard');
    if (card) {
      card.style.transition = 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)';
      card.style.transform = '';
      card.querySelector('.swipe-like-label').style.opacity = 0;
      card.querySelector('.swipe-pass-label').style.opacity = 0;
    }
  }
  dragCurrentX = 0;
}

function animateCardOut(direction) {
  const card = document.getElementById('activeCard');
  if (!card) return;
  const x = direction === 'right' ? 520 : -520;
  const r = direction === 'right' ? 28 : -28;
  card.style.transition = 'transform 0.36s ease-out, opacity 0.36s';
  card.style.transform = `translateX(${x}px) rotate(${r}deg)`;
  card.style.opacity = '0';
  if (direction === 'right') {
    const saved = swipeQueue[swipeIndex];
    likedCars.push(saved);
    saveLikedCars();
    setTimeout(() => showToast(`${saved.make} ${saved.model} saved!`), 80);
  }
  setTimeout(() => { swipeIndex++; renderSwipeDeck(); }, 360);
}

function swipeLeft()  { if (swipeIndex < swipeQueue.length) animateCardOut('left'); }
function swipeRight() { if (swipeIndex < swipeQueue.length) animateCardOut('right'); }

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
updateDMBadge();

setTimeout(() => {
  const s = document.getElementById('splash');
  if (s) s.remove();
  const ls = document.getElementById('loginScreen');
  if (ls) ls.classList.add('visible');
}, 2600);
