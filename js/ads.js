// 앱 소개 광고 배너 — 결과 페이지 하단에 표시
// Cloudflare KV (/api/ads)에서 로드, 실패 시 빈 상태

const ADS_API = '/api/ads';

// ── 광고 로드 및 렌더 ─────────────────────────────
async function loadAdsFromFirestore(lang) {
  const container = document.getElementById('ads-section');
  if (!container) return;

  try {
    const res = await fetch(ADS_API);
    if (!res.ok) throw new Error();
    const ads = await res.json();
    renderAds(ads, lang);
  } catch {
    // API 미연결 또는 오류 시 광고 섹션 숨김
    container.style.display = 'none';
  }
}

function renderAds(ads, lang) {
  const container = document.getElementById('ads-section');
  if (!container) return;

  if (!ads || ads.length === 0) {
    container.style.display = 'none';
    return;
  }

  const titleMap = {
    ko: '다른 앱도 둘러보세요',
    en: 'Check out our other apps',
    ja: '他のアプリもチェック',
    es: 'Mira nuestras otras apps',
    id: 'Lihat aplikasi kami lainnya'
  };

  container.innerHTML = `
    <h3 class="ads-title">${titleMap[lang] || titleMap['en']}</h3>
    <div class="ads-grid">
      ${ads.map(ad => renderAdCard(ad, lang)).join('')}
    </div>
  `;
  container.style.display = 'block';
}

function renderAdCard(ad, lang) {
  const hasUrl = ad.url && ad.url !== '#';
  return `
    <a ${hasUrl ? `href="${ad.url}" target="_blank" rel="noopener"` : ''}
       class="ad-card ${!hasUrl ? 'ad-card-soon' : ''}">
      <span class="ad-emoji">${ad.emoji || '📱'}</span>
      <div class="ad-content">
        <span class="ad-title">${ad.title || ''}</span>
        <span class="ad-desc">${ad.desc || ''}</span>
      </div>
    </a>
  `;
}
