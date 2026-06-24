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
    isCruise: true, from: "Riverdale, NJ", to: "Highland Lakes, NJ",
    fromCoords: { lat: 41.0143, lng: -74.3021 },
    toCoords: { lat: 41.1584, lng: -74.4523 },
    vibe: "Spirited", allowedCars: ["All Welcome"],
    copRadarRequired: true,
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
  const hasMap   = !!(m.fromCoords && m.toCoords);
  return `<div class="meet cruise-meet ${m.mine ? 'mine' : ''}">
    ${hasMap
      ? `<div class="cruise-card-map" id="cmap-${i}" data-idx="${i}"></div>`
      : `<div class="cruise-banner">
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
        </div>`
    }
    <div class="meet-info">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div class="meet-name" style="flex:1;">${m.name}</div>
        ${m.copRadarRequired ? `<span class="cruise-radar-req-badge">🚔 RADAR</span>` : ''}
      </div>
      ${hasMap ? `<div class="cruise-route-inline"><span class="cruise-city-sm">${fromCity}</span><span class="cruise-arrow-sm">→</span><span class="cruise-city-sm">${toCity}</span><span class="cruise-vibe-pill" style="margin-left:auto;">${m.vibe||'Casual'}</span></div>` : ''}
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
      <button class="rsvp-btn ${m.rsvped ? 'going' : ''}" onclick="rsvpCruise(${i})">${m.rsvped ? "You're in" : "RSVP"}</button>
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
  const copBanner = document.getElementById('copRadarBanner');
  if (copBanner) copBanner.style.display = seg === 'cruises' ? 'flex' : 'none';
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

  cruiseCardMapInstances.clear();
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
  if (meetsSeg === 'cruises') setTimeout(initCruiseCardMaps, 60);
}

/* ── Cruise card maps ── */
const cruiseCardMapInstances = new Map();

function initCruiseCardMaps() {
  document.querySelectorAll('.cruise-card-map[data-idx]').forEach(div => {
    const key = div.id;
    if (cruiseCardMapInstances.has(key)) return;
    const idx = parseInt(div.dataset.idx);
    const m = meets[idx];
    if (!m?.fromCoords || !m?.toCoords) return;
    const map = L.map(div, {
      zoomControl: false, attributionControl: false,
      scrollWheelZoom: false, dragging: true, touchZoom: true
    }).fitBounds(
      [[m.fromCoords.lat, m.fromCoords.lng],[m.toCoords.lat, m.toCoords.lng]],
      { padding: [24, 24] }
    );
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(map);
    L.marker([m.fromCoords.lat, m.fromCoords.lng], { icon: fromIcon }).addTo(map);
    L.marker([m.toCoords.lat,   m.toCoords.lng  ], { icon: toIcon   }).addTo(map);
    fetch(`https://router.project-osrm.org/route/v1/driving/${m.fromCoords.lng},${m.fromCoords.lat};${m.toCoords.lng},${m.toCoords.lat}?geometries=geojson&overview=full`)
      .then(r => r.json())
      .then(data => {
        if (data.code === 'Ok' && data.routes?.length) {
          L.geoJSON(data.routes[0].geometry, {
            style: { color: '#e8ff3d', weight: 3, opacity: 0.85, dashArray: '8 5' }
          }).addTo(map);
        }
      }).catch(() => {});
    cruiseCardMapInstances.set(key, map);
  });
}

/* ── RSVP + cop radar gate ── */
let pendingRsvpIdx = null;

