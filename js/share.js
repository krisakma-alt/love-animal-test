// 공유 기능 — 카카오톡 + LINE + WhatsApp + X + 클립보드

// 카카오 앱 키 (배포 후 본인 앱 키로 교체 필요)
const KAKAO_APP_KEY = 'a3d9feea9f88674ad21c83bd3cb30498';

function initKakao() {
  if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) {
    Kakao.init(KAKAO_APP_KEY);
  }
}

// ── 카카오톡 ─────────────────────────────────────
function shareKakao(animalName, animalEmoji, lang) {
  if (typeof Kakao === 'undefined' || !Kakao.isInitialized()) {
    shareWhatsApp(animalName, animalEmoji, lang); // fallback
    return;
  }
  const url = buildShareUrl(lang, myAnimal);
  const t = I18N[lang];
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: t.ogTitle(animalEmoji + ' ' + animalName),
      description: t.ogDesc,
      imageUrl: `${window.location.origin}/og/og-default.png`,
      link: { mobileWebUrl: url, webUrl: url },
    },
    buttons: [{
      title: lang === 'ko' ? '나도 테스트하기' : 'Take the test',
      link: { mobileWebUrl: url, webUrl: url },
    }],
  });
}

// ── LINE ──────────────────────────────────────────
function shareLine(animalName, animalEmoji, lang) {
  const t = I18N[lang];
  const url = buildShareUrl(lang, myAnimal);
  const text = t.shareResultText(animalEmoji + ' ' + animalName);
  window.open(
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    '_blank', 'noopener'
  );
}

// ── WhatsApp ──────────────────────────────────────
function shareWhatsApp(animalName, animalEmoji, lang) {
  const t = I18N[lang];
  const url = buildShareUrl(lang, myAnimal);
  const text = t.shareResultText(animalEmoji + ' ' + animalName) + '\n' + url;
  window.open(
    `https://wa.me/?text=${encodeURIComponent(text)}`,
    '_blank', 'noopener'
  );
}

// ── X (Twitter) ───────────────────────────────────
function shareTwitter(animalName, animalEmoji, lang) {
  const t = I18N[lang];
  const url = buildShareUrl(lang, myAnimal);
  const text = t.shareResultText(animalEmoji + ' ' + animalName);
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    '_blank', 'noopener'
  );
}

// ── Facebook ──────────────────────────────────────
function shareFacebook(lang) {
  const url = buildShareUrl(lang, myAnimal);
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    '_blank', 'noopener'
  );
}

// ── 상대방에게 테스트 보내기 ──────────────────────
function sendToPartner(myAnimalId, emoji, name, lang) {
  const t = I18N[lang];
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set('from', myAnimalId);
  url.searchParams.set('lang', lang);
  const shareText = t.sendToPartnerText(emoji, name);

  if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: shareText,
        description: t.partnerBannerDesc,
        imageUrl: `${window.location.origin}/og/og-default.png`,
        link: { mobileWebUrl: url.toString(), webUrl: url.toString() },
      },
      buttons: [{
        title: lang === 'ko' ? '내 동물 알아보기' : 'Find My Animal',
        link: { mobileWebUrl: url.toString(), webUrl: url.toString() },
      }],
    });
  } else if (navigator.share) {
    navigator.share({ title: shareText, text: shareText, url: url.toString() }).catch(() => {});
  } else {
    copyToClipboard(url.toString(), lang);
  }
}

// ── 일반 공유 (Web Share API) ─────────────────────
function shareGeneral(animalName, animalEmoji, lang) {
  const t = I18N[lang];
  const shareUrl = buildShareUrl(lang, myAnimal);
  const shareText = t.shareResultText(animalEmoji + ' ' + animalName);
  if (navigator.share) {
    navigator.share({ title: t.ogTitle(animalEmoji + ' ' + animalName), text: shareText, url: shareUrl })
      .catch(() => {});
  } else {
    copyToClipboard(shareUrl, lang);
  }
}

// ── 클립보드 복사 ─────────────────────────────────
function copyToClipboard(text, lang) {
  const t = I18N[lang];
  navigator.clipboard.writeText(text).then(() => {
    showToast(t.shareCopied);
  }).catch(() => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast(t.shareCopied);
  });
}

function buildShareUrl(lang, resultAnimal) {
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set('lang', lang);
  if (resultAnimal) url.searchParams.set('result', resultAnimal);
  return url.toString();
}

// 상대방에게 테스트 링크 보내기
function sendToPartner(myAnimalId, emoji, name, lang) {
  const t = I18N[lang];
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set('from', myAnimalId);
  url.searchParams.set('lang', lang);
  const shareText = t.sendToPartnerText(emoji, name);

  if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: shareText,
        description: t.partnerBannerDesc,
        imageUrl: `${window.location.origin}/og/og-default.png`,
        link: { mobileWebUrl: url.toString(), webUrl: url.toString() },
      },
      buttons: [{
        title: lang === 'ko' ? '내 동물 알아보기' : 'Find My Animal',
        link: { mobileWebUrl: url.toString(), webUrl: url.toString() },
      }],
    });
  } else if (navigator.share) {
    navigator.share({ title: shareText, text: shareText, url: url.toString() })
      .catch(() => {});
  } else {
    copyToClipboard(url.toString(), lang);
  }
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}
