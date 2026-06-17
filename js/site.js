/* site.js — shared behavior for all pages */
'use strict';

// ── Theme ────────────────────────────────────────────────────────────────
const THEME_KEY = 'arcarolab-theme';

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const isDark = theme === 'dark';
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  btn.innerHTML = isDark ? sunIcon() : moonIcon();
}

function sunIcon() {
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
    <circle cx="8" cy="8" r="3"/>
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.4 1.4M11.55 11.55l1.4 1.4M3.05 12.95l1.4-1.4M11.55 4.45l1.4-1.4"/>
  </svg>`;
}
function moonIcon() {
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M13.5 9.5A5.5 5.5 0 1 1 6.5 2.5a4.5 4.5 0 0 0 7 7z"/>
  </svg>`;
}


// ── Logo: animated GIF on first page load per session, static PNG thereafter ──
function getLogoSrc() {
  if (sessionStorage.getItem('logo_shown')) {
    return 'img/core-img/logo.png';
  }
  sessionStorage.setItem('logo_shown', '1');
  return 'img/core-img/arcarolab_single.gif';
}

// ── Toolbar & Footer ─────────────────────────────────────────────────────
function renderToolbar(currentPage) {
  const nav = ['Research', 'Species', 'People', 'Publications', 'Tools & Data'];
  const pages = {
    'Research':     'research.html',
    'People':       'people.html',
    'Publications': 'publications.html',
    'Species':      'species.html',
    'Tools & Data': 'tools-and-data.html',
  };
  // Nav links (no toggle inside nav-links)
  const links = nav.map(n => {
    const isCurrent = currentPage === n;
    return `<a href="${pages[n]}"${isCurrent ? ' class="current" aria-current="page"' : ''}>${n}</a>`;
  }).join('');

  // Theme toggle sits AFTER nav-links, at the far right of nav-right
  return `
    <nav id="toolbar" role="banner">
      <a href="index.html" class="logo">
        <img src="${getLogoSrc()}" alt="Arcaro Lab" height="49"/>
      </a>
      <div class="nav-right">
        <div class="nav-links" id="nav-links">${links}</div>
        <button class="theme-toggle" id="theme-toggle" aria-label="Switch theme">${moonIcon()}</button>
        <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;
}

function renderFooter() {
  return `
    <footer>
      <div class="footer-left">
        <span class="footer-name">Arcaro Lab</span>
        <span>&middot; University of Pennsylvania &middot; Department of Psychology</span>
      </div>
    </footer>`;
}

// ── Bootstrap ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const theme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', theme);

  // Inject toolbar
  const toolbarEl = document.getElementById('toolbar');
  const currentPage = document.body.dataset.nav || document.body.dataset.page || '';
  if (toolbarEl) {
    toolbarEl.outerHTML = renderToolbar(currentPage);
    applyTheme(document.documentElement.getAttribute('data-theme') || theme);
  }

  // Inject footer
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = renderFooter();

  // Theme toggle (event delegation)
  document.addEventListener('click', (e) => {
    if (e.target.closest('#theme-toggle')) {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      const next = cur === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    }
    if (e.target.closest('#hamburger')) {
      const navLinks = document.getElementById('nav-links');
      const burger = document.getElementById('hamburger');
      if (!navLinks) return;
      const open = navLinks.classList.toggle('open');
      burger && burger.setAttribute('aria-expanded', String(open));
    }
    if (e.target.closest('.nav-links a')) {
      document.getElementById('nav-links')?.classList.remove('open');
    }
  });

  // Page-specific init
  const page = (document.body.dataset.page || '').toLowerCase().replace(/\s+/g, '');
  if (page === 'home')         initHome();
  if (page === 'people')       initPeople();
  if (page === 'publications') initPublications();
  if (page === 'conferences')  initConferences();
  if (page === 'openscience')  initOpenScience();
  if (page === 'species')      initSpecies();
  if (page === 'research')     initResearch();
});

// Preloader — fade out after page load
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) {
    pre.classList.add('fade-out');
    setTimeout(() => pre.remove(), 700);
  }
});

// ── HOMEPAGE ─────────────────────────────────────────────────────────────
function initHome() {
  renderNews();
  initCarousel();
}

function renderNews() {
  const container = document.getElementById('news-scroll');
  if (!container) return;

  function transmissionLinesHtml() {
    return `<div class="transmission-lines">
      <div class="line line-100"></div>
      <div class="line line-75"></div>
      <div class="line line-56"></div>
      <div class="line line-42"></div>
      <div class="line line-32"></div>
    </div>`;
  }

  // Build one loop-pass: Please stand by → news items → End of transmission + lines
  function buildPass() {
    const standbyHtml = `<div class="news-item news-standby">
      <div class="news-body">Please stand by ...</div>
    </div>`;

    const itemsHtml = NEWS.map(n => {
      const bodyHtml = n.link
        ? `${escHtml(n.body)} <a href="${n.link}" target="_blank" rel="noopener noreferrer">Read &rarr;</a>`
        : escHtml(n.body);
      return `<div class="news-item">
        <div class="news-date">${escHtml(n.date)}</div>
        <div class="news-body">${bodyHtml}</div>
      </div>`;
    }).join('');

    // End transmission: label + lines + large gap spacer before next loop
    const endHtml = `<div class="news-item news-end-transmission">
      <div class="news-transmission-label">End of transmission</div>
      ${transmissionLinesHtml()}
    </div>
    <div class="news-gap-spacer"></div>`;

    return standbyHtml + itemsHtml + endHtml;
  }

  const inner = document.getElementById('news-scroll-inner');
  if (!inner) return;
  const onePass = buildPass();
  inner.innerHTML = onePass + onePass; // duplicate for seamless loop

  let pos = 0;
  const speed = 0.3;

  function scroll() {
    if (pos >= inner.scrollHeight / 2) pos = 0;
    pos += speed;
    container.scrollTop = pos;
    requestAnimationFrame(scroll);
  }
  scroll();
}

// ── CAROUSEL ─────────────────────────────────────────────────────────────
function initCarousel() {
  const track   = document.getElementById('carousel-track');
  const dotsEl  = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track) return;

  const papers = CAROUSEL_PAPERS;  // exact 9 papers from current site
  const N = papers.length;
  const GAP = 28;

  // Triple for seamless infinite loop
  const tripled = [...papers, ...papers, ...papers];

  function cardHtml(p) {
    const titleHtml = p.href
      ? `<a href="${p.href}" target="_blank" rel="noopener noreferrer" class="carousel-title-link">${escHtml(p.title)}</a>`
      : escHtml(p.title);
    return `<div class="carousel-card">
      <div class="carousel-card-img">
        <img src="${p.img}" alt="" loading="lazy" onerror="this.parentElement.classList.add('no-img');this.remove()"/>
      </div>
      <div class="carousel-meta">
        <span class="carousel-year">${p.year}</span>
        <span class="carousel-journal">${escHtml(p.journal)}</span>
      </div>
      <div class="carousel-title">${titleHtml}</div>
      <div class="carousel-author">${escHtml(p.author)}</div>
    </div>`;
  }

  track.innerHTML = tripled.map(p => cardHtml(p)).join('');

  if (dotsEl) {
    dotsEl.innerHTML = papers.map((_, i) =>
      `<span class="dot${i === 0 ? ' active' : ''}" data-i="${i}"></span>`
    ).join('');
  }

  function updateDots(realIdx) {
    dotsEl?.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === realIdx));
  }

  function getCardWidth() {
    const card = track.querySelector('.carousel-card');
    return card ? card.offsetWidth + GAP : 328;
  }

  let current = N;
  let locked = false;

  function jumpTo(idx, animate) {
    track.style.transition = animate ? 'transform 1.5s linear' : 'none';
    track.style.transform = `translateX(-${idx * getCardWidth()}px)`;
    current = idx;
    updateDots(((idx % N) + N) % N);
  }

  track.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;
    if (current >= 2 * N) jumpTo(current - N, false);
    else if (current < N) jumpTo(current + N, false);
    locked = false;
  });

  function advance(delta) {
    if (locked) return;
    locked = true;
    jumpTo(current + delta, true);
  }

  let autoTimer;
  function stopAuto()  { clearTimeout(autoTimer); clearInterval(autoTimer); }
  function startAuto() { autoTimer = setInterval(() => advance(1), 3000); }

  prevBtn?.addEventListener('click', () => { stopAuto(); advance(-1); startAuto(); });
  nextBtn?.addEventListener('click', () => { stopAuto(); advance(1);  startAuto(); });

  // Brief invert flash on every button click (visual feedback the click registered)
  document.querySelectorAll('#carousel-up, #carousel-down, #carousel-prev, #carousel-next')
    .forEach(btn => btn.addEventListener('click', () => {
      btn.classList.add('btn-clicked');
      setTimeout(() => btn.classList.remove('btn-clicked'), 200);
    }));

  dotsEl?.addEventListener('click', (e) => {
    const dot = e.target.closest('.dot');
    if (!dot) return;
    const target = Number(dot.dataset.i);
    const realCurrent = ((current % N) + N) % N;
    stopAuto(); advance(target - realCurrent); startAuto();
  });

  // ── Click-and-drag (mouse) — matches OWL Carousel behaviour
  track.style.cursor = 'grab';
  let isDragging = false;
  let dragStartX = 0;
  let dragBaseOffset = 0;

  track.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    dragStartX = e.clientX;
    dragBaseOffset = current * getCardWidth();
    track.style.transition = 'none';
    track.style.cursor = 'grabbing';
    stopAuto();
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    track.style.transform = `translateX(-${dragBaseOffset - dx}px)`;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = 'grab';
    const dx = e.clientX - dragStartX;
    // Snap to the nearest card index from the current drag position
    const draggedOffset = dragBaseOffset - dx;
    const nearest = Math.round(draggedOffset / getCardWidth());
    locked = true;
    jumpTo(Math.max(0, Math.min(nearest, tripled.length - 1)), true);
    startAuto();
  });

  // ── Touch swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    stopAuto();
  }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) advance(dx < 0 ? 1 : -1);
    startAuto();
  }, { passive: true });

  // Pause autoplay on hover (but not mid-drag)
  const section = track.closest('.carousel-section');
  section?.addEventListener('mouseenter', () => { if (!isDragging) stopAuto(); });
  section?.addEventListener('mouseleave', () => { if (!isDragging) startAuto(); });

  // Init — two RAFs so offsetWidth is computed before first jumpTo
  requestAnimationFrame(() => requestAnimationFrame(() => {
    jumpTo(N, false);
    setTimeout(() => {
      advance(1);
      autoTimer = setInterval(() => advance(1), 3000);
    }, 1000);
  }));
}

// ── PEOPLE PAGE ──────────────────────────────────────────────────────────
function initPeople() {
  const grid = document.getElementById('people-grid');
  if (grid) grid.innerHTML = LAB_MEMBERS.map(personCardHtml).join('');

  const alumniEl = document.getElementById('alumni-list');
  if (alumniEl) {
    alumniEl.innerHTML = ALUMNI.map(a => `
      <div class="list-row">
        ${a.href
          ? `<a href="${a.href}" target="_blank" rel="noopener">${escHtml(a.name)}</a>`
          : `<span class="name">${escHtml(a.name)}</span>`}
        <span class="detail">${escHtml(a.position || '')}</span>
      </div>`).join('');
  }

  const collabEl = document.getElementById('collab-list');
  if (collabEl) {
    collabEl.innerHTML = COLLABORATORS.map(c => `
      <div class="list-row">
        <a href="${c.href}" target="_blank" rel="noopener">${escHtml(c.name)}</a>
        <span class="detail">${escHtml(c.inst)}</span>
      </div>`).join('');
  }
}

function personCardHtml(p) {
  const links = p.links.map(l =>
    `<a class="person-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${escHtml(l.label)}</a>`
  ).join('');
  return `<div class="person-card">
    <div class="person-photo">
      <img src="${p.img}" alt="${escHtml(p.name)}" loading="lazy"/>
    </div>
    <div class="person-name">${escHtml(p.name)}</div>
    <div class="person-role">${escHtml(p.role)}${p.note ? `<div class="person-note">${escHtml(p.note)}</div>` : ''}</div>
    ${links ? `<div class="person-links">${links}</div>` : ''}
  </div>`;
}

