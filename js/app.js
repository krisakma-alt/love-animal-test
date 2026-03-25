// 메인 앱 로직 — 퀴즈 진행, 결과 계산, 화면 전환

// ── 상태 ──────────────────────────────────────────
let currentLang = 'ko';
let currentQuestion = 0;
let scores = {};
let myAnimal = null;
let partnerAnimal = null; // ?from=LION 으로 넘어온 상대방 동물

// ── 초기화 ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectLang();
  initKakao();
  resetScores();

  const urlParams = new URLSearchParams(window.location.search);

  // ?from=LION — 상대방이 보낸 링크
  const fromParam = urlParams.get('from');
  if (fromParam && ANIMALS[fromParam]) {
    partnerAnimal = fromParam;
  }

  // ?result=LION — 직접 결과 URL 접근
  const resultParam = urlParams.get('result');
  if (resultParam && ANIMALS[resultParam]) {
    myAnimal = resultParam;
    showScreen('result');
    renderResult();
  } else {
    showScreen('intro');
    renderIntro();
  }

  setupLangToggle();
});

// ── 점수 초기화 ───────────────────────────────────
function resetScores() {
  scores = {};
  ANIMAL_ORDER.forEach(a => scores[a] = 0);
  currentQuestion = 0;
  myAnimal = null;
  // partnerAnimal은 URL에서 오므로 리셋하지 않음
}

// ── 화면 전환 ─────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`screen-${name}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ── 인트로 렌더 ───────────────────────────────────
function renderIntro() {
  const t = I18N[currentLang];
  document.getElementById('intro-title').textContent = t.siteTitle;
  document.getElementById('intro-tagline').textContent = t.tagline;
  document.getElementById('intro-desc').textContent = t.siteDesc;

  // 상대방이 보낸 링크로 접근한 경우 배너 표시
  const banner = document.getElementById('partner-banner');
  if (partnerAnimal && ANIMALS[partnerAnimal]) {
    const pa = ANIMALS[partnerAnimal];
    banner.querySelector('.partner-banner-text').textContent =
      t.partnerBanner(pa.emoji, pa[currentLang].name);
    banner.querySelector('.partner-banner-desc').textContent = t.partnerBannerDesc;
    banner.style.display = 'block';
    document.getElementById('start-btn').textContent = t.partnerStartBtn;
  } else {
    banner.style.display = 'none';
    document.getElementById('start-btn').textContent = t.startBtn;
  }

  updateMetaTags();
}

// ── 테스트 시작 ───────────────────────────────────
function startTest() {
  resetScores();
  showScreen('quiz');
  renderQuestion();
}

// ── 질문 렌더 ─────────────────────────────────────
function renderQuestion() {
  const t = I18N[currentLang];
  const questions = QUESTIONS[currentLang];
  const q = questions[currentQuestion];

  // 진행률
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;
  document.getElementById('progress-text').textContent =
    t.questionOf(currentQuestion + 1, questions.length);

  // 질문 텍스트
  const questionEl = document.getElementById('question-text');
  questionEl.classList.remove('slide-in');
  void questionEl.offsetWidth; // reflow
  questionEl.classList.add('slide-in');
  questionEl.textContent = q.question;

  // 선택지
  const optionsEl = document.getElementById('options-container');
  optionsEl.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.style.animationDelay = `${idx * 0.08}s`;
    btn.classList.add('fade-in');
    btn.addEventListener('click', () => selectOption(opt.scores, btn));
    optionsEl.appendChild(btn);
  });
}

// ── 선택지 클릭 ───────────────────────────────────
function selectOption(optScores, btn) {
  // 중복 클릭 방지
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);
  btn.classList.add('selected');

  // 점수 합산
  Object.entries(optScores).forEach(([animal, score]) => {
    scores[animal] = (scores[animal] || 0) + score;
  });

  // 다음 질문 또는 결과
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < QUESTIONS[currentLang].length) {
      renderQuestion();
    } else {
      calcResult();
    }
  }, 400);
}

// ── 결과 계산 ─────────────────────────────────────
function calcResult() {
  // 가장 높은 점수의 동물 찾기
  let maxScore = -1;
  let topAnimals = [];
  Object.entries(scores).forEach(([animal, score]) => {
    if (score > maxScore) {
      maxScore = score;
      topAnimals = [animal];
    } else if (score === maxScore) {
      topAnimals.push(animal);
    }
  });

  // 동점이면 ANIMAL_ORDER 우선순위로 선택
  myAnimal = topAnimals.reduce((best, a) =>
    ANIMAL_ORDER.indexOf(a) < ANIMAL_ORDER.indexOf(best) ? a : best
  );

  // URL 업데이트
  const url = new URL(window.location.href);
  url.searchParams.set('result', myAnimal);
  url.searchParams.set('lang', currentLang);
  window.history.replaceState({}, '', url.toString());

  showScreen('result');
  renderResult();
}

