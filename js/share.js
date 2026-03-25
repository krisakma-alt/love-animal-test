// 공유 기능 — 카카오톡 + Web Share API + 클립보드

// 카카오 앱 키 (배포 후 본인 앱 키로 교체 필요)
const KAKAO_APP_KEY = 'YOUR_KAKAO_APP_KEY_HERE';

function initKakao() {
  if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) {
    Kakao.init(KAKAO_APP_KEY);
  }
}

function shareKakao(animalName, animalEmoji, lang) {
  if (typeof Kakao === 'undefined' || !Kakao.isInitialized()) {
    // 카카오 SDK 없으면 일반 공유로 대체
    shareGeneral(animalName, animalEmoji, lang);
    return;
  }

  const currentUrl = buildShareUrl(lang);
  const t = I18N[lang];

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: t.ogTitle(animalEmoji + ' ' + animalName),
      description: t.ogDesc,
      imageUrl: `${window.location.origin}/og/og-default.png`,
      link: {
        mobileWebUrl: currentUrl,
        webUrl: currentUrl,
      },
    },
    buttons: [
      {
        title: lang === 'ko' ? '나도 테스트하기' : 'Take the test',
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
    ],
  });
}

function shareGeneral(animalName, animalEmoji, lang) {
  const t = I18N[lang];
  const shareUrl = buildShareUrl(lang);
  const shareText = t.shareResultText(animalEmoji + ' ' + animalName);

  if (navigator.share) {
    navigator.share({
      title: t.ogTitle(animalEmoji + ' ' + animalName),
      text: shareText,
      url: shareUrl,
    }).catch(() => {
      // 공유 취소 — 무시
    });
  } else {
    copyToClipboard(shareUrl, lang);
  }
}

function copyToClipboard(text, lang) {
  const t = I18N[lang];
  navigator.clipboard.writeText(text).then(() => {
    showToast(t.shareCopied);
  }).catch(() => {
    // fallback: textarea 방식
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
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
  if (resultAnimal) {
    url.searchParams.set('result', resultAnimal);
  }
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