// ── PUBLICATIONS / CONFERENCES (unified tab page) ───────────────────────
function initPublications() {
  renderPubConf('publications');
}
function initConferences() {
  renderPubConf('conferences');
}

function groupByYear(pubs) {
  const groups = {};
  pubs.forEach(p => {
    if (!groups[p.year]) groups[p.year] = [];
    groups[p.year].push(p);
  });
  return Object.keys(groups).sort((a, b) => b.localeCompare(a)).map(year => ({ year, items: groups[year] }));
}
function renderPubConf(activeTab) {
  // Render all content immediately (both panels)
  const preprintsEl = document.getElementById('preprints-list');
  if (preprintsEl) {
    preprintsEl.innerHTML = PREPRINTS.map(p => {
      const titleHtml = p.href
        ? `<a href="${p.href}" target="_blank" rel="noopener noreferrer">${escHtml(p.title)}</a>`
        : escHtml(p.title);
      return `<li class="pub-entry">${escHtml(p.author)}. ${titleHtml}. <em>${escHtml(p.venue)}</em>.</li>`;
    }).join('');
  }

  const grouped = groupByYear(PUBLICATIONS);
  const pubsEl  = document.getElementById('publications-list');
  if (pubsEl) {
    pubsEl.innerHTML = grouped.map(g => `
      <div class="pub-group">
        <div class="pub-year">${g.year}</div>
        <ul class="pub-list">
          ${g.items.map(p => {
            const titleHtml = p.href
              ? `<a href="${p.href}" target="_blank" rel="noopener noreferrer">${escHtml(p.title)}</a>`
              : escHtml(p.title);
            return `<li class="pub-entry">${escHtml(p.author)}. (${p.year}). ${titleHtml}. <em>${escHtml(p.journal)}</em>.</li>`;
          }).join('')}
        </ul>
      </div>`).join('');
  }

  const grouped2 = groupByYear(PRESENTATIONS);
  const confEl   = document.getElementById('conferences-list');
  if (confEl) {
    confEl.innerHTML = grouped2.map(g => `
      <div class="pub-group">
        <div class="pub-year">${g.year}</div>
        <ul class="pub-list">
          ${g.items.map(p => `
            <li class="conf-entry">
              <span class="conf-entry-author">${escHtml(p.author)}</span>
              (${escHtml(p.yearDisplay || p.year)}).
              <span class="conf-entry-title">${escHtml(p.title)}</span>.
              <em>${escHtml(p.venue)}</em>.
            </li>`).join('')}
        </ul>
      </div>`).join('');
  }

  // Set initial active tab
  switchTab(activeTab);
}

