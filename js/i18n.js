// 한국어 / 영어 UI 텍스트 관리
const I18N = {
  ko: {
    // 인트로
    siteTitle: '나의 연애 동물은?',
    siteDesc: '8가지 질문으로 알아보는 나의 연애 유형',
    startBtn: '테스트 시작하기',
    tagline: '나는 연애할 때 어떤 동물일까?',

    // 테스트 진행
    questionOf: (cur, total) => `${cur} / ${total}`,
    progressLabel: '진행 중',

    // 결과 - 나의 유형
    resultTitle: '나의 연애 동물은',
    resultKeywords: '특징',
    compatTitle: '지금 마음이 있는 상대는?',
    compatDesc: '상대방의 연애 동물을 선택하면 두 사람의 관계를 분석해드릴게요',
    compatResultTitle: '두 사람의 관계',

    // 공유
    shareTitle: '공유하기',
    shareCopyBtn: '링크 복사',
    shareCopied: '복사됨!',
    shareKakao: '카카오톡으로 공유',
    shareMore: '더 보기',

    // 다시하기
    retryBtn: '다시 테스트하기',
    shareResultText: (animal) => `나의 연애 동물은 ${animal}! 너는?`,

    // OG / 메타
    ogTitle: (animal) => `나의 연애 동물은 ${animal}`,
    ogDesc: '8가지 연애 상황 질문으로 알아보는 나의 연애 유형 — 64가지 궁합 분석 포함',
  },
  en: {
    // 인트로
    siteTitle: "What's Your Love Animal?",
    siteDesc: '8 questions to reveal your love personality',
    startBtn: 'Start the Test',
    tagline: 'Find out which animal you are in love',

    // 테스트 진행
    questionOf: (cur, total) => `${cur} of ${total}`,
    progressLabel: 'in progress',

    // 결과 - 나의 유형
    resultTitle: 'Your Love Animal Is',
    resultKeywords: 'Traits',
    compatTitle: "Who's on your mind right now?",
    compatDesc: 'Pick their love animal to see how you two match up',
    compatResultTitle: 'Your Relationship Dynamic',

    // 공유
    shareTitle: 'Share',
    shareCopyBtn: 'Copy Link',
    shareCopied: 'Copied!',
    shareKakao: 'Share on KakaoTalk',
    shareMore: 'More',

    // 다시하기
    retryBtn: 'Retake the Test',
    shareResultText: (animal) => `My love animal is ${animal}! What's yours?`,

    // OG / 메타
    ogTitle: (animal) => `My Love Animal Is ${animal}`,
    ogDesc: '8 love scenario questions to discover your relationship personality — includes 64 compatibility results',
  }
};

// 브라우저 언어 자동 감지
function detectLang() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('lang') === 'en') return 'en';
  if (urlParams.get('lang') === 'ko') return 'ko';
  const browserLang = navigator.language || navigator.userLanguage || 'ko';
  return browserLang.startsWith('ko') ? 'ko' : 'en';
}

// URL에 언어 파라미터 업데이트
function setLangParam(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
}
