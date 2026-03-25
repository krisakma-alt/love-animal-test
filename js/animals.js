// 8개 동물 유형 정의 — CSV RL_Types 데이터 기반
const ANIMALS = {
  LION: {
    id: 'LION',
    emoji: '🦁',
    ko: { name: '배고픈 사자', keywords: ['적극적', '열정적', '주도적'], desc: '마음에 드는 사람이 생기면 바로 다가갑니다. 연애에서 늘 주도권을 쥐고 싶어 하고, 감정을 숨기지 않아요. 열정이 넘쳐서 때로는 상대방을 압도할 수 있지만, 그 진심은 누구보다 뜨겁습니다.' },
    en: { name: 'Hungry Lion', keywords: ['Bold', 'Passionate', 'Leading'], desc: 'When you like someone, you go for it. You love taking the lead in relationships and wear your heart on your sleeve. Your passion is undeniable — sometimes overwhelming, but always genuine.' },
    ja: { name: '情熱のライオン', keywords: ['積極的', '情熱的', 'リード好き'], desc: '気になる人ができたらすぐに行動します。恋愛では常に主導権を握りたく、感情を隠しません。その情熱は時に圧倒的ですが、誰よりも本気で真剣です。' },
    es: { name: 'León Apasionado', keywords: ['Audaz', 'Apasionado', 'Líder'], desc: 'Cuando alguien te gusta, actúas de inmediato. Amas tomar el control en las relaciones y no ocultas tus sentimientos. Tu pasión puede ser abrumadora, pero siempre es genuina.' },
    id: { name: 'Singa Bersemangat', keywords: ['Berani', 'Bersemangat', 'Pemimpin'], desc: 'Ketika kamu menyukai seseorang, kamu langsung bertindak. Kamu suka memimpin dalam hubungan dan tidak menyembunyikan perasaan. Semangatmu luar biasa — kadang menggebu, tapi selalu tulus.' }
  },
  CAT: {
    id: 'CAT',
    emoji: '🐈',
    ko: { name: '여유로운 고양이', keywords: ['여유로운', '관찰형', '자기페이스'], desc: '급하게 서두르지 않아요. 상대방을 충분히 관찰하고 내 방식대로 천천히 다가갑니다. 감정 표현이 은근하지만, 한번 마음을 열면 깊고 진한 애정을 보여줘요.' },
    en: { name: 'Relaxed Cat', keywords: ['Easygoing', 'Observant', 'Self-paced'], desc: 'No rush, no pressure. You observe before you engage, and move at your own pace. Your feelings run deep beneath the surface — once you open up, your affection is genuine and lasting.' },
    ja: { name: 'マイペース猫', keywords: ['のんびり', '観察型', '自分のペース'], desc: '急がず焦らず。相手をじっくり観察してから、自分のペースでゆっくり近づきます。感情表現は控えめですが、一度心を開いたら深くて本物の愛情を見せます。' },
    es: { name: 'Gato Tranquilo', keywords: ['Tranquilo', 'Observador', 'A tu ritmo'], desc: 'Sin prisa, sin presión. Observas antes de actuar y avanzas a tu propio ritmo. Tus sentimientos son profundos — una vez que te abres, tu afecto es genuino y duradero.' },
    id: { name: 'Kucing Santai', keywords: ['Santai', 'Pengamat', 'Mandiri'], desc: 'Tidak terburu-buru. Kamu mengamati dulu sebelum bertindak dan bergerak sesuai ritme sendiri. Perasaanmu dalam di dalam — sekali terbuka, kasih sayangmu tulus dan bertahan lama.' }
  },
  DOG: {
    id: 'DOG',
    emoji: '🐕',
    ko: { name: '충성스러운 개', keywords: ['헌신적', '충성스러운', '안정추구'], desc: '한번 좋아하면 온 마음을 다 쏟아붓습니다. 상대방의 행복이 곧 나의 행복이고, 관계의 안정감을 무엇보다 중요하게 생각해요. 때로는 너무 많이 줘서 지칠 수도 있지만, 그 진심은 흔들리지 않아요.' },
    en: { name: 'Loyal Dog', keywords: ['Devoted', 'Faithful', 'Stability-seeking'], desc: 'When you love, you give everything. Your partner\'s happiness is your happiness. You prioritize security and consistency in relationships. You might give more than you receive — but your heart never wavers.' },
    ja: { name: '忠実な犬', keywords: ['献身的', '忠実', '安定重視'], desc: '一度好きになったら全力を尽くします。相手の幸せが自分の幸せ。関係の安定感を何より大切にします。与えすぎて疲れることもありますが、その真心は揺るぎません。' },
    es: { name: 'Perro Leal', keywords: ['Dedicado', 'Fiel', 'Estable'], desc: 'Cuando amas, lo das todo. La felicidad de tu pareja es tu felicidad. Priorizas la seguridad en las relaciones. Quizás das más de lo que recibes — pero tu corazón nunca vacila.' },
    id: { name: 'Anjing Setia', keywords: ['Berdedikasi', 'Setia', 'Stabil'], desc: 'Ketika mencintai, kamu memberikan segalanya. Kebahagiaan pasanganmu adalah kebahagiaanmu. Kamu mengutamakan stabilitas hubungan. Mungkin memberi lebih dari yang diterima — tapi hatimu tidak pernah goyah.' }
  },
  FOX: {
    id: 'FOX',
    emoji: '🦊',
    ko: { name: '호기심 많은 여우', keywords: ['탐색형', '호기심', '신중한'], desc: '연애를 시작하기 전에 충분히 가능성을 탐색합니다. 흥미롭고 자극적인 관계를 좋아하지만, 한곳에 완전히 정착하기까지 시간이 걸려요. 지적인 끌림과 감정적인 설렘을 동시에 원합니다.' },
    en: { name: 'Curious Fox', keywords: ['Exploratory', 'Curious', 'Discerning'], desc: 'You like to explore possibilities before committing. You\'re drawn to relationships that are stimulating and interesting. It takes time to fully settle — you want both intellectual spark and emotional thrill.' },
    ja: { name: '好奇心旺盛なキツネ', keywords: ['探索型', '好奇心', '慎重'], desc: '恋愛を始める前に十分な可能性を探ります。刺激的で面白い関係が好きですが、一か所に完全に落ち着くまでに時間がかかります。知的な魅力と感情的なときめきを同時に求めます。' },
    es: { name: 'Zorro Curioso', keywords: ['Explorador', 'Curioso', 'Selectivo'], desc: 'Exploras posibilidades antes de comprometerte. Te atraen las relaciones estimulantes e interesantes. Necesitas tiempo para decidirte — buscas tanto la chispa intelectual como la emoción romántica.' },
    id: { name: 'Rubah Penasaran', keywords: ['Penjelajah', 'Penasaran', 'Selektif'], desc: 'Kamu suka menjelajahi kemungkinan sebelum berkomitmen. Tertarik pada hubungan yang menstimulasi dan menarik. Butuh waktu untuk benar-benar mantap — kamu menginginkan percikan intelektual sekaligus gairah emosional.' }
  },
  CHEETAH: {
    id: 'CHEETAH',
    emoji: '🐆',
    ko: { name: '빠른 치타', keywords: ['즉흥적', '빠른', '감정우선'], desc: '감정이 올라오면 바로 행동합니다. 계획보다는 지금 이 순간의 설렘이 중요해요. 연애의 속도가 빠르고 에너지가 넘치지만, 그 열기가 식으면 다음 설렘을 찾아 떠나기도 합니다.' },
    en: { name: 'Fast Cheetah', keywords: ['Spontaneous', 'Fast-moving', 'Feeling-first'], desc: 'You act on emotion — when the feeling hits, you go. The thrill of the moment matters more than planning. Your romantic energy is electric, though you may move on when the spark fades.' },
    ja: { name: 'スピードのチーター', keywords: ['衝動的', 'スピード重視', '感情優先'], desc: '感情が高まったらすぐ行動します。計画よりも今この瞬間のときめきが大切。恋愛のスピードは速くエネルギッシュですが、熱が冷めると次のときめきを求めることも。' },
    es: { name: 'Guepardo Veloz', keywords: ['Espontáneo', 'Rápido', 'Emocional'], desc: 'Actúas por emoción — cuando el sentimiento llega, vas. La emoción del momento importa más que planificar. Tu energía romántica es eléctrica, aunque puedas seguir adelante cuando la chispa se apague.' },
    id: { name: 'Cheetah Cepat', keywords: ['Spontan', 'Cepat', 'Emosional'], desc: 'Kamu bertindak berdasarkan emosi — ketika perasaan datang, kamu langsung pergi. Sensasi saat ini lebih penting dari perencanaan. Energi romantismu menggelegar, meski mungkin berlalu saat percikan memudar.' }
  },
  TURTLE: {
    id: 'TURTLE',
    emoji: '🐢',
    ko: { name: '느린 거북이', keywords: ['신중한', '느긋한', '천천히'], desc: '서두르지 않아요. 상대방을 충분히 알아가고, 안전하다고 느낄 때 비로소 마음을 엽니다. 관계가 깊어지는 데 시간이 걸리지만, 한번 쌓인 신뢰는 쉽게 무너지지 않아요.' },
    en: { name: 'Slow Turtle', keywords: ['Careful', 'Unhurried', 'Gradual'], desc: 'You take your time. You need to feel safe before opening up. Building a relationship takes patience — but once trust is established, it\'s rock solid and rarely broken.' },
    ja: { name: 'ゆっくりカメ', keywords: ['慎重', 'のんびり', '着実'], desc: '焦りません。相手を十分に知って、安全だと感じてからようやく心を開きます。関係が深まるのに時間がかかりますが、一度築いた信頼は簡単には崩れません。' },
    es: { name: 'Tortuga Lenta', keywords: ['Cauteloso', 'Sin prisa', 'Gradual'], desc: 'Te tomas tu tiempo. Necesitas sentirte seguro antes de abrirte. Construir una relación requiere paciencia — pero una vez establecida la confianza, es sólida y duradera.' },
    id: { name: 'Kura-kura Pelan', keywords: ['Hati-hati', 'Tidak terburu', 'Bertahap'], desc: 'Kamu tidak terburu-buru. Perlu merasa aman sebelum membuka diri. Membangun hubungan butuh kesabaran — tapi begitu kepercayaan terjalin, itu kokoh dan jarang hancur.' }
  },
  OWL: {
    id: 'OWL',
    emoji: '🦉',
    ko: { name: '차가운 부엉이', keywords: ['이성적', '냉정한', '거리유지'], desc: '감정보다 판단이 먼저입니다. 연애에서도 이성적으로 생각하고, 감정에 휩쓸리는 걸 경계해요. 거리감이 있어 보일 수 있지만, 내면에는 깊은 감정이 숨어 있습니다. 믿을 수 있는 사람에게만 그 면을 보여줘요.' },
    en: { name: 'Cold Owl', keywords: ['Rational', 'Composed', 'Guarded'], desc: 'Logic before emotion. Even in love, you think before you feel — or at least try to. You can seem distant, but deep feelings live beneath the surface, revealed only to those who earn your trust.' },
    ja: { name: 'クールなフクロウ', keywords: ['理性的', '冷静', '距離感'], desc: '感情より判断が先です。恋愛でも理性的に考え、感情に流されることを警戒します。距離感があるように見えますが、内面には深い感情が隠れています。信頼できる人にだけその面を見せます。' },
    es: { name: 'Búho Frío', keywords: ['Racional', 'Sereno', 'Reservado'], desc: 'Lógica antes que emoción. Incluso en el amor, piensas antes de sentir. Puedes parecer distante, pero profundas emociones viven bajo la superficie, reveladas solo a quienes se ganan tu confianza.' },
    id: { name: 'Burung Hantu Dingin', keywords: ['Rasional', 'Tenang', 'Berjarak'], desc: 'Logika sebelum emosi. Bahkan dalam cinta, kamu berpikir sebelum merasakan. Bisa tampak jauh, tapi perasaan mendalam tersembunyi di dalam, hanya terungkap kepada mereka yang mendapatkan kepercayaanmu.' }
  },
  HEDGEHOG: {
    id: 'HEDGEHOG',
    emoji: '🦔',
    ko: { name: '경계하는 고슴도치', keywords: ['경계심', '방어적', '자기보호'], desc: '쉽게 마음을 열지 않아요. 상처받을까봐 먼저 벽을 쌓고, 상대방이 충분히 안전하다고 느껴질 때까지 기다립니다. 가시가 있어 보이지만, 그 안에는 따뜻하고 섬세한 마음이 있어요.' },
    en: { name: 'Guarded Hedgehog', keywords: ['Wary', 'Self-protective', 'Cautious'], desc: 'You don\'t let people in easily. You build walls to avoid getting hurt, waiting until someone proves they\'re safe. Your spines may push people away — but beneath them lives a warm and tender heart.' },
    ja: { name: '警戒するハリネズミ', keywords: ['警戒心', '防衛的', '自己保護'], desc: '簡単には心を開きません。傷つくことを恐れて先に壁を作り、相手が十分安全だと感じるまで待ちます。トゲがあるように見えますが、その内側には温かく繊細な心があります。' },
    es: { name: 'Erizo Cauteloso', keywords: ['Desconfiado', 'Defensivo', 'Protector'], desc: 'No dejas entrar a las personas fácilmente. Construyes muros para evitar herirte, esperando hasta que alguien demuestre ser seguro. Tus espinas pueden alejar a otros — pero detrás de ellas vive un corazón cálido y tierno.' },
    id: { name: 'Landak Waspada', keywords: ['Waspada', 'Defensif', 'Protektif'], desc: 'Kamu tidak mudah membuka diri. Kamu membangun tembok untuk menghindari luka, menunggu sampai seseorang terbukti aman. Durimu mungkin mendorong orang menjauh — tapi di baliknya ada hati yang hangat dan lembut.' }
  }
};

const ANIMAL_ORDER = ['LION', 'CAT', 'DOG', 'FOX', 'CHEETAH', 'TURTLE', 'OWL', 'HEDGEHOG'];