function switchTab(tab) {
  // Toggle active state on buttons
  document.querySelectorAll('.pub-tab-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.tab === tab)
  );
  // Show/hide panels
  const pubPanel  = document.getElementById('tab-publications');
  const confPanel = document.getElementById('tab-conferences');
  if (pubPanel)  pubPanel.style.display  = tab === 'publications' ? '' : 'none';
  if (confPanel) confPanel.style.display = tab === 'conferences'  ? '' : 'none';
}

// Single delegated listener — works regardless of when buttons are rendered
// and avoids replaceState which throws on file:// protocol
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.pub-tab-btn');
  if (btn && btn.dataset.tab) switchTab(btn.dataset.tab);
});


// ── OPEN SCIENCE PAGE ────────────────────────────────────────────────────
function initOpenScience() {
  const el = document.getElementById('openscience-list');
  if (!el) return;
  el.innerHTML = OPENSCIENCE_PROJECTS.map((p, i) => {
    const reverse = i % 2 === 1;
    const mediaHtml = p.img
      ? `<div class="project-media"><img src="${p.img}" alt="${escHtml(p.imgAlt || '')}" loading="lazy"/></div>`
      : `<div class="project-placeholder">${escHtml(p.title)}</div>`;
    const linksHtml = p.links.map(l =>
      `<a class="project-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${escHtml(l.label)} &rarr;</a>`
    ).join('');
    return `<div class="project-card${reverse ? ' reverse' : ''}" id="${p.id}">
      <div class="project-grid">
        <div>
          <h2>${escHtml(p.title)}</h2>
          <div class="project-tagline">${escHtml(p.tagline)}</div>
          <p class="project-desc">${escHtml(p.description)}</p>
          <div class="project-links">${linksHtml}</div>
        </div>
        <div>${mediaHtml}</div>
      </div>
    </div>`;
  }).join('');
}