function rsvpCruise(i) {
  const m = meets[i];
  if (m.copRadarRequired && !m.rsvped) {
    pendingRsvpIdx = i;
    document.getElementById('rsvpGateOverlay').style.display = 'block';
    document.getElementById('rsvpGateSheet').classList.add('open');
  } else {
    toggleRsvp(i);
  }
}
function closeRsvpGate() {
  document.getElementById('rsvpGateOverlay').style.display = 'none';
  document.getElementById('rsvpGateSheet').classList.remove('open');
  pendingRsvpIdx = null;
}
function openCopFromGate() {
  document.getElementById('rsvpGateSheet').classList.remove('open');
  document.getElementById('rsvpGateOverlay').style.display = 'none';
  openCopRadar();
}
function confirmRsvpGate() {
  const i = pendingRsvpIdx;
  closeRsvpGate();
  if (i !== null) toggleRsvp(i);
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
  const tog = document.getElementById('copRadarToggle'); if (tog) tog.checked = false;
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
    fromCoords: cruiseFromData ? { lat: cruiseFromData.lat, lng: cruiseFromData.lng } : null,
    toCoords:   cruiseToData   ? { lat: cruiseToData.lat,   lng: cruiseToData.lng   } : null,
    vibe:      cruiseVibe,
    allowedCars: [...cruiseAllowedCars],
    copRadarRequired: document.getElementById('copRadarToggle').checked,
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

/* ── Cop Radar ── */
const _N3 = Date.now();
const COP_REPORT_SEED = [
  { id:'cp1', type:'Speed Trap',  icon:'📷', note:'GSP on-ramp near Exit 151', reporter:'MK', ts: _N3-18*60000, active:true },
  { id:'cp2', type:'Patrol Car',  icon:'🚔', note:'Route 46 W near Totowa',    reporter:'AL', ts: _N3-34*60000, active:true },
  { id:'cp3', type:'Unmarked',    icon:'🚗', note:'I-80 E, past the rest stop', reporter:'SP', ts: _N3-62*60000, active:false },
];
const COP_EXPIRY_MS = 90 * 60 * 1000;

function loadCopReports() {
  try {
    const s = localStorage.getItem('revmatch_cop');
    return s ? JSON.parse(s) : JSON.parse(JSON.stringify(COP_REPORT_SEED));
  } catch(e) { return JSON.parse(JSON.stringify(COP_REPORT_SEED)); }
}
function saveCopReports() {
  try { localStorage.setItem('revmatch_cop', JSON.stringify(copReports)); } catch(e) {}
}

let copReports = loadCopReports();
let selectedCopType = '';

function openCopRadar() {
  renderCopReports();
  document.getElementById('copRadarScreen').classList.add('open');
}
function closeCopRadar() {
  document.getElementById('copRadarScreen').classList.remove('open');
  closeCopReport();
}

function fmtCopAge(ts) {
  const m = Math.floor((Date.now() - ts) / 60000);
  if (m < 1) return 'Just now';
  if (m < 60) return m + 'm ago';
  return Math.floor(m / 60) + 'h ago';
}

function renderCopReports() {
  const body = document.getElementById('copRadarBody');
  const now = Date.now();
  const active = copReports.filter(r => (now - r.ts) < COP_EXPIRY_MS);
  const sub = document.getElementById('copBannerSub');
  if (sub) sub.textContent = active.length ? `${active.length} active report${active.length > 1 ? 's' : ''} near you` : 'No reports — all clear';
  if (!active.length) {
    body.innerHTML = `<div class="cop-clear-state">
      <div class="cop-clear-icon">✅</div>
      <div class="cop-clear-title">All Clear</div>
      <div class="cop-clear-sub">No reports in your area. Tap + Report if you spot something.</div>
    </div>`;
    return;
  }
  body.innerHTML = active.map(r => {
    const age = now - r.ts;
    const fresh = age < 20 * 60000;
    return `<div class="cop-report-card ${fresh ? 'cop-report-fresh' : ''}">
      <div class="cop-report-icon">${r.icon}</div>
      <div class="cop-report-info">
        <div class="cop-report-type">${r.type} ${fresh ? '<span class="cop-fresh-badge">LIVE</span>' : ''}</div>
        ${r.note ? `<div class="cop-report-note">${r.note}</div>` : ''}
        <div class="cop-report-meta">Reported by ${r.reporter} · ${fmtCopAge(r.ts)}</div>
      </div>
      <div class="cop-report-age-bar">
        <div class="cop-report-age-fill" style="width:${Math.max(4, 100 - (age / COP_EXPIRY_MS * 100))}%"></div>
      </div>
    </div>`;
  }).join('');
}

function openCopReport() {
  selectedCopType = '';
  document.querySelectorAll('.cop-type-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('copNoteInput').value = '';
  document.getElementById('copSubmitBtn').disabled = true;
  document.getElementById('copSheetOverlay').style.display = 'block';
  document.getElementById('copSheet').classList.add('open');
}
function closeCopReport() {
  document.getElementById('copSheetOverlay').style.display = 'none';
  document.getElementById('copSheet').classList.remove('open');
}
function selectCopType(type, el) {
  selectedCopType = type;
  document.querySelectorAll('.cop-type-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('copSubmitBtn').disabled = false;
}
function submitCopReport() {
  if (!selectedCopType) return;
  const icons = { 'Speed Trap':'📷', 'Patrol Car':'🚔', 'Unmarked':'🚗', 'Checkpoint':'🚧' };
  copReports.unshift({
    id: 'cp' + Date.now(),
    type: selectedCopType,
    icon: icons[selectedCopType] || '🚔',
    note: document.getElementById('copNoteInput').value.trim(),
    reporter: 'You',
    ts: Date.now(),
    active: true,
  });
  saveCopReports();
  closeCopReport();
  renderCopReports();
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

/* ── Theme ── */
(function applyTheme() {
  const saved = localStorage.getItem('revmatch_theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
  document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon(saved === 'light');
  });
})();

function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('revmatch_theme', 'dark');
    updateThemeIcon(false);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('revmatch_theme', 'light');
    updateThemeIcon(true);
  }
}

function updateThemeIcon(isLight) {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;
  btn.querySelector('.theme-icon-moon').style.display = isLight ? 'none' : '';
  btn.querySelector('.theme-icon-sun').style.display  = isLight ? '' : 'none';
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
let dragStartX = 0, dragStartY = 0;
let dragCurrentX = 0, dragCurrentY = 0;
let likedCars = (() => {
  try { return JSON.parse(localStorage.getItem('revmatch_liked') || '[]'); } catch(e) { return []; }
})();
let superLikedCars = (() => {
  try { return JSON.parse(localStorage.getItem('revmatch_superlikes') || '[]'); } catch(e) { return []; }
})();
function saveSuperLikes() {
  try { localStorage.setItem('revmatch_superlikes', JSON.stringify(superLikedCars)); } catch(e) {}
}

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

function calcMatchScore(car) {
  let score = 64;
  const b = matchPrefs.budget;
  if (b === 'any') {
    score += 10;
  } else {
    const ranges = { u40:[0,40000], '40-70':[40000,70000], '70-100':[70000,100000], '100+':[100000,250000] };
    const [lo, hi] = ranges[b] || [0,999999];
    const mid = (lo + hi) / 2, half = (hi - lo) / 2;
    score += Math.round((1 - Math.min(1, Math.abs(car.price - mid) / half)) * 12);
  }
  if (matchPrefs.carType === 'Any') score += 7;
  else score += car.type === matchPrefs.carType ? 11 : 3;
  if (matchPrefs.brand === 'Any') score += 6;
  else score += car.brand === matchPrefs.brand ? 9 : 2;
  const mh = matchPrefs.mustHave;
  if (!mh.length) { score += 6; }
  else {
    const tags = car.tags.map(t => t.toLowerCase());
    const hits = mh.filter(m => tags.some(t => t.includes(m.toLowerCase())));
    score += Math.round((hits.length / mh.length) * 6);
  }
  score += Math.floor(Math.random() * 4);
  return Math.min(99, Math.max(72, score));
}

function showMatchCelebrate(car, isSuper) {
  const el = document.getElementById('matchCelebrate');
  document.getElementById('mcIcon').textContent = isSuper ? '⭐' : '💛';
  document.getElementById('mcLabel').textContent = isSuper ? 'SUPER LIKE' : 'SAVED';
  document.getElementById('mcName').textContent = `${car.year} ${car.make} ${car.model}`;
  document.getElementById('mcSub').textContent = isSuper ? 'Top of your wishlist' : 'Added to wishlist';
  const colors = ['#e8ff3d','#ffffff','#c8e800','#ffdd00','#b8ff00'];
  document.getElementById('mcParticles').innerHTML = Array.from({length: 22}, (_, i) => {
    const angle = (i / 22) * 360 + Math.random() * 16;
    const dist = 70 + Math.random() * 90;
    const tx = (Math.cos(angle * Math.PI / 180) * dist).toFixed(1);
    const ty = (Math.sin(angle * Math.PI / 180) * dist).toFixed(1);
    const size = 5 + Math.floor(Math.random() * 7);
    const delay = Math.floor(Math.random() * 80);
    const shape = Math.random() > 0.5 ? '50%' : '3px';
    return `<div class="mc-particle" style="background:${colors[i%colors.length]};width:${size}px;height:${size}px;border-radius:${shape};--tx:${tx}px;--ty:${ty}px;--delay:${delay}ms"></div>`;
  }).join('');
  el.style.display = 'flex';
  setTimeout(() => { el.style.display = 'none'; }, 1500);
}

function renderSwipeDeck() {
  const deck = document.getElementById('swipeDeck');
  const remaining = swipeQueue.length - swipeIndex;

  if (swipeIndex >= swipeQueue.length) {
    const total = likedCars.length;
    const supers = superLikedCars.length;
    deck.innerHTML = `<div class="swipe-empty">
      <div class="swipe-empty-icon">🏁</div>
      <div class="swipe-empty-title">All caught up</div>
      <div class="swipe-empty-sub">You saved <strong>${total}</strong> car${total !== 1 ? 's' : ''}${supers ? ` · <strong>${supers}</strong> super liked` : ''}.</div>
      <button class="match-go-btn" style="margin-top:24px;" onclick="backToPrefs()">Change Preferences</button>
    </div>`;
    document.getElementById('swipeActions').style.display = 'none';
    document.getElementById('swipeCounter').textContent = '';
    return;
  }

  document.getElementById('swipeCounter').textContent = remaining + ' left';
  const car  = swipeQueue[swipeIndex];
  const n1   = swipeQueue[swipeIndex + 1];
  const n2   = swipeQueue[swipeIndex + 2];
  const score = calcMatchScore(car);
  const circ  = 119.4;
  const dash  = ((score / 100) * circ).toFixed(1);
  const ringColor = score >= 92 ? '#e8ff3d' : score >= 80 ? '#7dde92' : '#5ba8e0';
  const driveTag  = car.tags[0] || '';
  const cachedImg = cardImageCache[`${car.make}|${car.model}`];
  preloadCardImages(swipeIndex);

  deck.innerHTML =
    (n2 ? `<div class="swipe-stack swipe-s2" style="background:${n2.bg}"></div>` : '') +
    (n1 ? `<div class="swipe-stack swipe-s1" style="background:${n1.bg}"></div>` : '') +
    `<div class="swipe-card" id="activeCard">
      <div class="swipe-hero" style="background:${car.bg};">
        ${cachedImg ? `<img class="swipe-hero-img" src="${cachedImg}" alt="" onerror="this.remove()">` : ''}
        <div class="swipe-hero-grad"></div>

        <div class="swipe-lbl swipe-lbl-like">LIKE</div>
        <div class="swipe-lbl swipe-lbl-pass">PASS</div>
        <div class="swipe-lbl swipe-lbl-super">⭐ SUPER</div>

        <div class="swipe-ring-wrap">
          <svg viewBox="0 0 48 48" class="swipe-ring-svg">
            <circle cx="24" cy="24" r="19" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="3.5"/>
            <circle cx="24" cy="24" r="19" fill="none" stroke="${ringColor}"
              stroke-width="3.5" stroke-dasharray="${dash} ${circ}" stroke-linecap="round"
              transform="rotate(-90 24 24)"/>
          </svg>
          <div class="swipe-ring-inner">
            <span class="swipe-ring-num">${score}</span><span class="swipe-ring-pct">%</span>
          </div>
        </div>

        <div class="swipe-hero-type">${car.type}</div>

        <div class="swipe-hero-foot">
          <div class="swipe-hero-origin">${car.brand}</div>
          <div class="swipe-hero-name">${car.year} ${car.make} ${car.model}</div>
          <div class="swipe-hero-price">$${car.price.toLocaleString()}</div>
        </div>
      </div>

      <div class="swipe-stat-row">
        <div class="swipe-sc"><div class="swipe-sc-v">${car.power}</div><div class="swipe-sc-k">POWER</div></div>
        <div class="swipe-sc-sep"></div>
        <div class="swipe-sc"><div class="swipe-sc-v">${car.accel}</div><div class="swipe-sc-k">0–60</div></div>
        <div class="swipe-sc-sep"></div>
        <div class="swipe-sc"><div class="swipe-sc-v">${car.economy}</div><div class="swipe-sc-k">ECON</div></div>
        <div class="swipe-sc-sep"></div>
        <div class="swipe-sc"><div class="swipe-sc-v">${driveTag || '—'}</div><div class="swipe-sc-k">DRIVE</div></div>
      </div>

      <div class="swipe-tag-row">
        ${car.tags.slice(1, 6).map(t => `<span class="swipe-tag-pill">${t}</span>`).join('')}
        ${car.desc ? `<span class="swipe-tag-pill swipe-tag-desc" title="${car.desc}">More info</span>` : ''}
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
  const pt = e.type === 'touchstart' ? e.touches[0] : e;
  dragStartX = pt.clientX;
  dragStartY = pt.clientY;
  const card = document.getElementById('activeCard');
  if (card) card.style.transition = 'none';
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('touchmove', onDragMove, { passive: true });
  document.addEventListener('mouseup', onDragEnd, { once: true });
  document.addEventListener('touchend', onDragEnd, { once: true });
}

function onDragMove(e) {
  if (!isDragging) return;
  const card = document.getElementById('activeCard');
  if (!card) return;
  const pt = e.type === 'touchmove' ? e.touches[0] : e;
  dragCurrentX = pt.clientX - dragStartX;
  dragCurrentY = pt.clientY - dragStartY;
  const likeEl  = card.querySelector('.swipe-lbl-like');
  const passEl  = card.querySelector('.swipe-lbl-pass');
  const superEl = card.querySelector('.swipe-lbl-super');

  const goingUp = dragCurrentY < -24 && Math.abs(dragCurrentY) > Math.abs(dragCurrentX) * 1.4;
  if (goingUp) {
    card.style.transform = `translateY(${dragCurrentY}px) scale(${Math.min(1.04, 1 - dragCurrentY / 3000)})`;
    if (superEl) superEl.style.opacity = Math.min(1, (-dragCurrentY - 24) / 60);
    if (likeEl)  likeEl.style.opacity  = 0;
    if (passEl)  passEl.style.opacity  = 0;
  } else {
    card.style.transform = `translateX(${dragCurrentX}px) rotate(${dragCurrentX * 0.05}deg)`;
    if (superEl) superEl.style.opacity = 0;
    if (dragCurrentX > 20) {
      if (likeEl) likeEl.style.opacity = Math.min(1, (dragCurrentX - 20) / 55);
      if (passEl) passEl.style.opacity = 0;
    } else if (dragCurrentX < -20) {
      if (passEl) passEl.style.opacity = Math.min(1, (-dragCurrentX - 20) / 55);
      if (likeEl) likeEl.style.opacity = 0;
    } else {
      if (likeEl) likeEl.style.opacity = 0;
      if (passEl) passEl.style.opacity = 0;
    }
  }
}

function onDragEnd() {
  document.removeEventListener('mousemove', onDragMove);
  document.removeEventListener('touchmove', onDragMove);
  if (!isDragging) return;
  isDragging = false;
  const goingUp = dragCurrentY < -24 && Math.abs(dragCurrentY) > Math.abs(dragCurrentX) * 1.4;
  if (goingUp && dragCurrentY < -100) {
    animateCardOut('up');
  } else if (dragCurrentX > 90) {
    animateCardOut('right');
  } else if (dragCurrentX < -90) {
    animateCardOut('left');
  } else {
    const card = document.getElementById('activeCard');
    if (card) {
      card.style.transition = 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)';
      card.style.transform = '';
      card.querySelectorAll('.swipe-lbl').forEach(l => l.style.opacity = 0);
    }
  }
  dragCurrentX = 0;
  dragCurrentY = 0;
}

function animateCardOut(direction) {
  const card = document.getElementById('activeCard');
  if (!card) return;
  const saved = swipeQueue[swipeIndex];
  card.style.transition = 'transform 0.34s ease-out, opacity 0.34s';
  if (direction === 'right') {
    card.style.transform = 'translateX(520px) rotate(28deg)';
    card.style.opacity = '0';
    likedCars.push(saved);
    saveLikedCars();
    setTimeout(() => showMatchCelebrate(saved, false), 50);
  } else if (direction === 'left') {
    card.style.transform = 'translateX(-520px) rotate(-28deg)';
    card.style.opacity = '0';
  } else if (direction === 'up') {
    card.style.transform = 'translateY(-560px) scale(0.88)';
    card.style.opacity = '0';
    superLikedCars.push(saved);
    likedCars.push(saved);
    saveSuperLikes();
    saveLikedCars();
    setTimeout(() => showMatchCelebrate(saved, true), 50);
  }
  setTimeout(() => { swipeIndex++; renderSwipeDeck(); }, 360);
}

function swipeLeft()  { if (swipeIndex < swipeQueue.length) animateCardOut('left'); }
function swipeRight() { if (swipeIndex < swipeQueue.length) animateCardOut('right'); }
function swipeSuper() { if (swipeIndex < swipeQueue.length) animateCardOut('up'); }

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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STREET RUSH — First-Person Highway Weave
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    r = Math.min(r, Math.min(w, h) / 2);
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
  };
}

const MG_HI_KEY = 'revmatch_streetrush_hi';
let mgRaf = null, mgCanvas, mgCtx, mgW, mgH;

// Perspective constants — set in openMiniGame based on canvas size
let MG_HRZ, MG_CAM, MG_RDHW, MG_DASH_Y;
const MG_ROAD_HW = 1.0;   // road half-width in world units (-1 to 1)
const MG_MAX_Z   = 270;   // maximum visible depth

const mg = {
  state: 'start',
  playerX: 0, playerVX: 0,            // lateral world position & velocity
  steer: 0,                            // keyboard steer: -1 | 0 | 1
  touchLeft: false, touchRight: false, // touch hold state
  speed: 80,                           // km/h equivalent forward speed
  dist: 0, score: 0,
  lives: 3, invincible: 0, flash: 0,
  frame: 0,
  nitro: 0, nitroActive: false,
  tilt: 0,                             // visual vanishing-point drift
  cars: [],     // { x, z, type, passed, ownSpeed }
  pickups: [],  // { x, z, type }
  particles: [],
  streaks: { near: 0, max: 0 },
  hi: 0,
  scrollZ: 0,  // road dash animation offset
  stars: [],   // static star field, generated once in openMiniGame
};

// Lane x positions in world space: 3 lanes across road (-1 to 1)
function mgLane(l) { return (l - 1) * MG_ROAD_HW * 0.66; }

// Project world (x, z) → screen {x, y, s:scale}
// sy is clamped to the windshield area: MG_HRZ (horizon) to MG_DASH_Y (dashboard top)
function mgProject(worldX, worldZ) {
  if (worldZ < 0.5) return null;
  const vpX = mgW / 2 + mg.tilt * mgW * 0.06;
  const s   = MG_CAM / worldZ;
  const sx  = vpX + (worldX - mg.playerX) * s * MG_RDHW;
  const sy  = MG_HRZ + (MG_DASH_Y - MG_HRZ) / (worldZ / MG_CAM + 1);
  return { x: sx, y: sy, s };
}

function openMiniGame() {
  const scr = document.getElementById('minigameScreen');
  scr.style.display = 'block';
  mgCanvas = document.getElementById('revCanvas');
  mgCtx    = mgCanvas.getContext('2d');
  mgW = scr.clientWidth  || 375;
  mgH = scr.clientHeight || 812;
  mgCanvas.width  = mgW;
  mgCanvas.height = mgH;

  MG_HRZ  = mgH * 0.29;   // horizon y (sky/road split)
  MG_CAM  = 150;           // perspective focal length
  MG_RDHW = mgW * 0.48;   // road half-width in px at distance MG_CAM
  MG_DASH_Y = mgH * 0.64; // top of dashboard (bottom of windshield)

  // Build deterministic star field (never flickers between frames)
  mg.stars = [];
  for (let i = 0; i < 70; i++) {
    const hx = ((i * 2654435761) >>> 0);
    mg.stars.push({
      x: (hx & 0xFFFF) % mgW,
      y: ((hx >> 16) & 0xFFF) % Math.max(1, Math.round(MG_HRZ * 0.90)),
      r: 0.4 + (i % 5) * 0.25,
      b: 0.20 + (i % 8) * 0.08,
      tw: 400 + (i % 11) * 130,  // twinkle period ms
    });
  }

  mg.hi = parseInt(localStorage.getItem(MG_HI_KEY) || '0');
  mgDoReset();

  mgCanvas.addEventListener('touchstart',  mgOnTouchStart,  { passive: false });
  mgCanvas.addEventListener('touchend',    mgOnTouchEnd,    { passive: false });
  mgCanvas.addEventListener('touchcancel', mgOnTouchEnd,    { passive: false });
  mgCanvas.addEventListener('click',       mgOnClick);
  document.addEventListener('keydown', mgOnKey);
  document.addEventListener('keyup',   mgOnKeyUp);

  if (mgRaf) cancelAnimationFrame(mgRaf);
  mgTick();
}

function closeMiniGame() {
  if (mgRaf) { cancelAnimationFrame(mgRaf); mgRaf = null; }
  if (mgCanvas) {
    mgCanvas.removeEventListener('touchstart',  mgOnTouchStart);
    mgCanvas.removeEventListener('touchend',    mgOnTouchEnd);
    mgCanvas.removeEventListener('touchcancel', mgOnTouchEnd);
    mgCanvas.removeEventListener('click',       mgOnClick);
  }
  document.removeEventListener('keydown', mgOnKey);
  document.removeEventListener('keyup',   mgOnKeyUp);
  mg.touchLeft = mg.touchRight = mg.steer = 0;
  document.getElementById('minigameScreen').style.display = 'none';
}

function mgDoReset() {
  mg.state = 'start';
  mg.playerX = 0; mg.playerVX = 0; mg.steer = 0;
  mg.touchLeft = false; mg.touchRight = false;
  mg.speed = 80; mg.dist = 0; mg.score = 0;
  mg.lives = 3; mg.invincible = 0; mg.flash = 0; mg.frame = 0;
  mg.nitro = 0; mg.nitroActive = false; mg.tilt = 0;
  mg.cars = []; mg.pickups = []; mg.particles = [];
  mg.streaks = { near: 0, max: 0 };
  mg.scrollZ = 0;
}

function mgTick() {
  mgRaf = requestAnimationFrame(mgTick);
  if (mg.state === 'play') mgUpdate();
  mgRender();
}

const MG_DT = 1 / 60;

function mgUpdate() {
  mg.frame++;

  // --- Lateral physics (swimming/inertia feel) ---
  const inp = mg.touchLeft ? -1 : mg.touchRight ? 1 : mg.steer;
  mg.playerVX += inp * 0.048;    // steering force
  mg.playerVX *= 0.84;           // drag (inertia)
  mg.playerX  += mg.playerVX;
  mg.playerX   = Math.max(-MG_ROAD_HW * 0.94, Math.min(MG_ROAD_HW * 0.94, mg.playerX));

  // Visual lean: vanishing point drifts opposite to lateral velocity
  mg.tilt += (-mg.playerVX * 9 - mg.tilt) * 0.11;

  // --- Speed ---
  const baseSpd  = 80 + mg.dist / 70;
  mg.speed = mg.nitroActive ? baseSpd * 1.8 : baseSpd;

  // --- Nitro ---
  if (mg.nitroActive) {
    mg.nitro -= 1.1;
    if (mg.nitro <= 0) { mg.nitroActive = false; mg.nitro = 0; }
  }
  if (mg.flash > 0) mg.flash--;
  if (mg.invincible > 0) mg.invincible--;

  mg.dist    += mg.speed * MG_DT;
  mg.scrollZ  = (mg.scrollZ + mg.speed * MG_DT * 0.55) % 30;

  // --- Spawn traffic ---
  const spInt = Math.max(18, 55 - mg.dist / 130);
  if (mg.frame % Math.floor(spInt) === 0) {
    const laneIdx  = Math.floor(Math.random() * 3);
    const typePool = mg.dist < 400
      ? ['sedan','sedan','suv','sports']
      : ['sedan','suv','sports','cop','cop'];
    mg.cars.push({
      x:        mgLane(laneIdx) + (Math.random() - 0.5) * 0.14,
      z:        MG_MAX_Z - 6,
      type:     typePool[Math.floor(Math.random() * typePool.length)],
      passed:   false,
      ownSpeed: 22 + Math.random() * 28,  // cars have their own slower speed
    });
  }

  // --- Spawn pickups ---
  if (mg.frame % 128 === 0 && Math.random() < 0.62) {
    mg.pickups.push({
      x:    mgLane(Math.floor(Math.random() * 3)),
      z:    MG_MAX_Z - 6,
      type: Math.random() < 0.38 ? 'nitro' : 'star',
    });
  }

  // --- Update traffic cars ---
  for (let i = mg.cars.length - 1; i >= 0; i--) {
    const c = mg.cars[i];
    c.z -= (mg.speed - c.ownSpeed) * MG_DT;  // approach speed = relative speed

    if (c.z < -10) { mg.cars.splice(i, 1); continue; }

    const dx = Math.abs(mg.playerX - c.x);

    // Near-miss: car passed very close but not collision
    if (!c.passed && c.z < 10 && c.z > 0) {
      c.passed = true;
      if (!mg.invincible && dx < 0.52 && dx > 0.28) {
        mg.streaks.near++;
        mg.streaks.max = Math.max(mg.streaks.max, mg.streaks.near);
        mgBurst(mgW * (0.5 + (mg.playerX - c.x) * 0.3), mgH * 0.67, '#e8ff3d', 8);
      } else if (dx >= 0.52) {
        mg.streaks.near = 0;
      }
    }

    // Collision
    if (!mg.invincible && c.z > 0 && c.z < 12 && dx < 0.36) {
      mg.lives--;
      mg.invincible = 90; mg.flash = 22; mg.streaks.near = 0;
      mgCrash(mgW/2, mgH * 0.70);
      mg.cars.splice(i, 1);
      if (mg.lives <= 0) mgGameOver();
      continue;
    }
  }

  // --- Update pickups ---
  for (let i = mg.pickups.length - 1; i >= 0; i--) {
    const p = mg.pickups[i];
    p.z -= mg.speed * MG_DT;
    if (p.z < -10) { mg.pickups.splice(i, 1); continue; }
    if (p.z < 12 && Math.abs(mg.playerX - p.x) < 0.44) {
      if (p.type === 'nitro') {
        mg.nitro = Math.min(200, mg.nitro + 200); mg.nitroActive = true;
        mgBurst(mgW/2, mgH * 0.7, '#e8ff3d', 20);
      } else {
        mgBurst(mgW/2, mgH * 0.7, '#ffd700', 10);
      }
      mg.pickups.splice(i, 1);
    }
  }

  mg.score = Math.floor(mg.dist) + mg.streaks.near * 22;

  // --- Particles ---
  for (let i = mg.particles.length - 1; i >= 0; i--) {
    const p = mg.particles[i];
    p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life--;
    if (p.life <= 0) mg.particles.splice(i, 1);
  }
}

function mgGameOver() {
  mg.state = 'over';
  const prev = parseInt(localStorage.getItem(MG_HI_KEY) || '0');
  if (mg.score > prev) {
    localStorage.setItem(MG_HI_KEY, mg.score);
    const el = document.getElementById('feedGameHi');
    if (el) el.textContent = mg.score;
  }
  mg.hi = Math.max(mg.score, prev);
}

function mgCrash(x, y) {
  const cols = ['#ff4400','#ff8800','#ffcc00','#fff','#ff2200'];
  for (let i = 0; i < 24; i++) {
    const a = (i/24)*Math.PI*2 + Math.random()*0.4;
    const spd = 2.5 + Math.random()*5;
    mg.particles.push({ x, y,
      vx: Math.cos(a)*spd, vy: Math.sin(a)*spd - 1.5,
      life: 20+Math.random()*20, size: 3+Math.random()*6,
      color: cols[Math.floor(Math.random()*cols.length)] });
  }
}

function mgBurst(x, y, color, n) {
  for (let i = 0; i < n; i++) {
    const a = (i/n)*Math.PI*2;
    const spd = 2 + Math.random()*3;
    mg.particles.push({ x, y,
      vx: Math.cos(a)*spd, vy: Math.sin(a)*spd - 1.5,
      life: 22+Math.random()*12, size: 3+Math.random()*4, color });
  }
}

/* ── Render ── */
function mgRender() {
  const ctx = mgCtx, W = mgW, H = mgH;
  const HRZ = MG_HRZ, DASHY = MG_DASH_Y;

  // ── Sky (above horizon) ──
  const skyG = ctx.createLinearGradient(0, 0, 0, HRZ);
  skyG.addColorStop(0,   '#07080f');
  skyG.addColorStop(0.5, '#0e1020');
  skyG.addColorStop(1,   '#1a1e38');
  ctx.fillStyle = skyG;
  ctx.fillRect(0, 0, W, HRZ);

  // Stars
  const now = Date.now();
  mg.stars.forEach(s => {
    const twinkle = 0.72 + 0.28 * Math.sin(now / s.tw + s.x * 0.05);
    ctx.globalAlpha = s.b * twinkle;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
  });
  ctx.globalAlpha = 1;

  // City horizon glow
  const cityG = ctx.createLinearGradient(0, HRZ * 0.55, 0, HRZ);
  cityG.addColorStop(0, 'rgba(0,0,0,0)');
  cityG.addColorStop(0.6, 'rgba(40,30,80,0.08)');
  cityG.addColorStop(1, 'rgba(80,60,160,0.22)');
  ctx.fillStyle = cityG;
  ctx.fillRect(0, HRZ * 0.55, W, HRZ * 0.45);

  // Subtle far-horizon haze
  const hazeG = ctx.createLinearGradient(0, HRZ - 18, 0, HRZ + 14);
  hazeG.addColorStop(0, 'rgba(60,70,180,0)');
  hazeG.addColorStop(0.5,'rgba(60,70,180,0.14)');
  hazeG.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = hazeG;
  ctx.fillRect(0, HRZ - 18, W, 32);

  // ── Road + traffic (windshield area HRZ → DASHY) ──
  mgDrawRoad(ctx, W, H, HRZ, DASHY);

  // Sort objects far → near
  const allObjs = [
    ...mg.cars.map(c    => ({ ...c,  _k:'car'    })),
    ...mg.pickups.map(p => ({ ...p,  _k:'pickup' })),
  ].sort((a, b) => b.z - a.z);

  allObjs.forEach(o => {
    const pt = mgProject(o.x, o.z);
    if (!pt || pt.y < HRZ || pt.y > H + 80) return;
    if (o._k === 'car')    mgDraw3DCar(ctx, pt.x, pt.y, pt.s, o.type);
    else                   mgDraw3DPickup(ctx, pt.x, pt.y, pt.s, o.type);
  });

  // Particles (windshield area)
  mg.particles.forEach(p => {
    if (p.y < HRZ || p.y > DASHY) return;
    ctx.globalAlpha = Math.max(0, p.life / 40);
    ctx.fillStyle   = p.color;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI*2); ctx.fill();
  });
  ctx.globalAlpha = 1;

  // Nitro speed lines inside windshield
  if (mg.nitroActive || mg.speed > 145) {
    const cx = W/2, cy = (HRZ + DASHY) / 2;
    const intensity = mg.nitroActive ? 0.32 : 0.15;
    ctx.save(); ctx.globalAlpha = intensity;
    ctx.strokeStyle = mg.nitroActive ? '#e8ff3d' : '#fff';
    ctx.lineWidth = 1;
    for (let i = 0; i < 18; i++) {
      const a = (i/18)*Math.PI*2;
      const r0 = 8, r1 = 40 + Math.random() * (Math.min(W,DASHY-HRZ)*0.38);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a)*r0, cy + Math.sin(a)*r0);
      ctx.lineTo(cx + Math.cos(a)*r1, cy + Math.sin(a)*r1);
      ctx.stroke();
    }
    ctx.restore();
  }

  // Hit flash (windshield only)
  if (mg.flash > 0) {
    ctx.fillStyle = `rgba(255,44,0,${mg.flash / 22 * 0.42})`;
    ctx.fillRect(0, HRZ, W, DASHY - HRZ);
  }

  // Windshield HUD overlay (distance, near-miss)
  mgDrawWindshieldHUD(ctx, W, HRZ, DASHY);

  // ── Cockpit (dashboard + steering wheel + A-pillars) ──
  mgDrawCockpit(ctx, W, H, HRZ, DASHY);

  if (mg.state === 'start') mgDrawStart(ctx, W, H);
  if (mg.state === 'over')  mgDrawOver(ctx, W, H);
}

/* Draw pseudo-3D perspective road */
function mgDrawRoad(ctx, W, H, HRZ, DASHY) {
  const vpX = W/2 + mg.tilt * W * 0.07;

  // Fill grass below windshield bottom edge (between DASHY and H is cockpit, handled elsewhere)
  // The road occupies HRZ → DASHY (windshield area)
  ctx.fillStyle = '#09110a';
  ctx.beginPath();
  ctx.moveTo(0,    HRZ);
  ctx.lineTo(W,    HRZ);
  ctx.lineTo(W,    DASHY);
  ctx.lineTo(0,    DASHY);
  ctx.closePath();
  ctx.fill();

  // Road trapezoid: horizon-wide at top, wide at bottom of windshield
  const roadBHW = MG_RDHW * 1.28;
  const rg = ctx.createLinearGradient(0, HRZ, 0, DASHY);
  rg.addColorStop(0,   '#16161e');
  rg.addColorStop(0.6, '#202030');
  rg.addColorStop(1,   '#2a2a3c');
  ctx.fillStyle = rg;
  ctx.beginPath();
  ctx.moveTo(vpX,             HRZ);
  ctx.lineTo(vpX,             HRZ);
  ctx.lineTo(W/2 + roadBHW,  DASHY);
  ctx.lineTo(W/2 - roadBHW,  DASHY);
  ctx.closePath();
  ctx.fill();

  // Asphalt texture via subtle random dots (seeded by scrollZ bucket)
  ctx.save();
  ctx.globalAlpha = 0.045;
  ctx.fillStyle = '#fff';
  const bucket = Math.floor(mg.scrollZ / 3);
  for (let i = 0; i < 28; i++) {
    const frac = ((bucket * 37 + i * 53) % 100) / 100;
    const z = 4 + frac * (MG_MAX_Z - 4);
    const px = mgProject(((i % 5) - 2) * 0.28, z);
    if (px && px.y >= HRZ && px.y <= DASHY) {
      ctx.beginPath(); ctx.arc(px.x, px.y, Math.max(0.5, px.s * 3), 0, Math.PI*2); ctx.fill();
    }
  }
  ctx.restore();

  // Grass verges left/right of road
  const gL = mgProject(-MG_ROAD_HW * 1.01, 2);
  const gLF = mgProject(-MG_ROAD_HW * 1.01, MG_MAX_Z);
  const gR = mgProject( MG_ROAD_HW * 1.01, 2);
  const gRF = mgProject( MG_ROAD_HW * 1.01, MG_MAX_Z);
  if (gL && gLF && gR && gRF) {
    ctx.fillStyle = '#09110a';
    ctx.beginPath();
    ctx.moveTo(0, HRZ); ctx.lineTo(gLF.x, gLF.y); ctx.lineTo(gL.x, gL.y); ctx.lineTo(0, DASHY);
    ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(W, HRZ); ctx.lineTo(gRF.x, gRF.y); ctx.lineTo(gR.x, gR.y); ctx.lineTo(W, DASHY);
    ctx.closePath(); ctx.fill();
  }

  // Road edge white lines
  [-MG_ROAD_HW, MG_ROAD_HW].forEach(lx => {
    const pN = mgProject(lx, 2);
    const pF = mgProject(lx, MG_MAX_Z);
    if (!pN || !pF) return;
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth   = 2.5;
    ctx.beginPath(); ctx.moveTo(pN.x, pN.y); ctx.lineTo(pF.x, pF.y); ctx.stroke();
  });

  // Lane dividers (dashed, scrolling)
  const divXs = [-MG_ROAD_HW / 3, MG_ROAD_HW / 3];
  const dashSpacing = 28, dashLen = 13;
  divXs.forEach(lx => {
    for (let base = mg.scrollZ % dashSpacing; base < MG_MAX_Z; base += dashSpacing) {
      const z0 = Math.max(1, base);
      const z1 = Math.min(MG_MAX_Z, base + dashLen);
      if (z1 < 1) continue;
      const p0 = mgProject(lx, z0);
      const p1 = mgProject(lx, z1);
      if (!p0 || !p1 || p0.y < HRZ || p1.y > DASHY + 4) continue;
      const alpha = 0.16 + 0.22 * (1 - z0 / MG_MAX_Z);
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
      ctx.lineWidth   = Math.max(1, p0.s * 7);
      ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y); ctx.stroke();
    }
  });

  // ── Headlight beam (player's own lights, warm cone on road) ──
  const vpX2 = W/2 + mg.tilt * W * 0.07;
  const beamG = ctx.createRadialGradient(vpX2, DASHY, 2, vpX2, DASHY, MG_RDHW * 1.55);
  beamG.addColorStop(0,   'rgba(255,248,200,0.22)');
  beamG.addColorStop(0.35,'rgba(255,245,180,0.08)');
  beamG.addColorStop(1,   'rgba(0,0,0,0)');
  ctx.fillStyle = beamG;
  ctx.beginPath();
  ctx.moveTo(vpX2, HRZ);
  ctx.lineTo(W/2 + MG_RDHW * 1.15, DASHY);
  ctx.lineTo(W/2 - MG_RDHW * 1.15, DASHY);
  ctx.closePath();
  ctx.fill();

  // ── Guardrails at road edges ──
  const grailZs = [3, MG_MAX_Z];
  const grailXs = [-MG_ROAD_HW * 1.08, MG_ROAD_HW * 1.08];
  grailXs.forEach(gx => {
    const pNear = mgProject(gx, grailZs[0]);
    const pFar  = mgProject(gx, grailZs[1]);
    if (!pNear || !pFar) return;
    // Rail beam
    ctx.strokeStyle = 'rgba(180,185,200,0.55)';
    ctx.lineWidth   = Math.max(1.5, pNear.s * 3.5);
    ctx.beginPath(); ctx.moveTo(pNear.x, pNear.y - pNear.s * 5); ctx.lineTo(pFar.x, pFar.y - pFar.s * 5); ctx.stroke();
    // Shadow under rail
    ctx.strokeStyle = 'rgba(0,0,0,0.35)';
    ctx.lineWidth   = Math.max(1, pNear.s * 2);
    ctx.beginPath(); ctx.moveTo(pNear.x, pNear.y - pNear.s * 3); ctx.lineTo(pFar.x, pFar.y - pFar.s * 3); ctx.stroke();
  });

  // ── Streetlights ──
  const lampWorldX = [-MG_ROAD_HW * 1.45, MG_ROAD_HW * 1.45];
  const lampZs     = [18, 52, 100, 165, 240];
  const lampH      = 8.5;   // world height of lamp head
  lampZs.forEach(lz => {
    lampWorldX.forEach(lx => {
      const pBase = mgProject(lx, lz);
      const pHead = mgProject(lx, lz);
      if (!pBase) return;
      const headY = pBase.y - pBase.s * lampH * 11;
      const poleW = Math.max(0.8, pBase.s * 3.5);
      const alpha = Math.min(1, lz < 10 ? lz / 10 : 1) * 0.85;

      // Pole
      ctx.strokeStyle = `rgba(90,90,100,${alpha * 0.7})`;
      ctx.lineWidth   = poleW;
      ctx.beginPath(); ctx.moveTo(pBase.x, pBase.y); ctx.lineTo(pBase.x, headY); ctx.stroke();

      // Arm extending over road
      const armX = pBase.x + (lx < 0 ? 1 : -1) * pBase.s * 18;
      ctx.beginPath(); ctx.moveTo(pBase.x, headY); ctx.lineTo(armX, headY); ctx.stroke();

      // Lamp glow
      const glowR = Math.max(2, pBase.s * 14);
      const lampG = ctx.createRadialGradient(armX, headY, 0, armX, headY, glowR);
      lampG.addColorStop(0,   `rgba(255,220,120,${alpha * 0.95})`);
      lampG.addColorStop(0.3, `rgba(255,190,80,${alpha * 0.55})`);
      lampG.addColorStop(1,   'rgba(255,160,40,0)');
      ctx.fillStyle = lampG;
      ctx.beginPath(); ctx.arc(armX, headY, glowR, 0, Math.PI*2); ctx.fill();

      // Light cone on road below lamp
      const coneR = pBase.s * 28;
      const coneG = ctx.createRadialGradient(pBase.x, pBase.y, 0, pBase.x, pBase.y, coneR);
      coneG.addColorStop(0,   `rgba(255,200,80,${alpha * 0.12})`);
      coneG.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = coneG;
      ctx.beginPath(); ctx.ellipse(pBase.x, pBase.y, coneR, coneR * 0.28, 0, 0, Math.PI*2); ctx.fill();
    });
  });

  // Horizon glow at HRZ boundary
  const hg = ctx.createLinearGradient(0, HRZ - 4, 0, HRZ + 8);
  hg.addColorStop(0,   'rgba(70,80,200,0.0)');
  hg.addColorStop(0.5, 'rgba(60,70,190,0.16)');
  hg.addColorStop(1,   'rgba(0,0,0,0.0)');
  ctx.fillStyle = hg;
  ctx.fillRect(0, HRZ - 4, W, 12);
}

/* Draw a traffic car from behind — proper 3D with side face, C-pillars, spinning wheels */
function mgDraw3DCar(ctx, sx, sy, scale, type) {
  const cw  = Math.max(12, Math.min(scale * 116, mgW * 1.4));
  const ch  = cw * 1.22;
  const hw  = cw / 2;

  // Lateral lean → how much side face is visible
  const lean      = Math.max(-1, Math.min(1, (sx - mgW * 0.5) / (mgW * 0.42)));
  const sideD     = Math.min(cw * 0.48, Math.abs(lean) * cw * 0.68);
  const showRight = lean < 0;  // car left of center → we see its right side

  const pal = {
    cop:    { b:'#1428cc', d:'#0a1888', s:'#061060', r:'#0e1c80', g:'rgba(50,70,200,0.50)' },
    sedan:  { b:'#c41818', d:'#780e0e', s:'#540a0a', r:'#8c1414', g:'rgba(50,70,160,0.50)' },
    suv:    { b:'#1e3040', d:'#101c28', s:'#0c1420', r:'#162436', g:'rgba(30,50,90,0.50)'  },
    sports: { b:'#cc2800', d:'#861800', s:'#601000', r:'#a42000', g:'rgba(40,60,140,0.48)' },
  };
  const p = pal[type] || pal.sedan;

  ctx.save();
  ctx.translate(sx, sy);

  // ── Ground shadow ──
  const sgG = ctx.createRadialGradient(0, -4, 0, 0, -4, hw * 1.2);
  sgG.addColorStop(0, 'rgba(0,0,0,0.45)'); sgG.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = sgG;
  ctx.beginPath(); ctx.ellipse(0, -3, hw * 1.18, cw * 0.092, 0, 0, Math.PI*2); ctx.fill();

  // ── SIDE FACE (drawn first so rear face covers the join) ──
  if (sideD > 3) {
    const sNear = showRight ? hw   : -hw;           // rear edge x
    const sFar  = showRight ? hw + sideD : -hw - sideD;  // front edge x
    const pRise = sideD * 0.18;                     // front edge rises in perspective
    const roofNX = showRight ?  hw * 0.72 : -hw * 0.72; // roof corner on this side
    const roofFX = showRight ? (hw * 0.72 + sideD * 0.82) : (-hw * 0.72 - sideD * 0.82);

    // Side body
    const sbG = ctx.createLinearGradient(sNear, 0, sFar, 0);
    sbG.addColorStop(0, p.d); sbG.addColorStop(1, p.s);
    ctx.fillStyle = sbG;
    ctx.beginPath();
    ctx.moveTo(sNear,  0);
    ctx.lineTo(sFar,  -pRise);
    ctx.lineTo(sFar,  -ch * 0.60 + pRise);
    ctx.lineTo(sNear, -ch * 0.60);
    ctx.closePath(); ctx.fill();

    // Side lower body (below shoulder line, bumper-level)
    ctx.fillStyle = p.s;
    ctx.beginPath();
    ctx.moveTo(sNear, -ch * 0.60);
    ctx.lineTo(sFar,  -ch * 0.60 + pRise);
    ctx.lineTo(sFar,  -ch * 0.34 + pRise);
    ctx.lineTo(sNear, -ch * 0.34);
    ctx.closePath(); ctx.fill();

    // Roof side panel
    const rsG = ctx.createLinearGradient(roofNX, -ch, roofFX, -ch);
    rsG.addColorStop(0, p.r); rsG.addColorStop(1, p.s);
    ctx.fillStyle = rsG;
    ctx.beginPath();
    ctx.moveTo(roofNX,  -ch);
    ctx.lineTo(roofFX,  -ch - pRise * 0.3);
    ctx.lineTo(sFar,    -ch * 0.60 + pRise);
    ctx.lineTo(sNear,   -ch * 0.60);
    ctx.closePath(); ctx.fill();

    // Side window glass
    const wXn = sNear * 0.80, wXf = sFar * 0.76;
    const wTop = -ch * 0.58, wBot = -ch * 0.38;
    ctx.fillStyle = p.g;
    ctx.beginPath();
    ctx.moveTo(wXn, wBot);
    ctx.lineTo(wXf, wBot - pRise * 0.4);
    ctx.lineTo(wXf, wTop - pRise * 0.4);
    ctx.lineTo(wXn, wTop);
    ctx.closePath(); ctx.fill();
    // Window shine streak
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.beginPath();
    ctx.moveTo(wXn, wBot); ctx.lineTo(wXn + (wXf-wXn)*0.28, wBot - pRise*0.12);
    ctx.lineTo(wXn + (wXf-wXn)*0.28, wTop - pRise*0.12); ctx.lineTo(wXn, wTop);
    ctx.closePath(); ctx.fill();

    // Door panel crease (horizontal line)
    ctx.strokeStyle = 'rgba(0,0,0,0.38)'; ctx.lineWidth = Math.max(0.6, cw * 0.015);
    ctx.beginPath();
    ctx.moveTo(sNear, -ch * 0.36);
    ctx.lineTo(sFar,  -ch * 0.36 - pRise * 0.5);
    ctx.stroke();

    // Side wheel arch cut
    const wArcX = showRight ? hw * 0.68 : -hw * 0.68;
    const wArcR = cw * 0.22;
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.beginPath(); ctx.ellipse(wArcX, -wArcR * 0.08, wArcR * 1.05, wArcR * 0.50, 0, Math.PI, 0); ctx.fill();

    // Rear-to-side bevel edge (bright line where faces meet)
    const bevLW = Math.max(1.5, cw * 0.030);
    const bevG  = ctx.createLinearGradient(sNear - bevLW, 0, sNear + bevLW, 0);
    bevG.addColorStop(0, 'rgba(0,0,0,0.15)');
    bevG.addColorStop(0.4, 'rgba(255,255,255,0.28)');
    bevG.addColorStop(1,   'rgba(0,0,0,0.05)');
    ctx.strokeStyle = bevG; ctx.lineWidth = bevLW * 2.2;
    ctx.beginPath(); ctx.moveTo(sNear, -ch * 0.02); ctx.lineTo(sNear, -ch * 0.98); ctx.stroke();
  }

  // ── REAR FACE — main body ──
  ctx.shadowBlur = cw * 0.14; ctx.shadowColor = 'rgba(0,0,0,0.60)'; ctx.shadowOffsetY = cw * 0.04;
  const bodyG = ctx.createLinearGradient(0, -ch, 0, 0);
  bodyG.addColorStop(0,    p.d);
  bodyG.addColorStop(0.08, p.b);
  bodyG.addColorStop(0.62, p.b);
  bodyG.addColorStop(0.82, p.d);
  bodyG.addColorStop(1,    'rgba(0,0,0,0.30)');
  ctx.fillStyle = bodyG;
  ctx.beginPath(); ctx.roundRect(-hw, -ch, cw, ch, [cw*0.055, cw*0.055, cw*0.07, cw*0.07]); ctx.fill();
  ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;

  // Body horizontal centre light line (reflection of road lights)
  const reflG = ctx.createLinearGradient(-hw, -ch*0.50, hw, -ch*0.50);
  reflG.addColorStop(0,   'rgba(255,255,255,0)');
  reflG.addColorStop(0.3, 'rgba(255,255,255,0.07)');
  reflG.addColorStop(0.7, 'rgba(255,255,255,0.07)');
  reflG.addColorStop(1,   'rgba(255,255,255,0)');
  ctx.fillStyle = reflG;
  ctx.fillRect(-hw*0.95, -ch*0.52, cw*0.95, ch*0.03);

  // ── Roof panel (narrower, sits on top of body) ──
  const roofW = cw * 0.70, roofH = ch * 0.40;
  const roofXL = -roofW / 2;
  const roofBodyG = ctx.createLinearGradient(0, -ch - roofH, 0, -ch);
  roofBodyG.addColorStop(0, p.r); roofBodyG.addColorStop(0.4, p.d); roofBodyG.addColorStop(1, p.d);
  ctx.fillStyle = roofBodyG;
  ctx.beginPath(); ctx.roundRect(roofXL, -ch - roofH * 0.02, roofW, roofH + cw*0.025, [roofW*0.10, roofW*0.10, 0, 0]); ctx.fill();
  // Roof highlight (catches overhead light)
  const roofHiG = ctx.createLinearGradient(roofXL, -ch - roofH, roofXL + roofW * 0.5, -ch - roofH);
  roofHiG.addColorStop(0, 'rgba(255,255,255,0)'); roofHiG.addColorStop(0.4, 'rgba(255,255,255,0.08)'); roofHiG.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = roofHiG;
  ctx.beginPath(); ctx.roundRect(roofXL, -ch - roofH * 0.02, roofW, roofH * 0.25, [roofW*0.10, roofW*0.10, 0, 0]); ctx.fill();

  // ── C-pillars (angled structural bars connecting roof to body sides) ──
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(0,0,0,0.55)'; ctx.lineWidth = Math.max(2, cw * 0.038);
  ctx.beginPath(); ctx.moveTo(roofXL + roofW * 0.04, -ch); ctx.lineTo(-hw * 0.90, -ch * 0.62); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(roofXL + roofW * 0.96, -ch); ctx.lineTo( hw * 0.90, -ch * 0.62); ctx.stroke();
  ctx.lineCap = 'butt';

  // ── Rear window ──
  const rwW = roofW * 0.86, rwH = ch * 0.24;
  const rwX = -rwW / 2;
  const rwG = ctx.createLinearGradient(rwX, -ch * 0.62, rwX + rwW, -ch * 0.38);
  rwG.addColorStop(0, 'rgba(25,38,90,0.65)'); rwG.addColorStop(1, 'rgba(15,22,58,0.50)');
  ctx.fillStyle = rwG;
  ctx.beginPath(); ctx.roundRect(rwX, -ch * 0.62, rwW, rwH, cw * 0.035); ctx.fill();
  // Broad glass reflection sweep
  ctx.fillStyle = 'rgba(255,255,255,0.055)';
  ctx.beginPath(); ctx.roundRect(rwX + rwW*0.04, -ch*0.615, rwW*0.42, rwH*0.82, cw*0.025); ctx.fill();
  // Narrow secondary reflection
  ctx.fillStyle = 'rgba(255,255,255,0.03)';
  ctx.beginPath(); ctx.roundRect(rwX + rwW*0.58, -ch*0.615, rwW*0.10, rwH*0.55, cw*0.01); ctx.fill();

  // ── Shoulder / character line ──
  ctx.strokeStyle = 'rgba(255,255,255,0.11)'; ctx.lineWidth = Math.max(0.8, cw*0.020);
  ctx.beginPath(); ctx.moveTo(-hw*0.94, -ch*0.36); ctx.lineTo(hw*0.94, -ch*0.36); ctx.stroke();
  ctx.strokeStyle = 'rgba(0,0,0,0.22)'; ctx.lineWidth = Math.max(0.5, cw*0.012);
  ctx.beginPath(); ctx.moveTo(-hw*0.94, -ch*0.34); ctx.lineTo(hw*0.94, -ch*0.34); ctx.stroke();

  // ── Rear bumper ──
  const bmpG = ctx.createLinearGradient(0, -ch*0.11, 0, 0);
  bmpG.addColorStop(0, 'rgba(30,30,40,0.80)'); bmpG.addColorStop(0.55, 'rgba(55,55,68,0.75)'); bmpG.addColorStop(1, 'rgba(18,18,26,0.90)');
  ctx.fillStyle = bmpG;
  ctx.beginPath(); ctx.roundRect(-hw*0.96, -ch*0.115, cw*0.96, ch*0.115, [0, 0, cw*0.055, cw*0.055]); ctx.fill();
  // Diffuser cut (centre dark recess)
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.beginPath(); ctx.roundRect(-hw*0.32, -ch*0.108, hw*0.64, ch*0.085, 2); ctx.fill();
  // Diffuser fins
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 0.8;
  for (let fi = -1; fi <= 1; fi++) {
    const fx = fi * hw * 0.15;
    ctx.beginPath(); ctx.moveTo(fx, -ch*0.108); ctx.lineTo(fx, -ch*0.023); ctx.stroke();
  }

  // ── Taillights — full-width LED strips ──
  const tlY  = -ch * 0.27, tlH2 = ch * 0.072;
  const glow = 0.88 + 0.12 * Math.sin(Date.now() / 480);
  // Left strip
  ctx.shadowBlur = hw * 0.55; ctx.shadowColor = `rgba(255,0,0,${glow})`;
  const tlLG = ctx.createLinearGradient(-hw*0.92, 0, -hw*0.36, 0);
  tlLG.addColorStop(0, `rgba(255,8,8,${glow})`); tlLG.addColorStop(0.7, `rgba(255,22,22,${glow})`); tlLG.addColorStop(1, `rgba(190,0,0,${glow*0.65})`);
  ctx.fillStyle = tlLG;
  ctx.beginPath(); ctx.roundRect(-hw*0.93, tlY, hw*0.57, tlH2, cw*0.025); ctx.fill();
  // Right strip
  const tlRG = ctx.createLinearGradient(hw*0.36, 0, hw*0.92, 0);
  tlRG.addColorStop(0, `rgba(190,0,0,${glow*0.65})`); tlRG.addColorStop(0.3, `rgba(255,22,22,${glow})`); tlRG.addColorStop(1, `rgba(255,8,8,${glow})`);
  ctx.fillStyle = tlRG;
  ctx.beginPath(); ctx.roundRect(hw*0.36, tlY, hw*0.57, tlH2, cw*0.025); ctx.fill();
  ctx.shadowBlur = 0;
  // Inner bright core (the actual LED element)
  ctx.fillStyle = `rgba(255,180,180,${glow * 0.50})`;
  ctx.beginPath(); ctx.roundRect(-hw*0.90, tlY + tlH2*0.22, hw*0.42, tlH2*0.50, cw*0.015); ctx.fill();
  ctx.beginPath(); ctx.roundRect( hw*0.48, tlY + tlH2*0.22, hw*0.42, tlH2*0.50, cw*0.015); ctx.fill();
  // Connecting centre strip (thin)
  ctx.fillStyle = `rgba(255,10,10,${glow * 0.30})`;
  ctx.beginPath(); ctx.roundRect(-hw*0.36, tlY + tlH2*0.32, hw*0.72, tlH2*0.30, 1); ctx.fill();

  // High-mount centre stop light
  ctx.shadowBlur = 5; ctx.shadowColor = '#ff0000';
  ctx.fillStyle = `rgba(255,35,35,${glow * 0.72})`;
  ctx.beginPath(); ctx.roundRect(-hw*0.15, -ch*0.645, hw*0.30, ch*0.032, 2); ctx.fill();
  ctx.shadowBlur = 0;

  // ── Rear spoiler ──
  const spBY = -ch - ch * 0.06;  // bottom of blade
  const spTY = spBY - ch * 0.07; // top of blade
  // Spoiler support pylons
  ctx.fillStyle = p.d;
  [-hw*0.46, hw*0.30].forEach(px => {
    ctx.beginPath(); ctx.roundRect(px, spBY, hw*0.16, ch*0.06, 2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.roundRect(px, spBY, hw*0.16, ch*0.06, 2); ctx.stroke();
  });
  // Blade underside (dark shadow)
  ctx.fillStyle = 'rgba(0,0,0,0.65)';
  ctx.beginPath(); ctx.roundRect(-hw*0.72, spBY - ch*0.008, hw*1.44, ch*0.012, 1); ctx.fill();
  // Blade body
  const spBladeG = ctx.createLinearGradient(0, spTY, 0, spBY);
  spBladeG.addColorStop(0, p.d); spBladeG.addColorStop(0.6, p.b); spBladeG.addColorStop(1, p.r);
  ctx.fillStyle = spBladeG;
  ctx.beginPath(); ctx.roundRect(-hw*0.70, spTY, hw*1.40, spBY - spTY, [cw*0.025, cw*0.025, 0, 0]); ctx.fill();
  // Blade top highlight
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = Math.max(0.8, cw*0.018);
  ctx.beginPath(); ctx.moveTo(-hw*0.68, spTY + 1); ctx.lineTo(hw*0.68, spTY + 1); ctx.stroke();
  // End plates
  ctx.fillStyle = p.s;
  ctx.beginPath(); ctx.roundRect(-hw*0.72, spTY, hw*0.16, spBY-spTY+ch*0.04, [1,1,2,2]); ctx.fill();
  ctx.beginPath(); ctx.roundRect( hw*0.56, spTY, hw*0.16, spBY-spTY+ch*0.04, [1,1,2,2]); ctx.fill();

  // ── Exhaust pipes ──
  [-hw*0.20, hw*0.04].forEach(ex => {
    // Outer pipe ring
    ctx.fillStyle = '#303030';
    ctx.beginPath(); ctx.ellipse(ex, -ch*0.043, hw*0.075, ch*0.033, 0, 0, Math.PI*2); ctx.fill();
    // Chrome inner
    const exG = ctx.createRadialGradient(ex - hw*0.02, -ch*0.038, 0, ex, -ch*0.043, hw*0.055);
    exG.addColorStop(0, '#909090'); exG.addColorStop(0.5, '#404040'); exG.addColorStop(1, '#181818');
    ctx.fillStyle = exG;
    ctx.beginPath(); ctx.ellipse(ex, -ch*0.043, hw*0.052, ch*0.022, 0, 0, Math.PI*2); ctx.fill();
    // Heat shimmer glow
    ctx.fillStyle = 'rgba(160,70,10,0.22)';
    ctx.beginPath(); ctx.ellipse(ex, -ch*0.072, hw*0.14, ch*0.055, 0, 0, Math.PI*2); ctx.fill();
  });

  // ── Rear wheels — full 3D cylinder ──
  const wR   = cw * 0.225;  // wheel radius
  const wCXs = [-hw * 0.70, hw * 0.70];  // wheel centers x
  const wCY  = -wR * 0.06;               // slightly above ground
  const wSpin = mg.scrollZ * 0.10;        // rotation from travel distance

  wCXs.forEach((wcx, idx) => {
    const isRight = idx === 1;
    const cylDepth = Math.max(0, (isRight === showRight) ? sideD * 0.55 : 0);

    // Wheel arch opening in body
    ctx.fillStyle = '#090a0d';
    ctx.beginPath(); ctx.ellipse(wcx, wCY, wR * 1.08, wR * 0.56, 0, Math.PI * 0.04, Math.PI * 0.96); ctx.fill();

    // Cylinder depth (side of tire, if visible)
    if (cylDepth > 2) {
      const cDirX = isRight ? cylDepth : -cylDepth;
      ctx.fillStyle = '#111114';
      ctx.beginPath();
      ctx.arc(wcx, wCY, wR, Math.PI * 0.08, Math.PI * 0.92);
      ctx.lineTo(wcx + cDirX, wCY + Math.sin(Math.PI * 0.92) * wR);
      ctx.arc(wcx + cDirX, wCY, wR, Math.PI * 0.92, Math.PI * 0.08, true);
      ctx.closePath(); ctx.fill();
    }

    // Tire face
    ctx.fillStyle = '#141416';
    ctx.beginPath(); ctx.arc(wcx, wCY, wR, 0, Math.PI*2); ctx.fill();

    // Tyre sidewall rings (tread lines)
    ctx.strokeStyle = '#222224'; ctx.lineWidth = Math.max(1.2, wR * 0.115);
    ctx.beginPath(); ctx.arc(wcx, wCY, wR * 0.88, 0, Math.PI*2); ctx.stroke();
    ctx.strokeStyle = '#1e1e20'; ctx.lineWidth = Math.max(0.6, wR * 0.060);
    ctx.beginPath(); ctx.arc(wcx, wCY, wR * 0.73, 0, Math.PI*2); ctx.stroke();

    // Rim — metallic radial gradient
    const rimG = ctx.createRadialGradient(
      wcx - wR*0.22, wCY - wR*0.22, 0,
      wcx, wCY, wR * 0.64);
    rimG.addColorStop(0,   '#9a9aaa');
    rimG.addColorStop(0.25,'#6c6c7c');
    rimG.addColorStop(0.55,'#424255');
    rimG.addColorStop(0.85,'#2a2a3a');
    rimG.addColorStop(1,   '#1c1c2a');
    ctx.fillStyle = rimG;
    ctx.beginPath(); ctx.arc(wcx, wCY, wR * 0.64, 0, Math.PI*2); ctx.fill();

    // Rim bevel edge
    ctx.strokeStyle = 'rgba(160,160,180,0.30)'; ctx.lineWidth = Math.max(1, wR*0.055);
    ctx.beginPath(); ctx.arc(wcx, wCY, wR * 0.64, 0, Math.PI*2); ctx.stroke();

    // Spokes — 5-spoke (spinning with travel distance)
    ctx.lineCap = 'round';
    for (let sp = 0; sp < 5; sp++) {
      const sa = (sp / 5) * Math.PI * 2 + wSpin;
      // Spoke shadow
      ctx.strokeStyle = 'rgba(0,0,0,0.55)'; ctx.lineWidth = Math.max(2, wR*0.11);
      ctx.beginPath();
      ctx.moveTo(wcx + Math.cos(sa)*wR*0.12, wCY + Math.sin(sa)*wR*0.12);
      ctx.lineTo(wcx + Math.cos(sa)*wR*0.57, wCY + Math.sin(sa)*wR*0.57);
      ctx.stroke();
      // Spoke body
      const spG2 = ctx.createLinearGradient(
        wcx + Math.cos(sa)*wR*0.13, wCY + Math.sin(sa)*wR*0.13,
        wcx + Math.cos(sa)*wR*0.56, wCY + Math.sin(sa)*wR*0.56);
      spG2.addColorStop(0, '#8a8a9a'); spG2.addColorStop(1, '#505060');
      ctx.strokeStyle = spG2; ctx.lineWidth = Math.max(1.2, wR*0.075);
      ctx.beginPath();
      ctx.moveTo(wcx + Math.cos(sa)*wR*0.13, wCY + Math.sin(sa)*wR*0.13);
      ctx.lineTo(wcx + Math.cos(sa)*wR*0.56, wCY + Math.sin(sa)*wR*0.56);
      ctx.stroke();
    }
    ctx.lineCap = 'butt';

    // Centre hub cap
    const hubCG = ctx.createRadialGradient(wcx - wR*0.06, wCY - wR*0.06, 0, wcx, wCY, wR*0.16);
    hubCG.addColorStop(0, '#c0c0cc'); hubCG.addColorStop(0.5, '#707080'); hubCG.addColorStop(1, '#383848');
    ctx.fillStyle = hubCG;
    ctx.beginPath(); ctx.arc(wcx, wCY, wR*0.16, 0, Math.PI*2); ctx.fill();

    // Brake disc glow (hot brakes)
    ctx.fillStyle = 'rgba(90,35,10,0.22)';
    ctx.beginPath(); ctx.arc(wcx, wCY, wR*0.36, 0, Math.PI*2); ctx.fill();
  });

  // ── License plate ──
  ctx.fillStyle = '#dde0cc';
  ctx.beginPath(); ctx.roundRect(-hw*0.22, -ch*0.125, hw*0.44, ch*0.068, 2); ctx.fill();
  ctx.fillStyle = '#22244a';
  ctx.font = `bold ${Math.max(4, ch*0.036)}px "DM Mono", monospace`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('REV', 0, -ch*0.125 + ch*0.034);

  // ── Cop lightbar ──
  if (type === 'cop') {
    const t = Math.floor(Date.now() / 115) % 2;
    const lbY = -ch - ch * 0.22;
    ctx.shadowBlur = hw * 0.70;
    ctx.fillStyle = t ? '#ff1111' : '#1111ff'; ctx.shadowColor = ctx.fillStyle;
    ctx.beginPath(); ctx.roundRect(-hw*0.38, lbY, hw*0.32, ch*0.048, 3); ctx.fill();
    ctx.fillStyle = t ? '#1111ff' : '#ff1111'; ctx.shadowColor = ctx.fillStyle;
    ctx.beginPath(); ctx.roundRect( hw*0.06, lbY, hw*0.32, ch*0.048, 3); ctx.fill();
    ctx.shadowBlur = 0;
    // Lightbar housing
    ctx.fillStyle = 'rgba(20,20,30,0.70)';
    ctx.beginPath(); ctx.roundRect(-hw*0.42, lbY - ch*0.005, hw*0.84, ch*0.055, 4); ctx.fill();
  }

  // ── Road taillight glow ──
  const rGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, hw * 1.35);
  rGlow.addColorStop(0,   'rgba(220,0,0,0.32)');
  rGlow.addColorStop(0.45,'rgba(180,0,0,0.12)');
  rGlow.addColorStop(1,   'rgba(0,0,0,0)');
  ctx.fillStyle = rGlow;
  ctx.beginPath(); ctx.ellipse(0, 0, hw*1.35, hw*0.30, 0, 0, Math.PI*2); ctx.fill();

  ctx.restore();
}

/* Draw ⚡ / ⭐ pickup in perspective */
function mgDraw3DPickup(ctx, sx, sy, scale, type) {
  const size = Math.max(10, scale * 90);
  ctx.save();
  ctx.translate(sx, sy - size * 0.5);
  const pulse = 0.90 + 0.10 * Math.sin(Date.now() / 220);
  ctx.scale(pulse, pulse);
  if (type === 'nitro') {
    ctx.shadowBlur  = 14 + 6 * Math.sin(Date.now() / 260);
    ctx.shadowColor = '#e8ff3d';
    ctx.fillStyle   = '#e8ff3d';
    ctx.font        = `bold ${size}px sans-serif`;
  } else {
    ctx.shadowBlur  = 10; ctx.shadowColor = '#ffd700';
    ctx.fillStyle   = '#ffd700';
    ctx.font        = `${size * 0.9}px sans-serif`;
  }
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(type === 'nitro' ? '⚡' : '⭐', 0, 0);
  ctx.shadowBlur = 0;
  ctx.restore();
}

/* Analog needle gauge — realistic dial with bezel, scale, needle, glass reflection */
function mgDrawGauge(ctx, cx, cy, r, value, color, label, readout) {
  const val    = Math.min(1, Math.max(0, value));
  const startA = Math.PI * 0.75;   // 135° (7:30 position)
  const sweep  = Math.PI * 1.50;   // 270° total sweep
  const endA   = startA + sweep;

  ctx.save();

  // ── Chrome bezel ──
  ctx.beginPath(); ctx.arc(cx, cy, r * 1.09, 0, Math.PI*2);
  const bz = ctx.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
  bz.addColorStop(0,   '#6a6a7a');
  bz.addColorStop(0.45,'#38383e');
  bz.addColorStop(0.55,'#55555e');
  bz.addColorStop(1,   '#202028');
  ctx.fillStyle = bz; ctx.fill();

  // ── Dial face ──
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
  const face = ctx.createRadialGradient(cx, cy - r*0.25, r*0.1, cx, cy, r);
  face.addColorStop(0,   '#22222e');
  face.addColorStop(0.65,'#16161e');
  face.addColorStop(1,   '#0c0c12');
  ctx.fillStyle = face; ctx.fill();

  // ── Red-zone arc (upper 20% of range) ──
  ctx.beginPath(); ctx.arc(cx, cy, r * 0.80, startA + sweep * 0.80, endA);
  ctx.strokeStyle = 'rgba(220,30,30,0.50)'; ctx.lineWidth = r * 0.11; ctx.stroke();

  // ── Major tick marks + numbers ──
  const majorN = 8;
  for (let i = 0; i <= majorN; i++) {
    const t = i / majorN;
    const a = startA + sweep * t;
    const inR = r * 0.74, outR = r * 0.90;
    const isRed = t > 0.78;
    ctx.strokeStyle = isRed ? 'rgba(255,60,60,0.85)' : 'rgba(255,255,255,0.70)';
    ctx.lineWidth   = Math.max(1, r * 0.028);
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * inR,  cy + Math.sin(a) * inR);
    ctx.lineTo(cx + Math.cos(a) * outR, cy + Math.sin(a) * outR);
    ctx.stroke();

    // Minor ticks between majors
    if (i < majorN) {
      for (let j = 1; j <= 4; j++) {
        const t2 = (i + j / 5) / majorN;
        const a2 = startA + sweep * t2;
        ctx.strokeStyle = 'rgba(255,255,255,0.22)';
        ctx.lineWidth   = Math.max(0.5, r * 0.014);
        const mi = r * 0.84, mo = r * 0.90;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a2)*mi, cy + Math.sin(a2)*mi);
        ctx.lineTo(cx + Math.cos(a2)*mo, cy + Math.sin(a2)*mo);
        ctx.stroke();
      }
    }

    // Tick number (every other major)
    if (i % 2 === 0) {
      const nr = r * 0.62;
      const nx = cx + Math.cos(a) * nr;
      const ny = cy + Math.sin(a) * nr;
      ctx.fillStyle    = isRed ? 'rgba(255,80,80,0.80)' : 'rgba(255,255,255,0.42)';
      ctx.font         = `${Math.max(5, r * 0.20)}px "DM Mono", monospace`;
      ctx.textAlign    = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(i, nx, ny);
    }
  }

  // ── Needle ──
  const needleA   = startA + sweep * val;
  const needleLen = r * 0.76;
  const tailLen   = r * 0.18;
  const needleHW  = r * 0.028;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(needleA);

  // Needle drop shadow
  ctx.shadowBlur = 5; ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowOffsetX = 1; ctx.shadowOffsetY = 1;

  // Needle body (tapers to tip)
  const ng = ctx.createLinearGradient(0, 0, needleLen, 0);
  ng.addColorStop(0,   '#ff3300');
  ng.addColorStop(0.25,'#ff4400');
  ng.addColorStop(1,   'rgba(255,60,0,0.15)');
  ctx.fillStyle = ng;
  ctx.beginPath();
  ctx.moveTo(-tailLen,  needleHW * 0.6);
  ctx.lineTo(needleLen, 0);
  ctx.lineTo(-tailLen, -needleHW * 0.6);
  ctx.closePath();
  ctx.fill();

  // Counter-weight tail
  ctx.fillStyle = '#1a1a24';
  ctx.shadowBlur = 0; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0;
  ctx.beginPath();
  ctx.moveTo(-tailLen,  needleHW * 0.55);
  ctx.lineTo(-tailLen * 1.4, 0);
  ctx.lineTo(-tailLen, -needleHW * 0.55);
  ctx.closePath();
  ctx.fill();

  ctx.restore();

  // ── Center cap (chrome hub) ──
  const capG = ctx.createRadialGradient(cx - r*0.03, cy - r*0.03, 0, cx, cy, r * 0.14);
  capG.addColorStop(0,   '#8a8a9a');
  capG.addColorStop(0.5, '#484856');
  capG.addColorStop(1,   '#242430');
  ctx.beginPath(); ctx.arc(cx, cy, r * 0.14, 0, Math.PI*2);
  ctx.fillStyle = capG; ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.20)'; ctx.lineWidth = 0.8; ctx.stroke();

  // ── Digital readout ──
  ctx.fillStyle    = val > 0.82 ? color : 'rgba(255,255,255,0.88)';
  ctx.font         = `bold ${Math.max(7, r * 0.30)}px "DM Mono", monospace`;
  ctx.textAlign    = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(readout, cx, cy + r * 0.38);

  // Label
  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  ctx.font      = `${Math.max(5, r * 0.20)}px "DM Mono", monospace`;
  ctx.fillText(label, cx, cy + r * 0.56);

  // ── Glass reflection ──
  const glassG = ctx.createRadialGradient(cx - r*0.22, cy - r*0.30, 0, cx, cy, r);
  glassG.addColorStop(0,   'rgba(255,255,255,0.07)');
  glassG.addColorStop(0.5, 'rgba(255,255,255,0.02)');
  glassG.addColorStop(1,   'rgba(0,0,0,0)');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
  ctx.fillStyle = glassG; ctx.fill();

  ctx.restore();
}

/* Windshield-area HUD overlay (distance, score, streak — inside the glass) */
function mgDrawWindshieldHUD(ctx, W, HRZ, DASHY) {
  // Tinted top bar inside windshield
  const barH = Math.min(52, (DASHY - HRZ) * 0.18);
  ctx.fillStyle = 'rgba(0,0,0,0.50)';
  ctx.fillRect(0, HRZ, W, barH);

  ctx.save();
  ctx.textBaseline = 'middle';

  // Distance odometer
  ctx.fillStyle = '#e8ff3d';
  ctx.font      = `bold 14px "DM Mono", monospace`;
  ctx.textAlign = 'left';
  ctx.fillText(String(Math.floor(mg.dist)).padStart(5, '0') + ' m', 12, HRZ + barH * 0.38);

  ctx.fillStyle = 'rgba(255,255,255,0.38)';
  ctx.font      = '9px "DM Mono", monospace';
  ctx.fillText('SCORE  ' + mg.score, 12, HRZ + barH * 0.75);

  // Best (center)
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,0.24)';
  ctx.font      = '9px "DM Mono", monospace';
  ctx.fillText('BEST ' + mg.hi, W / 2, HRZ + barH * 0.55);

  // Lives (right)
  let hearts = '';
  for (let i = 0; i < 3; i++) hearts += i < mg.lives ? '❤️' : '🖤';
  ctx.textAlign = 'right';
  ctx.font      = '14px sans-serif';
  ctx.fillText(hearts, W - 10, HRZ + barH * 0.38);

  ctx.restore();

  // Near-miss streak label (lower windshield)
  if (mg.streaks.near >= 2) {
    ctx.save();
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.shadowBlur = 6; ctx.shadowColor = '#e8ff3d';
    const fs = Math.min(19, 11 + mg.streaks.near * 1.4);
    ctx.fillStyle = '#e8ff3d';
    ctx.font = `bold ${fs}px "DM Sans", sans-serif`;
    ctx.fillText('CLOSE ×' + mg.streaks.near, 12, DASHY - 28);
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.font = '9px "DM Mono", monospace';
    ctx.fillText('NEAR MISS', 12, DASHY - 14);
    ctx.restore();
  }

  // Steer hint (first 4 sec)
  if (mg.frame > 0 && mg.frame < 120) {
    ctx.fillStyle    = `rgba(255,255,255,${0.52 * (1 - mg.frame / 120)})`;
    ctx.font         = '10px "DM Mono", monospace';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('HOLD LEFT / RIGHT TO STEER', W / 2, HRZ + (DASHY - HRZ) * 0.88);
  }
}

/* ── Full cockpit: dashboard, gauges, steering wheel, A-pillars, mirror ── */
function mgDrawCockpit(ctx, W, H, HRZ, DASHY) {
  const tilt = mg.tilt;
  const dashH = H - DASHY;
  const wsH = DASHY - HRZ;  // windshield height

  // ── Sun-visor tint band across windshield top ──
  const visorG = ctx.createLinearGradient(0, HRZ, 0, HRZ + wsH * 0.18);
  visorG.addColorStop(0, 'rgba(10,20,50,0.80)');
  visorG.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = visorG; ctx.fillRect(0, HRZ, W, wsH * 0.18);

  // Corner vignette (glass darkness at edges)
  const vL = ctx.createLinearGradient(0, 0, W * 0.20, 0);
  vL.addColorStop(0, 'rgba(0,0,0,0.50)'); vL.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = vL; ctx.fillRect(0, HRZ, W * 0.20, wsH);
  const vR = ctx.createLinearGradient(W, 0, W * 0.80, 0);
  vR.addColorStop(0, 'rgba(0,0,0,0.50)'); vR.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = vR; ctx.fillRect(W * 0.80, HRZ, W * 0.20, wsH);

  // ── Roll cage horizontal bar (top of windshield opening) ──
  const cageBarY = HRZ + wsH * 0.05;
  const cageBarH = Math.max(9, wsH * 0.055);
  const cbG = ctx.createLinearGradient(0, cageBarY, 0, cageBarY + cageBarH);
  cbG.addColorStop(0, '#252830'); cbG.addColorStop(0.5, '#1c1e24'); cbG.addColorStop(1, '#12141a');
  ctx.fillStyle = cbG;
  ctx.beginPath(); ctx.roundRect(W * 0.05, cageBarY, W * 0.90, cageBarH, 4); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.14)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(W*0.05, cageBarY+1); ctx.lineTo(W*0.95, cageBarY+1); ctx.stroke();
  ctx.strokeStyle = 'rgba(0,0,0,0.50)'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(W*0.05, cageBarY+cageBarH); ctx.lineTo(W*0.95, cageBarY+cageBarH); ctx.stroke();
  // Diagonal cage bars to corners
  ctx.strokeStyle = '#1c1e24'; ctx.lineWidth = Math.max(6, W*0.026); ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(W*0.05, cageBarY+cageBarH*0.5); ctx.lineTo(W*0.145, DASHY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W*0.95, cageBarY+cageBarH*0.5); ctx.lineTo(W*0.855, DASHY); ctx.stroke();
  ctx.lineCap = 'butt';

  // ── A-Pillars — wide, structural, 3-D shaded ──
  const apW = W * 0.125;  // prominent width
  // Left pillar gradient (lighter toward inner edge = catches light from windshield)
  const lpG = ctx.createLinearGradient(0, 0, apW * 2.1, 0);
  lpG.addColorStop(0,    '#080a0e');
  lpG.addColorStop(0.45, '#1e2028');
  lpG.addColorStop(0.75, '#161820');
  lpG.addColorStop(1,    '#0c0e12');
  ctx.fillStyle = lpG;
  ctx.beginPath();
  ctx.moveTo(0,          HRZ);
  ctx.lineTo(apW * 2.1,  HRZ);
  ctx.lineTo(apW * 1.15, DASHY);
  ctx.lineTo(0,          DASHY);
  ctx.closePath(); ctx.fill();
  // Inner highlight line (fresnel-like edge glow)
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(apW*2.05, HRZ+2); ctx.lineTo(apW*1.10, DASHY-2); ctx.stroke();
  // Outer shadow
  ctx.strokeStyle = 'rgba(0,0,0,0.65)'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(2, HRZ); ctx.lineTo(2, DASHY); ctx.stroke();

  // Right pillar
  const rpG = ctx.createLinearGradient(W, 0, W - apW*2.1, 0);
  rpG.addColorStop(0,    '#080a0e');
  rpG.addColorStop(0.45, '#1e2028');
  rpG.addColorStop(0.75, '#161820');
  rpG.addColorStop(1,    '#0c0e12');
  ctx.fillStyle = rpG;
  ctx.beginPath();
  ctx.moveTo(W,               HRZ);
  ctx.lineTo(W - apW * 2.1,   HRZ);
  ctx.lineTo(W - apW * 1.15,  DASHY);
  ctx.lineTo(W,               DASHY);
  ctx.closePath(); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(W-apW*2.05, HRZ+2); ctx.lineTo(W-apW*1.10, DASHY-2); ctx.stroke();
  ctx.strokeStyle = 'rgba(0,0,0,0.65)'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(W-2, HRZ); ctx.lineTo(W-2, DASHY); ctx.stroke();

  // ── Windshield frame top bar ──
  const hdrH = Math.max(8, wsH * 0.052);
  const hG = ctx.createLinearGradient(0, HRZ, 0, HRZ + hdrH);
  hG.addColorStop(0, '#0c0e12'); hG.addColorStop(1, '#181a20');
  ctx.fillStyle = hG; ctx.fillRect(0, HRZ, W, hdrH);
  ctx.strokeStyle = 'rgba(255,255,255,0.10)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, HRZ+1); ctx.lineTo(W, HRZ+1); ctx.stroke();

  // ── Rearview mirror ──
  const mirW = W * 0.26, mirH = Math.max(16, wsH * 0.092);
  const mirX = W/2 - mirW/2, mirY = HRZ + hdrH + 3;
  // Mount arm
  ctx.fillStyle = '#1c1e26';
  ctx.beginPath(); ctx.roundRect(W/2-4, HRZ, 8, mirY + mirH*0.5 - HRZ, 2); ctx.fill();
  // Housing shadow
  ctx.shadowBlur = 10; ctx.shadowColor = 'rgba(0,0,0,0.6)'; ctx.shadowOffsetY = 3;
  ctx.fillStyle = '#10121a';
  ctx.beginPath(); ctx.roundRect(mirX-4, mirY-3, mirW+8, mirH+6, 5); ctx.fill();
  ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
  // Mirror glass interior (clip + draw reflection scene)
  ctx.save();
  ctx.beginPath(); ctx.roundRect(mirX, mirY, mirW, mirH, 3); ctx.clip();
  // Sky reflected
  const mrSkyG = ctx.createLinearGradient(0, mirY, 0, mirY + mirH * 0.45);
  mrSkyG.addColorStop(0, '#0e1020'); mrSkyG.addColorStop(1, '#181a2c');
  ctx.fillStyle = mrSkyG; ctx.fillRect(mirX, mirY, mirW, mirH * 0.45);
  // Road strip
  const mrRdW = mirW * 0.48;
  ctx.fillStyle = '#1e2030';
  ctx.beginPath();
  ctx.moveTo(mirX + mirW*0.5 - mrRdW*0.3, mirY + mirH*0.44);
  ctx.lineTo(mirX + mirW*0.5 + mrRdW*0.3, mirY + mirH*0.44);
  ctx.lineTo(mirX + mirW*0.5 + mrRdW*0.5, mirY + mirH);
  ctx.lineTo(mirX + mirW*0.5 - mrRdW*0.5, mirY + mirH);
  ctx.closePath(); ctx.fill();
  // Road edge lines
  ctx.strokeStyle = 'rgba(255,255,255,0.28)'; ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.moveTo(mirX+mirW*0.5-mrRdW*0.3, mirY+mirH*0.44); ctx.lineTo(mirX+mirW*0.5-mrRdW*0.5, mirY+mirH); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(mirX+mirW*0.5+mrRdW*0.3, mirY+mirH*0.44); ctx.lineTo(mirX+mirW*0.5+mrRdW*0.5, mirY+mirH); ctx.stroke();
  // Car behind - taillights pulse
  const mcY = mirY + mirH * (0.55 + 0.06 * Math.sin(Date.now()/700));
  ctx.shadowBlur = 5; ctx.shadowColor = '#ff2222';
  ctx.fillStyle = `rgba(255,30,30,${0.65 + 0.25*Math.sin(Date.now()/600)})`;
  ctx.beginPath(); ctx.ellipse(mirX+mirW*0.40, mcY, 5, 2, 0, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(mirX+mirW*0.60, mcY, 5, 2, 0, 0, Math.PI*2); ctx.fill();
  ctx.shadowBlur = 0;
  // Glass tint + sheen
  ctx.fillStyle = 'rgba(10,15,40,0.22)'; ctx.fillRect(mirX, mirY, mirW, mirH);
  const mrSheen = ctx.createLinearGradient(mirX, mirY, mirX+mirW*0.6, mirY+mirH*0.6);
  mrSheen.addColorStop(0, 'rgba(255,255,255,0.06)'); mrSheen.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = mrSheen; ctx.fillRect(mirX, mirY, mirW, mirH);
  ctx.restore();
  // Chrome bezel
  ctx.strokeStyle = 'rgba(160,160,180,0.65)'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.roundRect(mirX, mirY, mirW, mirH, 3); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.10)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(mirX+3, mirY+1); ctx.lineTo(mirX+mirW-3, mirY+1); ctx.stroke();

  // ── Dashboard body (DASHY → H) ──
  const dg = ctx.createLinearGradient(0, DASHY, 0, H);
  dg.addColorStop(0,    '#1e2028');
  dg.addColorStop(0.12, '#17181e');
  dg.addColorStop(0.50, '#111218');
  dg.addColorStop(1,    '#08080e');
  ctx.fillStyle = dg; ctx.fillRect(0, DASHY, W, dashH);

  // Top edge chrome
  const topEdgeG = ctx.createLinearGradient(0, DASHY, 0, DASHY+5);
  topEdgeG.addColorStop(0, 'rgba(255,255,255,0.22)');
  topEdgeG.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = topEdgeG; ctx.fillRect(0, DASHY, W, 5);

  // Carbon weave (crossed diagonals)
  ctx.save();
  ctx.beginPath(); ctx.rect(0, DASHY, W, dashH); ctx.clip();
  ctx.globalAlpha = 0.032; ctx.lineWidth = 0.8; ctx.strokeStyle = '#fff';
  for (let y = DASHY; y < H; y += 7) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
  for (let x = 0; x < W; x += 7) { ctx.beginPath(); ctx.moveTo(x, DASHY); ctx.lineTo(x,H); ctx.stroke(); }
  ctx.globalAlpha = 0.018;
  for (let d = -H; d < W; d += 14) {
    ctx.beginPath(); ctx.moveTo(d, DASHY); ctx.lineTo(d + dashH, H); ctx.stroke();
  }
  ctx.restore();

  // ── Instrument cluster brow (cowling hood) ──
  const cowH = dashH * 0.33;
  const cowG = ctx.createLinearGradient(0, DASHY, 0, DASHY+cowH);
  cowG.addColorStop(0, '#0c0e14'); cowG.addColorStop(0.7, '#161820'); cowG.addColorStop(1, '#1c1e28');
  ctx.fillStyle = cowG;
  ctx.beginPath();
  ctx.moveTo(W*0.03, DASHY);
  ctx.lineTo(W*0.97, DASHY);
  ctx.bezierCurveTo(W*0.97, DASHY, W*0.86, DASHY+cowH, W*0.18, DASHY+cowH);
  ctx.lineTo(W*0.14, DASHY+cowH);
  ctx.bezierCurveTo(W*0.14, DASHY+cowH, W*0.03, DASHY+cowH, W*0.03, DASHY);
  ctx.closePath(); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(W*0.03, DASHY+1); ctx.lineTo(W*0.97, DASHY+1); ctx.stroke();

  // ── Gauges ── (small; positioned corners, clear of wheel)
  const gaugeR  = Math.min(dashH * 0.27, W * 0.078);
  const gaugeCY = DASHY + dashH * 0.38;

  mgDrawGauge(ctx, W * 0.155, gaugeCY, gaugeR,
    Math.min(1, (mg.speed - 60) / 200), '#38b8ff', 'km/h',
    Math.round(mg.speed + (mg.nitroActive ? 90 : 0)));

  const rpmVal = Math.min(1, 0.35 + (mg.speed - 60) / 265 + (mg.nitroActive ? 0.28 : 0));
  mgDrawGauge(ctx, W * 0.845, gaugeCY, gaugeR,
    rpmVal, mg.nitroActive ? '#e8ff3d' : '#ff5533', 'RPM',
    Math.round(rpmVal * 8));

  // ── Center MFD (digital display between gauges) ──
  const mfdW = W * 0.32, mfdH = Math.max(28, dashH * 0.22);
  const mfdX = W/2 - mfdW/2, mfdY = DASHY + dashH * 0.10;
  // Bezel
  ctx.fillStyle = '#06060e';
  ctx.shadowBlur = 6; ctx.shadowColor = 'rgba(0,0,200,0.25)'; ctx.shadowOffsetY = 2;
  ctx.beginPath(); ctx.roundRect(mfdX-3, mfdY-3, mfdW+6, mfdH+6, 6); ctx.fill();
  ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
  ctx.strokeStyle = 'rgba(40,80,200,0.40)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(mfdX-3, mfdY-3, mfdW+6, mfdH+6, 6); ctx.stroke();
  // Screen (dark LCD)
  const lcdG = ctx.createLinearGradient(mfdX, mfdY, mfdX, mfdY+mfdH);
  lcdG.addColorStop(0, '#080c1a'); lcdG.addColorStop(1, '#060810');
  ctx.fillStyle = lcdG;
  ctx.beginPath(); ctx.roundRect(mfdX, mfdY, mfdW, mfdH, 4); ctx.fill();
  // Speed readout large
  const kph = Math.round(mg.speed + (mg.nitroActive ? 90 : 0));
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const mfdCol = mg.nitroActive ? '#e8ff3d' : '#38c8ff';
  ctx.fillStyle = mfdCol;
  if (mg.nitroActive) { ctx.shadowBlur = 12; ctx.shadowColor = '#e8ff3d'; }
  ctx.font = `bold ${Math.max(12, mfdH*0.52)}px "DM Mono", monospace`;
  ctx.fillText(kph, W/2, mfdY + mfdH*0.40);
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255,255,255,0.22)';
  ctx.font = `${Math.max(6, mfdH*0.22)}px "DM Mono", monospace`;
  ctx.fillText('km/h', W/2, mfdY + mfdH*0.75);
  // Scan line on MFD
  ctx.fillStyle = 'rgba(255,255,255,0.015)';
  for (let sy = mfdY; sy < mfdY+mfdH; sy += 3) { ctx.fillRect(mfdX, sy, mfdW, 1); }

  // Nitro bar below MFD
  if (mg.nitro > 0 || mg.nitroActive) {
    const nbY = mfdY + mfdH + 5, nbH = Math.max(5, dashH * 0.055), nbX = mfdX, nbW = mfdW;
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.beginPath(); ctx.roundRect(nbX, nbY, nbW, nbH, 3); ctx.fill();
    const pct = Math.max(0, mg.nitro / 200);
    const nbFG = ctx.createLinearGradient(nbX,0, nbX+nbW,0);
    nbFG.addColorStop(0,'#bb3300'); nbFG.addColorStop(0.55,'#ff6600'); nbFG.addColorStop(1,'#e8ff3d');
    ctx.fillStyle = nbFG;
    if (mg.nitroActive) { ctx.shadowBlur = 10; ctx.shadowColor = '#e8ff3d'; }
    ctx.beginPath(); ctx.roundRect(nbX, nbY, nbW*pct, nbH, 3); ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = mg.nitroActive ? '#e8ff3d' : 'rgba(232,255,61,0.38)';
    ctx.font = `bold ${Math.max(6, nbH*0.85)}px "DM Mono", monospace`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('N₂O', nbX+3, nbY+nbH/2);
    if (mg.nitroActive && mg.frame % 8 < 5) {
      ctx.shadowBlur = 12; ctx.shadowColor = '#e8ff3d';
      ctx.fillStyle = '#e8ff3d';
      ctx.font = `bold ${Math.max(9, mfdH*0.28)}px "Bebas Neue", cursive`;
      ctx.textAlign = 'center';
      ctx.fillText('NITRO BOOST', W/2, nbY + nbH + dashH*0.06);
      ctx.shadowBlur = 0;
    }
  }

  // ── STEERING WHEEL (hero element — large, dominant) ──
  const swR   = Math.min(dashH * 0.88, W * 0.38);  // very large
  const swCX  = W / 2;
  const swCY  = DASHY + dashH * 0.72;  // center low enough that bottom clips off screen
  const swAng = tilt * 0.75;

  ctx.save();
  ctx.translate(swCX, swCY);
  ctx.rotate(swAng);

  // ── Drop shadow under wheel ──
  ctx.shadowBlur = swR * 0.25; ctx.shadowColor = 'rgba(0,0,0,0.85)'; ctx.shadowOffsetY = swR * 0.06;
  ctx.beginPath(); ctx.arc(0, 0, swR + 2, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0,0,0,0.01)'; ctx.fill();  // ghost fill to trigger shadow
  ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;

  // ── Rim — draw 36 segments (alternating rubber + suede) ──
  const rimLW = Math.max(10, swR * 0.22);
  const NS = 36;
  for (let i = 0; i < NS; i++) {
    const a0 = (i / NS) * Math.PI * 2;
    const a1 = ((i + 0.80) / NS) * Math.PI * 2;
    const isSuede = (i % 6 === 2 || i % 6 === 5);
    ctx.beginPath(); ctx.arc(0, 0, swR, a0, a1);
    ctx.strokeStyle = isSuede ? '#261a30' : '#1a1828';
    ctx.lineWidth   = rimLW; ctx.stroke();
  }

  // Stitching marks (red thread stitching on grip)
  ctx.strokeStyle = 'rgba(160,40,40,0.50)'; ctx.lineWidth = 0.9;
  const NS2 = 48;
  for (let i = 0; i < NS2; i++) {
    const a = (i / NS2) * Math.PI * 2;
    const innerR = swR - rimLW * 0.25;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a - 0.035)*innerR, Math.sin(a - 0.035)*innerR);
    ctx.lineTo(Math.cos(a + 0.035)*innerR, Math.sin(a + 0.035)*innerR);
    ctx.stroke();
  }

  // Rim outer bevel (chrome thin edge)
  ctx.beginPath(); ctx.arc(0, 0, swR + rimLW*0.48, 0, Math.PI*2);
  ctx.strokeStyle = 'rgba(80,80,100,0.55)'; ctx.lineWidth = Math.max(2, rimLW*0.12); ctx.stroke();

  // Top highlight arc
  ctx.beginPath(); ctx.arc(0, 0, swR, Math.PI*1.18, Math.PI*1.82);
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = Math.max(3, rimLW*0.30); ctx.stroke();

  // Ambient occlusion inner shadow
  ctx.beginPath(); ctx.arc(0, 0, swR, 0, Math.PI*2);
  ctx.strokeStyle = 'rgba(0,0,0,0.55)'; ctx.lineWidth = Math.max(2, rimLW*0.22); ctx.stroke();

  // ── Spokes — 3 lower spokes like a race wheel ──
  const spokeAngles = [Math.PI * 0.5, Math.PI * 1.16, Math.PI * 1.84];
  const spW = Math.max(6, swR * 0.14);

  // Spoke shadows
  ctx.strokeStyle = 'rgba(0,0,0,0.70)'; ctx.lineWidth = spW + 4; ctx.lineCap = 'round';
  spokeAngles.forEach(a => {
    ctx.beginPath();
    ctx.moveTo(Math.cos(a)*swR*0.19, Math.sin(a)*swR*0.19);
    ctx.lineTo(Math.cos(a)*swR*0.85, Math.sin(a)*swR*0.85);
    ctx.stroke();
  });

  // Spoke bodies (metallic gradient)
  spokeAngles.forEach(a => {
    const spGrad = ctx.createLinearGradient(
      Math.cos(a)*swR*0.20, Math.sin(a)*swR*0.20,
      Math.cos(a)*swR*0.84, Math.sin(a)*swR*0.84);
    spGrad.addColorStop(0,   '#3c3c50');
    spGrad.addColorStop(0.45,'#2c2c40');
    spGrad.addColorStop(1,   '#1a1a2c');
    ctx.strokeStyle = spGrad; ctx.lineWidth = spW;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a)*swR*0.20, Math.sin(a)*swR*0.20);
    ctx.lineTo(Math.cos(a)*swR*0.84, Math.sin(a)*swR*0.84);
    ctx.stroke();
    // Center groove on spoke
    ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = Math.max(1, spW*0.28);
    ctx.beginPath();
    ctx.moveTo(Math.cos(a)*swR*0.22, Math.sin(a)*swR*0.22);
    ctx.lineTo(Math.cos(a)*swR*0.82, Math.sin(a)*swR*0.82);
    ctx.stroke();
    // Spoke highlight edge
    ctx.strokeStyle = 'rgba(255,255,255,0.09)'; ctx.lineWidth = Math.max(1, spW*0.14);
    ctx.beginPath();
    ctx.moveTo(Math.cos(a)*swR*0.21, Math.sin(a)*swR*0.21);
    ctx.lineTo(Math.cos(a)*swR*0.83, Math.sin(a)*swR*0.83);
    ctx.stroke();
  });
  ctx.lineCap = 'butt';

  // ── Paddle shifters ──
  const padW = swR * 0.14, padH = swR * 0.18;
  [[-swR*0.32, -padH*0.5], [swR*0.18, -padH*0.5]].forEach(([px, py]) => {
    ctx.shadowBlur = 5; ctx.shadowColor = 'rgba(0,0,0,0.6)'; ctx.shadowOffsetY = 3;
    ctx.fillStyle = '#222234';
    ctx.beginPath(); ctx.roundRect(px, py, padW, padH, 4); ctx.fill();
    ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect(px, py, padW, padH, 4); ctx.stroke();
    // Plus/minus label
    ctx.fillStyle = 'rgba(255,255,255,0.28)'; ctx.font = `bold ${Math.max(8, padH*0.38)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(px < 0 ? '−' : '+', px + padW/2, py + padH/2);
  });

  // ── Center hub (chromed) ──
  ctx.shadowBlur = 12; ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowOffsetY = 3;
  const hubR = swR * 0.22;
  const hubGrad = ctx.createRadialGradient(-hubR*0.3, -hubR*0.3, 0, 0, 0, hubR);
  hubGrad.addColorStop(0,   '#707080');
  hubGrad.addColorStop(0.3, '#484860');
  hubGrad.addColorStop(0.7, '#2a2a40');
  hubGrad.addColorStop(1,   '#14142a');
  ctx.beginPath(); ctx.arc(0, 0, hubR, 0, Math.PI*2);
  ctx.fillStyle = hubGrad; ctx.fill();
  ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
  ctx.strokeStyle = 'rgba(255,255,255,0.22)'; ctx.lineWidth = 1.5; ctx.stroke();

  // Hub ring detail
  ctx.beginPath(); ctx.arc(0, 0, hubR*0.72, 0, Math.PI*2);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 1; ctx.stroke();

  // Airbag cover (rectangular pad in hub center)
  ctx.fillStyle = '#16162a';
  ctx.shadowBlur = 4; ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.beginPath(); ctx.roundRect(-hubR*0.55, -hubR*0.45, hubR*1.10, hubR*0.90, 5); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.roundRect(-hubR*0.55, -hubR*0.45, hubR*1.10, hubR*0.90, 5); ctx.stroke();

  // Logo dot
  ctx.beginPath(); ctx.arc(0, -hubR*0.05, hubR*0.08, 0, Math.PI*2);
  ctx.fillStyle = '#e8ff3d'; ctx.shadowBlur = 8; ctx.shadowColor = '#e8ff3d'; ctx.fill();
  ctx.shadowBlur = 0;

  ctx.restore();

  // ── Windshield bottom seal (glass → dash merge line) ──
  const wbG = ctx.createLinearGradient(0, DASHY-5, 0, DASHY+6);
  wbG.addColorStop(0, 'rgba(255,255,255,0.08)');
  wbG.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = wbG; ctx.fillRect(0, DASHY-5, W, 11);
}

/* Start screen */
function mgDrawStart(ctx, W, H) {
  ctx.fillStyle = 'rgba(0,0,0,0.80)';
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.textAlign = 'center';

  ctx.shadowBlur = 32; ctx.shadowColor = '#e8ff3d';
  ctx.fillStyle  = '#e8ff3d';
  ctx.font       = '64px "Bebas Neue", cursive';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('STREET', W/2, H/2 - 112);
  ctx.shadowBlur = 22;
  ctx.fillText('RUSH',   W/2, H/2 - 52);
  ctx.shadowBlur = 0;

  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font      = '12px "DM Sans", sans-serif';
  ctx.fillText('First-person highway weave · Hold to steer', W/2, H/2 - 20);

  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  ctx.font      = '11px "DM Mono", monospace';
  ctx.fillText('CLOSE CALLS = BONUS SCORE', W/2, H/2 + 4);

  if (mg.hi > 0) {
    ctx.fillStyle = 'rgba(232,255,61,0.58)';
    ctx.font      = 'bold 12px "DM Mono", monospace';
    ctx.fillText('BEST  ' + mg.hi + ' m', W/2, H/2 + 28);
  }

  // CTA button
  const bw = 190, bh = 54, bx = W/2 - bw/2, by = H/2 + 50;
  ctx.shadowBlur = 20; ctx.shadowColor = '#e8ff3d';
  ctx.fillStyle  = '#e8ff3d';
  ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 27); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle    = '#000';
  ctx.font         = 'bold 26px "Bebas Neue", cursive';
  ctx.textBaseline = 'middle';
  ctx.fillText('TAP TO RACE', W/2, by + bh/2 + 1);
  ctx.restore();
}