// ── 결과 렌더 ─────────────────────────────────────
function renderResult() {
  const t = I18N[currentLang];
  const animal = ANIMALS[myAnimal];
  const animalData = animal[currentLang];

  // 나의 동물
  document.getElementById('result-title').textContent = t.resultTitle;
  document.getElementById('result-emoji').textContent = animal.emoji;
  document.getElementById('result-name').textContent = animalData.name;
  document.getElementById('result-desc').textContent = animalData.desc;

  // 키워드 태그
  const keywordsEl = document.getElementById('result-keywords');
  keywordsEl.innerHTML = '';
  animalData.keywords.forEach(kw => {
    const tag = document.createElement('span');
    tag.className = 'keyword-tag';
    tag.textContent = kw;
    keywordsEl.appendChild(tag);
  });

  // 궁합 섹션
  document.getElementById('compat-title').textContent = t.compatTitle;
  document.getElementById('compat-desc').textContent = t.compatDesc;
  renderCompatGrid();

  // 상대방 링크로 접근한 경우 → 자동으로 궁합 표시
  if (partnerAnimal && ANIMALS[partnerAnimal]) {
    const pa = ANIMALS[partnerAnimal];
    // 파트너 배너 표시
    const autoBanner = document.getElementById('partner-compat-banner');
    autoBanner.querySelector('.partner-compat-label').textContent =
      t.partnerCompatAuto(pa.emoji, pa[currentLang].name);
    autoBanner.querySelector('.partner-compat-sublabel').textContent =
      t.partnerCompatAutoDesc;
    autoBanner.style.display = 'block';
    // 궁합 자동 선택
    setTimeout(() => showCompatResult(partnerAnimal), 300);
  }

  // 공유 버튼
  renderShareButtons(animal.emoji, animalData.name);

  // 다시하기 버튼
  document.getElementById('retry-btn').textContent = t.retryBtn;

  // 메타 태그 업데이트
  updateMetaTags(animal.emoji + ' ' + animalData.name);
}

// ── 궁합 동물 그리드 ──────────────────────────────
function renderCompatGrid() {
  const grid = document.getElementById('compat-grid');
  grid.innerHTML = '';

  ANIMAL_ORDER.forEach(animalId => {
    const a = ANIMALS[animalId];
    const card = document.createElement('button');
    card.className = 'compat-card';
    if (animalId === myAnimal) card.classList.add('self');
    card.innerHTML = `<span class="compat-emoji">${a.emoji}</span><span class="compat-name">${a[currentLang].name}</span>`;
    card.addEventListener('click', () => showCompatResult(animalId));
    grid.appendChild(card);
  });
}

// ── 궁합 결과 표시 ────────────────────────────────
function showCompatResult(partnerAnimalId) {
  // 선택 상태 표시
  document.querySelectorAll('.compat-card').forEach(c => c.classList.remove('active'));
  const cards = document.querySelectorAll('.compat-card');
  const idx = ANIMAL_ORDER.indexOf(partnerAnimalId);
  if (cards[idx]) cards[idx].classList.add('active');

  const t = I18N[currentLang];
  const combo = COMBINATIONS[`${myAnimal}_${partnerAnimalId}`];
  if (!combo) return;

  const data = combo[currentLang];
  const partnerAnimal = ANIMALS[partnerAnimalId];

  const resultBox = document.getElementById('compat-result-box');
  resultBox.innerHTML = `
    <div class="compat-result-header">
      <span class="compat-result-emoji">${data.emoji}</span>
      <h3 class="compat-result-title">${t.compatResultTitle}</h3>
      <p class="compat-result-line">"${data.line}"</p>
    </div>
    <div class="compat-result-advice">
      <p>${data.advice}</p>
    </div>
  `;
  resultBox.classList.add('show');
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── 공유 버튼 렌더 ────────────────────────────────
function renderShareButtons(emoji, name) {
  const t = I18N[currentLang];

  // 상대방에게 테스트 보내기
  document.getElementById('send-to-partner-btn').textContent = t.sendToPartnerBtn;
  document.getElementById('send-to-partner-btn').onclick = () =>
    sendToPartner(myAnimal, emoji, name, currentLang);

  document.getElementById('share-kakao-btn').textContent = t.shareKakao;
  document.getElementById('share-kakao-btn').onclick = () => shareKakao(name, emoji, currentLang);

  document.getElementById('share-copy-btn').textContent = t.shareCopyBtn;
  document.getElementById('share-copy-btn').onclick = () => {
    const url = buildShareUrl(currentLang, myAnimal);
    copyToClipboard(url, currentLang);
  };

  document.getElementById('share-more-btn').textContent = t.shareMore;
  document.getElementById('share-more-btn').onclick = () => shareGeneral(name, emoji, currentLang);
}

// ── 언어 토글 ─────────────────────────────────────
function setupLangToggle() {
  const toggleKo = document.getElementById('lang-ko');
  const toggleEn = document.getElementById('lang-en');

  updateLangToggleUI();

  toggleKo.addEventListener('click', () => switchLang('ko'));
  toggleEn.addEventListener('click', () => switchLang('en'));
}

function switchLang(lang) {
  currentLang = lang;
  setLangParam(lang);
  updateLangToggleUI();

  // 현재 활성 화면 다시 렌더
  const activeScreen = document.querySelector('.screen.active');
  if (!activeScreen) return;
  const screenId = activeScreen.id;

  if (screenId === 'screen-intro') {
    renderIntro();
  } else if (screenId === 'screen-quiz') {
    renderQuestion();
  } else if (screenId === 'screen-result') {
    renderResult();
  }
}

function updateLangToggleUI() {
  document.getElementById('lang-ko').classList.toggle('active', currentLang === 'ko');
  document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
}

// ── OG 메타 태그 동적 업데이트 ───────────────────
function updateMetaTags(animalLabel) {
  const t = I18N[currentLang];
  const title = animalLabel ? t.ogTitle(animalLabel) : t.siteTitle;
  const desc = t.ogDesc;

  document.title = title;

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', desc);
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', desc);
}

// ── 다시하기 ──────────────────────────────────────
function retryTest() {
  resetScores();
  // URL에서 result 파라미터 제거
  const url = new URL(window.location.href);
  url.searchParams.delete('result');
  window.history.replaceState({}, '', url.toString());
  showScreen('intro');
  renderIntro();
}