// ── SPECIES PAGE ─────────────────────────────────────────────────────────
function initSpecies() {
  const el = document.getElementById('species-list');
  if (!el) return;

  el.innerHTML = SPECIES.map((sp, i) => {
    const reverse = i % 2 === 1;

    const onerror = sp.imgFallback
      ? "this.src='" + sp.imgFallback + "'"
      : "this.closest('.species-img-wrap').style.display='none'";

    const imgSrc = sp.detailImg || sp.img;
    const mediaHtml = '<div class="species-img-wrap">'
      + '<img src="' + imgSrc + '" alt="' + escHtml(sp.imgAlt) + '" loading="lazy" onerror="' + onerror + '"/>'
      + '</div>';

    const papersHtml = sp.papers.map(p => {
      const titleHtml = p.href
        ? '<a href="' + p.href + '" target="_blank" rel="noopener noreferrer">' + escHtml(p.title) + '</a>'
        : escHtml(p.title);
      return '<div class="pub-row">'
        + '<div class="pub-row-meta"><span class="year">' + p.year + '</span>'
        + '<span class="journal">' + escHtml(p.journal) + '</span></div>'
        + '<div class="pub-row-title">' + titleHtml + '</div>'
        + '<div class="pub-row-author">' + escHtml(p.author) + '</div>'
        + '</div>';
    }).join('');

    return '<section class="species-section' + (reverse ? ' reverse' : '') + '" id="' + sp.id + '">'
      + '<div class="species-grid">'
      + '<div>'
      + '<div class="species-label">' + String(i + 1).padStart(2, '0') + '</div>'
      + '<h2 class="species-name">' + escHtml(sp.commonName) + '</h2>'
      + '<div class="species-latin">' + escHtml(sp.latinName) + '</div>'
      + '<p class="species-why">' + escHtml(sp.labWork) + '</p>'
      + '<div class="research-pubs" style="margin-top:28px;">'
      + '<div class="label" style="margin-bottom:14px;">Recent publications</div>'
      + papersHtml
      + '</div>'
      + '</div>'
      + '<div class="species-media">' + mediaHtml + '</div>'
      + '</div>'
      + '</section>';
  }).join('');
}