/* Game over screen */
function mgDrawOver(ctx, W, H) {
  ctx.fillStyle = 'rgba(0,0,0,0.84)';
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.textAlign = 'center';

  ctx.fillStyle  = '#ff3c1a';
  ctx.shadowBlur = 28; ctx.shadowColor = '#ff3c1a';
  ctx.font       = '58px "Bebas Neue", cursive';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('WRECKED', W/2, H/2 - 106);
  ctx.shadowBlur = 0;

  ctx.fillStyle = '#fff';
  ctx.font      = '38px "Bebas Neue", cursive';
  ctx.fillText(mg.score + ' m', W/2, H/2 - 55);

  const newRec = mg.score > 0 && mg.score >= mg.hi;
  if (newRec) {
    ctx.shadowBlur = 14; ctx.shadowColor = '#e8ff3d';
    ctx.fillStyle  = '#e8ff3d';
    ctx.font       = '18px "Bebas Neue", cursive';
    ctx.fillText('★  NEW RECORD  ★', W/2, H/2 - 26);
    ctx.shadowBlur = 0;
  } else {
    ctx.fillStyle    = 'rgba(255,255,255,0.35)';
    ctx.font         = '11px "DM Mono", monospace';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('BEST  ' + mg.hi + ' m', W/2, H/2 - 26);
  }

  const rows = [
    ['DISTANCE',   Math.floor(mg.dist) + ' m'],
    ['SCORE',      String(mg.score)],
    ['CLOSE CALLS', '×' + mg.streaks.max],
    ['TOP SPEED',  Math.round(mg.speed) + ' km/h'],
  ];
  ctx.font      = '11px "DM Mono", monospace';
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  rows.forEach(([k, v], i) => {
    ctx.textAlign = 'left';  ctx.fillText(k, W/2 - 86, H/2 + 8 + i * 22);
    ctx.textAlign = 'right'; ctx.fillText(v, W/2 + 86, H/2 + 8 + i * 22);
  });

  // Race again button
  const bw = 190, bh = 54, bx = W/2 - bw/2, by = H/2 + 106;
  ctx.shadowBlur = 18; ctx.shadowColor = '#e8ff3d';
  ctx.fillStyle  = '#e8ff3d';
  ctx.textAlign  = 'center';
  ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 27); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle    = '#000';
  ctx.font         = 'bold 26px "Bebas Neue", cursive';
  ctx.textBaseline = 'middle';
  ctx.fillText('RACE AGAIN', W/2, by + bh/2 + 1);
  ctx.restore();
}

