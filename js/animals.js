// 8개 동물 유형 정의 — CSV RL_Types 데이터 기반
const ANIMALS = {
  LION: {
    id: 'LION',
    emoji: '🦁',
    ko: { name: '배고픈 사자', keywords: ['적극적', '열정적', '주도적'], desc: '마음에 드는 사람이 생기면 바로 다가갑니다. 연애에서 늘 주도권을 쥐고 싶어 하고, 감정을 숨기지 않아요. 열정이 넘쳐서 때로는 상대방을 압도할 수 있지만, 그 진심은 누구보다 뜨겁습니다.' },
    en: { name: 'Hungry Lion', keywords: ['Bold', 'Passionate', 'Leading'], desc: 'When you like someone, you go for it. You love taking the lead in relationships and wear your heart on your sleeve. Your passion is undeniable — sometimes overwhelming, but always genuine.' }
  },
  CAT: {
    id: 'CAT',
    emoji: '🐈',
    ko: { name: '여유로운 고양이', keywords: ['여유로운', '관찰형', '자기페이스'], desc: '급하게 서두르지 않아요. 상대방을 충분히 관찰하고 내 방식대로 천천히 다가갑니다. 감정 표현이 은근하지만, 한번 마음을 열면 깊고 진한 애정을 보여줘요.' },
    en: { name: 'Relaxed Cat', keywords: ['Easygoing', 'Observant', 'Self-paced'], desc: 'No rush, no pressure. You observe before you engage, and move at your own pace. Your feelings run deep beneath the surface — once you open up, your affection is genuine and lasting.' }
  },
  DOG: {
    id: 'DOG',
    emoji: '🐕',
    ko: { name: '충성스러운 개', keywords: ['헌신적', '충성스러운', '안정추구'], desc: '한번 좋아하면 온 마음을 다 쏟아붓습니다. 상대방의 행복이 곧 나의 행복이고, 관계의 안정감을 무엇보다 중요하게 생각해요. 때로는 너무 많이 줘서 지칠 수도 있지만, 그 진심은 흔들리지 않아요.' },
    en: { name: 'Loyal Dog', keywords: ['Devoted', 'Faithful', 'Stability-seeking'], desc: 'When you love, you give everything. Your partner\'s happiness is your happiness. You prioritize security and consistency in relationships. You might give more than you receive — but your heart never wavers.' }
  },
  FOX: {
    id: 'FOX',
    emoji: '🦊',
    ko: { name: '호기심 많은 여우', keywords: ['탐색형', '호기심', '신중한'], desc: '연애를 시작하기 전에 충분히 가능성을 탐색합니다. 흥미롭고 자극적인 관계를 좋아하지만, 한곳에 완전히 정착하기까지 시간이 걸려요. 지적인 끌림과 감정적인 설렘을 동시에 원합니다.' },
    en: { name: 'Curious Fox', keywords: ['Exploratory', 'Curious', 'Discerning'], desc: 'You like to explore possibilities before committing. You\'re drawn to relationships that are stimulating and interesting. It takes time to fully settle — you want both intellectual spark and emotional thrill.' }
  },
  CHEETAH: {
    id: 'CHEETAH',
    emoji: '🐆',
    ko: { name: '빠른 치타', keywords: ['즉흥적', '빠른', '감정우선'], desc: '감정이 올라오면 바로 행동합니다. 계획보다는 지금 이 순간의 설렘이 중요해요. 연애의 속도가 빠르고 에너지가 넘치지만, 그 열기가 식으면 다음 설렘을 찾아 떠나기도 합니다.' },
    en: { name: 'Fast Cheetah', keywords: ['Spontaneous', 'Fast-moving', 'Feeling-first'], desc: 'You act on emotion — when the feeling hits, you go. The thrill of the moment matters more than planning. Your romantic energy is electric, though you may move on when the spark fades.' }
  },
  TURTLE: {
    id: 'TURTLE',
    emoji: '🐢',
    ko: { name: '느린 거북이', keywords: ['신중한', '느긋한', '천천히'], desc: '서두르지 않아요. 상대방을 충분히 알아가고, 안전하다고 느낄 때 비로소 마음을 엽니다. 관계가 깊어지는 데 시간이 걸리지만, 한번 쌓인 신뢰는 쉽게 무너지지 않아요.' },
    en: { name: 'Slow Turtle', keywords: ['Careful', 'Unhurried', 'Gradual'], desc: 'You take your time. You need to feel safe before opening up. Building a relationship takes patience — but once trust is established, it\'s rock solid and rarely broken.' }
  },
  OWL: {
    id: 'OWL',
    emoji: '🦉',
    ko: { name: '차가운 부엉이', keywords: ['이성적', '냉정한', '거리유지'], desc: '감정보다 판단이 먼저입니다. 연애에서도 이성적으로 생각하고, 감정에 휩쓸리는 걸 경계해요. 거리감이 있어 보일 수 있지만, 내면에는 깊은 감정이 숨어 있습니다. 믿을 수 있는 사람에게만 그 면을 보여줘요.' },
    en: { name: 'Cold Owl', keywords: ['Rational', 'Composed', 'Guarded'], desc: 'Logic before emotion. Even in love, you think before you feel — or at least try to. You can seem distant, but deep feelings live beneath the surface, revealed only to those who earn your trust.' }
  },
  HEDGEHOG: {
    id: 'HEDGEHOG',
    emoji: '🦔',
    ko: { name: '경계하는 고슴도치', keywords: ['경계심', '방어적', '자기보호'], desc: '쉽게 마음을 열지 않아요. 상처받을까봐 먼저 벽을 쌓고, 상대방이 충분히 안전하다고 느껴질 때까지 기다립니다. 가시가 있어 보이지만, 그 안에는 따뜻하고 섬세한 마음이 있어요.' },
    en: { name: 'Guarded Hedgehog', keywords: ['Wary', 'Self-protective', 'Cautious'], desc: 'You don\'t let people in easily. You build walls to avoid getting hurt, waiting until someone proves they\'re safe. Your spines may push people away — but beneath them lives a warm and tender heart.' }
  }
};

const ANIMAL_ORDER = ['LION', 'CAT', 'DOG', 'FOX', 'CHEETAH', 'TURTLE', 'OWL', 'HEDGEHOG'];