// ── RESEARCH PAGE ────────────────────────────────────────────────────────
// Removed: page eyebrow "Arcaro Lab · Research" and section numbers (01/02/03)
function initResearch() {
  const el = document.getElementById('research-themes');
  if (!el) return;
  el.innerHTML = RESEARCH_THEMES.map((th, i) => {
    const reverse = i % 2 === 1;
    const mediaHtml = th.media.kind === 'video'
      ? `<div class="research-media-wrap video-wrap">
           <video src="${th.media.src}" poster="${th.media.poster || ''}" muted autoplay loop playsinline></video>
         </div>`
      : `<div class="research-media-wrap">
           <img src="${th.media.src}" alt="${escHtml(th.media.alt || '')}" loading="lazy"/>
         </div>`;
    const pubsHtml = th.pubs.map(p => {
      const titleHtml = p.href
        ? `<a href="${p.href}" target="_blank" rel="noopener noreferrer" class="pub-row-title-link">${escHtml(p.title)}</a>`
        : escHtml(p.title);
      return `
      <div class="pub-row">
        <div class="pub-row-meta">
          <span class="year">${p.year}</span>
          <span class="journal">${escHtml(p.journal)}</span>
        </div>
        <div class="pub-row-title">${titleHtml}</div>
        <div class="pub-row-author">${escHtml(p.author)}</div>
      </div>`;
    }).join('');

    return `<section class="research-section${reverse ? ' reverse' : ''}" id="${th.id}">
      <div class="research-grid">
        <div>
          <h2>${escHtml(th.title)}</h2>
          <div class="research-headline">${escHtml(th.headline)}</div>
          <p class="research-body">${escHtml(th.body)}</p>
          <div class="research-pubs">
            <div class="label" style="margin-bottom:14px;">Recent publications</div>
            ${pubsHtml}
          </div>
        </div>
        <div class="research-media">
          ${mediaHtml}
          <div class="research-media-caption">${escHtml(th.media.caption)}</div>
        </div>
      </div>
    </section>`;
  }).join('');
}