/* ── Input: hold-to-steer touch, tap to start/retry, keyboard ── */
function mgTouchX(e) {
  const rect = mgCanvas.getBoundingClientRect();
  const scaleX = mgW / rect.width;
  return (e.touches[0].clientX - rect.left) * scaleX;
}

function mgOnTouchStart(e) {
  e.preventDefault();
  if (mg.state !== 'play') { mgDoReset(); mg.state = 'play'; return; }
  const x = mgTouchX(e);
  mg.touchLeft  = x < mgW / 2;
  mg.touchRight = x >= mgW / 2;
}
function mgOnTouchEnd(e) {
  e.preventDefault();
  mg.touchLeft = mg.touchRight = false;
}
function mgOnClick(e) {
  if (mg.state !== 'play') { mgDoReset(); mg.state = 'play'; }
  // On desktop, single click steers left/right momentarily (mouse users)
  else {
    const rect = mgCanvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (mgW / rect.width);
    if (x < mgW / 2) mg.playerVX -= 0.12;
    else             mg.playerVX += 0.12;
  }
}
function mgOnKey(e) {
  if (mg.state !== 'play') {
    if (e.key === 'Enter' || e.key === ' ') { mgDoReset(); mg.state = 'play'; }
    return;
  }
  if (e.key === 'ArrowLeft')  mg.steer = -1;
  if (e.key === 'ArrowRight') mg.steer =  1;
}
function mgOnKeyUp(e) {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') mg.steer = 0;
}

// Init feed banner hi-score on load
(function() {
  const saved = localStorage.getItem(MG_HI_KEY);
  if (saved && saved !== '0') {
    const el = document.getElementById('feedGameHi');
    if (el) el.textContent = saved;
  }
})();