// ── Utilities ────────────────────────────────────────────────────────────
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── EASTER EGG: Retro Mode (Konami Code: ↑↑↓↓←→←→BA) ────────────────────
// Sequence can be entered via keyboard, or by clicking the ↑↓←→ buttons
// in the carousel header (↑↓ appear decorative; ← → also scroll papers).
(function () {
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let seq = 0;

  function feedKonami(key) {
    if (key === KONAMI[seq]) {
      seq++;
      if (seq === KONAMI.length) {
        seq = 0;
        document.body.classList.contains('retro-mode') ? exitRetro() : enterRetro();
      }
    } else {
      seq = (key === KONAMI[0]) ? 1 : 0;
    }
  }

  // Keyboard input (full sequence still works)
  document.addEventListener('keydown', (e) => feedKonami(e.key));

  // Wire up carousel buttons after DOM is ready so they feed the sequence.
  // ↑ ↓ are purely for the code — they have no other effect.
  // ← → also advance the carousel (normal behaviour) AND feed the sequence.
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('carousel-up')
      ?.addEventListener('click', () => feedKonami('ArrowUp'));
    document.getElementById('carousel-down')
      ?.addEventListener('click', () => feedKonami('ArrowDown'));
    // Wrap the existing carousel buttons so their clicks also feed the sequence
    document.getElementById('carousel-prev')
      ?.addEventListener('click', () => feedKonami('ArrowLeft'));
    document.getElementById('carousel-next')
      ?.addEventListener('click', () => feedKonami('ArrowRight'));
  });

  // ── Chiptune generator ───────────────────────────────────────────────────
  function chiptune(notes) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      let t = ctx.currentTime + 0.05;
      notes.forEach(([freq, dur, type = 'square']) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur - 0.01);
        osc.start(t); osc.stop(t + dur);
        t += dur;
      });
    } catch (e) {}
  }

  const JINGLE_ON  = [[330,0.08],[392,0.08],[523,0.08],[659,0.12],
                       [784,0.08],[1047,0.08],[1319,0.25],[1047,0.12],[1319,0.35]];
  const JINGLE_OFF = [[523,0.1],[392,0.1],[330,0.1],[262,0.3]];

  // ── Boot screen ──────────────────────────────────────────────────────────
  function loadRetroFont() {
    if (!document.getElementById('retro-font')) {
      const l = document.createElement('link');
      l.id   = 'retro-font';
      l.rel  = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
      document.head.appendChild(l);
    }
  }

  function enterRetro() {
    loadRetroFont();
    localStorage.setItem('retro_mode', '1');
    chiptune(JINGLE_ON);

    const numPubs = PUBLICATIONS.length + PREPRINTS.length;

    const boot = document.createElement('div');
    boot.id = 'retro-boot';
    boot.innerHTML = `
      <div class="rb-inner">
        <div class="rb-stars">★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★</div>
        <div class="rb-title">
          <div class="rb-t1">ARCARO LAB</div>
          <div class="rb-t2">Visual Neuroscience</div>
          <div class="rb-t3">UNIVERSITY OF PENNSYLVANIA</div>
        </div>
        <div class="rb-divider">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</div>
        <div class="rb-stats">
          <div><span class="rb-stat-label">PUBLICATIONS</span><span class="rb-dots">............</span><span class="rb-stat-val">${numPubs}</span></div>
          <div><span class="rb-stat-label">SPECIES</span><span class="rb-dots">................</span><span class="rb-stat-val">3</span></div>
          <div><span class="rb-stat-label">BRAIN AREAS</span><span class="rb-dots">.........</span><span class="rb-stat-val">100+</span></div>
          <div><span class="rb-stat-label">LIVES</span><span class="rb-dots">..................</span><span class="rb-stat-val">∞</span></div>
        </div>
        <div class="rb-divider">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</div>
        <div class="rb-press">▸ PRESS ANY KEY ◂</div>
        <div class="rb-hint">↑↑↓↓←→←→BA  TO EXIT</div>
      </div>`;
    document.body.appendChild(boot);

    function dismiss() {
      boot.style.opacity = '0';
      setTimeout(() => {
        boot.remove();
        document.body.classList.add('retro-mode');
        swapToEightBit();
        pixelateImages();
      }, 400);
    }

    setTimeout(() => {
      document.addEventListener('keydown', dismiss, { once: true });
      boot.addEventListener('click', dismiss, { once: true });
    }, 900);
  }

  function exitRetro() {
    chiptune(JINGLE_OFF);
    document.body.classList.remove('retro-mode');
    restoreImages();
    restoreEightBit();
    localStorage.removeItem('retro_mode');
  }

  // ── 8-bit image swap — use hand-made *_8bit variants where they exist ─────
  // For the people photos and the rainbowbrain hero we have pre-made 8-bit
  // versions (filename + "_8bit"). In retro mode we swap the <img> src to the
  // _8bit file; on exit we restore the original. These images are excluded
  // from the CSS pixelation below so the hand-made art shows as-is.
  const EIGHTBIT_BASENAMES = [
    'Arcaro', 'xingyu', 'DianaKing', 'MeyerE', 'Monami', 'Reyansh',
    'Romero_Camila', 'rainbowbrain'
  ];

  function eightBitVariant(src) {
    if (!src) return null;
    // Split off any query/hash, operate on the path only.
    const m = src.match(/^([^?#]*?)(\.[a-zA-Z0-9]+)([?#].*)?$/);
    if (!m) return null;
    const [, pathNoExt, ext, tail = ''] = m;
    if (/_8bit$/.test(pathNoExt)) return null; // already 8-bit
    const base = pathNoExt.split('/').pop();
    if (!EIGHTBIT_BASENAMES.includes(base)) return null;
    return pathNoExt + '_8bit' + ext + tail;
  }

  function swapToEightBit() {
    document.querySelectorAll('img').forEach(img => {
      if (img.dataset.eightbitSwapped) return;
      const orig = img.getAttribute('src');
      const variant = eightBitVariant(orig);
      if (!variant) return;
      img.dataset.eightbitSwapped = '1';
      img.dataset.eightbitOrigSrc = orig;
      img.setAttribute('src', variant);
    });
  }

  function restoreEightBit() {
    document.querySelectorAll('img[data-eightbit-swapped]').forEach(img => {
      if (img.dataset.eightbitOrigSrc != null) {
        img.setAttribute('src', img.dataset.eightbitOrigSrc);
      }
      delete img.dataset.eightbitSwapped;
      delete img.dataset.eightbitOrigSrc;
    });
  }

  // ── Image pixelation — pure CSS transform, no canvas, no CORS ─────────────
  // Technique: shrink <img> to 1/FACTOR of container size so the browser
  // downsamples with nearest-neighbour (image-rendering: pixelated applies
  // to downscaling too), then CSS transform: scale(FACTOR) enlarges the
  // blocky result. Each "game pixel" is FACTOR×FACTOR screen pixels.
  const PIX_FACTOR = 8;

  function pixelateImages() {
    const sel = '.carousel-card-img img, .person-photo img, ' +
                '.research-media-wrap img, .project-media img';
    document.querySelectorAll(sel).forEach(img => {
      if (img.dataset.retroPixelated) return;
      // Hand-made 8-bit versions are swapped in directly; don't CSS-pixelate them.
      if (img.dataset.eightbitSwapped) return;

      const box = img.parentElement;
      const cw  = box.clientWidth;
      const ch  = box.clientHeight;
      if (!cw || !ch) return;

      const pw = Math.max(2, Math.floor(cw / PIX_FACTOR));
      const ph = Math.max(2, Math.floor(ch / PIX_FACTOR));

      // Save original inline style and parent state
      img.dataset.retroPixelated  = '1';
      img.dataset.retroOrigStyle  = img.getAttribute('style') || '';
      box.dataset.retroOrigOver   = box.style.overflow || '';
      box.dataset.retroOrigHeight = box.style.height   || '';
      // Pin the container height BEFORE removing img from flow (position:absolute
      // takes it out of the document flow, collapsing auto-height containers).
      box.style.height   = ch + 'px';
      box.style.overflow = 'hidden';

      // Small size → nearest-neighbour downsample → scale back up
      img.style.cssText = (img.dataset.retroOrigStyle ? img.dataset.retroOrigStyle + ';' : '') +
        `position:absolute!important;top:0!important;left:0!important;` +
        `width:${pw}px!important;height:${ph}px!important;` +
        `max-width:none!important;min-width:0!important;` +
        `object-fit:cover!important;` +
        `transform:scale(${PIX_FACTOR})!important;transform-origin:0 0!important;` +
        `image-rendering:pixelated!important;image-rendering:crisp-edges!important;` +
        `transition:none!important;`;
    });
  }

  function restoreImages() {
    document.querySelectorAll('img[data-retro-pixelated]').forEach(img => {
      img.setAttribute('style', img.dataset.retroOrigStyle || '');
      const box = img.parentElement;
      if (box) {
        box.style.overflow = box.dataset.retroOrigOver   || '';
        box.style.height   = box.dataset.retroOrigHeight || '';
        delete box.dataset.retroOrigOver;
        delete box.dataset.retroOrigHeight;
      }
      delete img.dataset.retroPixelated;
      delete img.dataset.retroOrigStyle;
    });
  }

  // ── Persist retro mode across page navigation ────────────────────────────
  if (localStorage.getItem('retro_mode')) {
    loadRetroFont();
    document.addEventListener('DOMContentLoaded', () => {
      document.body.classList.add('retro-mode');
    });
    // Pixelate after images are loaded (no boot screen, no jingle on navigation)
    window.addEventListener('load', () => setTimeout(() => {
      swapToEightBit();
      pixelateImages();
    }, 200));
  }
})();
