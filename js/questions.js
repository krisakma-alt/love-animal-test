// 8문항 심리테스트 질문 — 한국어/영어/일본어/스페인어/인도네시아어
// 각 선택지: { text, scores: { ANIMAL: 점수 } }
// 점수가 높은 동물 유형이 결과로 나옴

const QUESTIONS = {
  ko: [
    {
      id: 1,
      question: '마음에 드는 사람이 생겼다. 나는?',
      options: [
        { text: '바로 다가가서 연락처를 물어본다', scores: { LION: 3, CHEETAH: 2 } },
        { text: '자주 마주치면서 자연스럽게 접근한다', scores: { DOG: 3, FOX: 1 } },
        { text: '관찰하면서 상대가 먼저 신호를 보낼 때까지 기다린다', scores: { CAT: 3, OWL: 1 } },
        { text: '마음속으로만 좋아하다가 기회를 기다린다', scores: { TURTLE: 2, HEDGEHOG: 3 } }
      ]
    },
    {
      id: 2,
      question: '첫 데이트 장소를 정해야 한다. 나는?',
      options: [
        { text: '내가 직접 멋진 곳을 리서치해서 제안한다', scores: { LION: 3, CHEETAH: 2 } },
        { text: '상대방이 좋아할 만한 곳을 생각해서 제안한다', scores: { DOG: 3, CAT: 1 } },
        { text: '어디든 좋다며 상대에게 맡긴다', scores: { TURTLE: 2, CAT: 2 } },
        { text: '몇 가지 선택지를 주고 상대가 고르게 한다', scores: { FOX: 3, OWL: 2 } }
      ]
    },
    {
      id: 3,
      question: '카톡을 보냈는데 몇 시간째 읽씹이다. 나의 반응은?',
      options: [
        { text: '바로 전화를 걸거나 추가 메시지를 보낸다', scores: { LION: 2, DOG: 3 } },
        { text: '마음이 쓰이지만 애써 신경 안 쓰는 척한다', scores: { CAT: 3, FOX: 1 } },
        { text: '이성적으로 바쁜 거겠지 하고 기다린다', scores: { OWL: 3, TURTLE: 2 } },
        { text: '혹시 뭔가 잘못한 게 있나 계속 생각하며 불안해한다', scores: { HEDGEHOG: 3, DOG: 1 } }
      ]
    },
    {
      id: 4,
      question: '연인과 의견 충돌이 생겼을 때 나는?',
      options: [
        { text: '내 의견을 분명하게 말하고 설득한다', scores: { LION: 3, OWL: 1 } },
        { text: '상대 기분이 상하지 않게 최대한 맞춰준다', scores: { DOG: 3, CAT: 1 } },
        { text: '일단 감정이 가라앉을 때까지 거리를 둔다', scores: { OWL: 2, TURTLE: 3 } },
        { text: '상황을 피하고 혼자 속앓이를 한다', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    },
    {
      id: 5,
      question: '이상적인 주말 데이트는?',
      options: [
        { text: '새로운 핫플이나 이벤트를 찾아다니며 활동적으로', scores: { CHEETAH: 3, LION: 2 } },
        { text: '맛집 탐방이나 전시회처럼 취향을 공유하는 시간', scores: { FOX: 3, CAT: 2 } },
        { text: '집에서 같이 영화 보며 편안하게', scores: { DOG: 2, TURTLE: 3 } },
        { text: '각자 하고 싶은 것 하다가 저녁에 만나는 방식', scores: { CAT: 2, OWL: 3 } }
      ]
    },
    {
      id: 6,
      question: '"썸"을 타는 기간에 대한 나의 생각은?',
      options: [
        { text: '빨리 사귀자고 하고 싶다. 썸은 짧을수록 좋다', scores: { CHEETAH: 3, LION: 2 } },
        { text: '어느 정도 서로 알아가는 시간이 필요하다', scores: { DOG: 2, FOX: 3 } },
        { text: '자연스럽게 흘러가다 보면 돼. 굳이 정의 안 해도', scores: { CAT: 3, TURTLE: 2 } },
        { text: '썸 자체가 불안하다. 명확한 관계를 원한다', scores: { HEDGEHOG: 3, OWL: 2 } }
      ]
    },
    {
      id: 7,
      question: '연인의 친구들을 처음 만나는 자리에서 나는?',
      options: [
        { text: '먼저 적극적으로 인사하고 대화를 이끌어 간다', scores: { LION: 3, CHEETAH: 1 } },
        { text: '자연스럽게 분위기에 녹아들며 친해진다', scores: { DOG: 3, FOX: 2 } },
        { text: '조용히 관찰하다가 말이 걸려오면 대화한다', scores: { CAT: 2, OWL: 3 } },
        { text: '많이 긴장되고, 가능하면 자리를 빨리 마치고 싶다', scores: { HEDGEHOG: 3, TURTLE: 2 } }
      ]
    },
    {
      id: 8,
      question: '관계가 잘 풀리지 않는다고 느낄 때 나는?',
      options: [
        { text: '직접 대화를 제안하고 문제를 해결하려 한다', scores: { LION: 3, DOG: 2 } },
        { text: '상황을 지켜보며 자연스럽게 나아지길 기다린다', scores: { CAT: 3, TURTLE: 2 } },
        { text: '이성적으로 상황을 분석하고 혼자 정리한다', scores: { OWL: 3, FOX: 2 } },
        { text: '상처받을까봐 먼저 거리를 두기 시작한다', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    }
  ],

  en: [
    {
      id: 1,
      question: 'You\'ve developed feelings for someone. What do you do?',
      options: [
        { text: 'Go up and ask for their number right away', scores: { LION: 3, CHEETAH: 2 } },
        { text: 'Find ways to run into them and approach naturally', scores: { DOG: 3, FOX: 1 } },
        { text: 'Observe and wait for them to make the first move', scores: { CAT: 3, OWL: 1 } },
        { text: 'Like them quietly and wait for the right moment', scores: { TURTLE: 2, HEDGEHOG: 3 } }
      ]
    },
    {
      id: 2,
      question: 'You need to plan your first date. You:',
      options: [
        { text: 'Research and propose an impressive place yourself', scores: { LION: 3, CHEETAH: 2 } },
        { text: 'Think about what they\'d enjoy and suggest that', scores: { DOG: 3, CAT: 1 } },
        { text: 'Say anywhere is fine and let them decide', scores: { TURTLE: 2, CAT: 2 } },
        { text: 'Give a few options and let them choose', scores: { FOX: 3, OWL: 2 } }
      ]
    },
    {
      id: 3,
      question: 'You sent a message hours ago — still no reply. Your reaction?',
      options: [
        { text: 'Call them or send another message', scores: { LION: 2, DOG: 3 } },
        { text: 'You\'re bothered but pretend you\'re not', scores: { CAT: 3, FOX: 1 } },
        { text: 'Rationally assume they\'re busy and wait', scores: { OWL: 3, TURTLE: 2 } },
        { text: 'Worry that you did something wrong and spiral a bit', scores: { HEDGEHOG: 3, DOG: 1 } }
      ]
    },
    {
      id: 4,
      question: 'When you and your partner disagree, you:',
      options: [
        { text: 'State your point clearly and try to persuade them', scores: { LION: 3, OWL: 1 } },
        { text: 'Try to accommodate them so no feelings get hurt', scores: { DOG: 3, CAT: 1 } },
        { text: 'Create some distance until emotions cool down', scores: { OWL: 2, TURTLE: 3 } },
        { text: 'Avoid the situation and stew internally', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    },
    {
      id: 5,
      question: 'Your ideal weekend date looks like:',
      options: [
        { text: 'Exploring new hotspots or events — keep it active', scores: { CHEETAH: 3, LION: 2 } },
        { text: 'A nice restaurant or exhibition — sharing tastes', scores: { FOX: 3, CAT: 2 } },
        { text: 'Watching movies at home, cozy and relaxed', scores: { DOG: 2, TURTLE: 3 } },
        { text: 'Doing your own things, then meeting for dinner', scores: { CAT: 2, OWL: 3 } }
      ]
    },
    {
      id: 6,
      question: 'What do you think about the early "talking stage"?',
      options: [
        { text: 'Make it official ASAP — the shorter the better', scores: { CHEETAH: 3, LION: 2 } },
        { text: 'Some time to get to know each other is necessary', scores: { DOG: 2, FOX: 3 } },
        { text: 'Just let it flow naturally — no need to label it', scores: { CAT: 3, TURTLE: 2 } },
        { text: 'The ambiguity is stressful — I want clarity', scores: { HEDGEHOG: 3, OWL: 2 } }
      ]
    },
    {
      id: 7,
      question: 'You\'re meeting your partner\'s friends for the first time. You:',
      options: [
        { text: 'Introduce yourself confidently and lead the conversation', scores: { LION: 3, CHEETAH: 1 } },
        { text: 'Blend in naturally and warm up over time', scores: { DOG: 3, FOX: 2 } },
        { text: 'Observe quietly and talk when spoken to', scores: { CAT: 2, OWL: 3 } },
        { text: 'Feel pretty anxious and want it to be over soon', scores: { HEDGEHOG: 3, TURTLE: 2 } }
      ]
    },
    {
      id: 8,
      question: 'When a relationship feels like it\'s not going well, you:',
      options: [
        { text: 'Initiate a conversation and try to resolve things', scores: { LION: 3, DOG: 2 } },
        { text: 'Watch and wait for things to improve on their own', scores: { CAT: 3, TURTLE: 2 } },
        { text: 'Analyze the situation rationally and process alone', scores: { OWL: 3, FOX: 2 } },
        { text: 'Start pulling away to protect yourself from getting hurt', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    }
  ],

  ja: [
    {
      id: 1,
      question: '気になる人ができた。あなたは？',
      options: [
        { text: 'すぐに話しかけて連絡先を聞く', scores: { LION: 3, CHEETAH: 2 } },
        { text: 'よく会う機会を作って自然に近づく', scores: { DOG: 3, FOX: 1 } },
        { text: '観察しながら相手から動くのを待つ', scores: { CAT: 3, OWL: 1 } },
        { text: '心の中で好きでいながらタイミングを待つ', scores: { TURTLE: 2, HEDGEHOG: 3 } }
      ]
    },
    {
      id: 2,
      question: '初デートの場所を決めなければならない。あなたは？',
      options: [
        { text: '自分でリサーチして素敵な場所を提案する', scores: { LION: 3, CHEETAH: 2 } },
        { text: '相手が喜びそうな場所を考えて提案する', scores: { DOG: 3, CAT: 1 } },
        { text: 'どこでもいいと言って相手に任せる', scores: { TURTLE: 2, CAT: 2 } },
        { text: 'いくつか候補を出して相手に選ばせる', scores: { FOX: 3, OWL: 2 } }
      ]
    },
    {
      id: 3,
      question: 'メッセージを送ったのに何時間も既読スルー。あなたは？',
      options: [
        { text: 'すぐ電話するか追加メッセージを送る', scores: { LION: 2, DOG: 3 } },
        { text: '気になるけど気にしていないふりをする', scores: { CAT: 3, FOX: 1 } },
        { text: '理性的に「忙しいんだろう」と待つ', scores: { OWL: 3, TURTLE: 2 } },
        { text: '何か悪いことしたかなとずっと不安になる', scores: { HEDGEHOG: 3, DOG: 1 } }
      ]
    },
    {
      id: 4,
      question: '恋人と意見がぶつかったとき、あなたは？',
      options: [
        { text: '自分の意見をはっきり言って説得する', scores: { LION: 3, OWL: 1 } },
        { text: '相手を傷つけないよう最大限合わせる', scores: { DOG: 3, CAT: 1 } },
        { text: '感情が落ち着くまで距離を置く', scores: { OWL: 2, TURTLE: 3 } },
        { text: '状況を避けて一人でもやもやする', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    },
    {
      id: 5,
      question: '理想の週末デートは？',
      options: [
        { text: '新しいスポットやイベントを回って活動的に', scores: { CHEETAH: 3, LION: 2 } },
        { text: 'グルメや展示会など趣味を共有する時間', scores: { FOX: 3, CAT: 2 } },
        { text: '家で一緒に映画を見てのんびり', scores: { DOG: 2, TURTLE: 3 } },
        { text: '各自やりたいことをして夕方に会う', scores: { CAT: 2, OWL: 3 } }
      ]
    },
    {
      id: 6,
      question: '「好き同士」の曖昧な期間についてあなたは？',
      options: [
        { text: '早く付き合いたい。曖昧な期間は短いほどいい', scores: { CHEETAH: 3, LION: 2 } },
        { text: 'ある程度お互いを知る時間が必要', scores: { DOG: 2, FOX: 3 } },
        { text: '自然に流れればいい。定義しなくてもいい', scores: { CAT: 3, TURTLE: 2 } },
        { text: '曖昧な状況が不安。はっきりした関係がほしい', scores: { HEDGEHOG: 3, OWL: 2 } }
      ]
    },
    {
      id: 7,
      question: '恋人の友達に初めて会う場面で、あなたは？',
      options: [
        { text: '積極的に挨拶して会話をリードする', scores: { LION: 3, CHEETAH: 1 } },
        { text: '自然に場の雰囲気に溶け込んで仲良くなる', scores: { DOG: 3, FOX: 2 } },
        { text: '静かに観察して話しかけられたら話す', scores: { CAT: 2, OWL: 3 } },
        { text: 'かなり緊張して、早く終わりたいと思う', scores: { HEDGEHOG: 3, TURTLE: 2 } }
      ]
    },
    {
      id: 8,
      question: '関係がうまくいっていないと感じたとき、あなたは？',
      options: [
        { text: '直接話し合いを提案して問題を解決しようとする', scores: { LION: 3, DOG: 2 } },
        { text: '様子を見ながら自然に良くなるのを待つ', scores: { CAT: 3, TURTLE: 2 } },
        { text: '状況を冷静に分析して一人で整理する', scores: { OWL: 3, FOX: 2 } },
        { text: '傷つくのが怖くて先に距離を置き始める', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    }
  ],

  es: [
    {
      id: 1,
      question: 'Tienes sentimientos por alguien. ¿Qué haces?',
      options: [
        { text: 'Te acercas directamente y le pides su número', scores: { LION: 3, CHEETAH: 2 } },
        { text: 'Buscas coincidir con esa persona y te aproximas con naturalidad', scores: { DOG: 3, FOX: 1 } },
        { text: 'Observas y esperas a que esa persona dé el primer paso', scores: { CAT: 3, OWL: 1 } },
        { text: 'La quieres en silencio y esperas el momento adecuado', scores: { TURTLE: 2, HEDGEHOG: 3 } }
      ]
    },
    {
      id: 2,
      question: 'Tienes que planear la primera cita. Tú:',
      options: [
        { text: 'Investigas y propones un lugar impresionante tú mismo/a', scores: { LION: 3, CHEETAH: 2 } },
        { text: 'Piensas en lo que le gustaría y lo sugieres', scores: { DOG: 3, CAT: 1 } },
        { text: 'Dices que cualquier lugar está bien y dejas que decida', scores: { TURTLE: 2, CAT: 2 } },
        { text: 'Das varias opciones y dejas que elija', scores: { FOX: 3, OWL: 2 } }
      ]
    },
    {
      id: 3,
      question: 'Enviaste un mensaje hace horas y aún no hay respuesta. ¿Cómo reaccionas?',
      options: [
        { text: 'Le llamas o envías otro mensaje', scores: { LION: 2, DOG: 3 } },
        { text: 'Te molesta pero finges que no te importa', scores: { CAT: 3, FOX: 1 } },
        { text: 'Racionalmente asumes que está ocupado/a y esperas', scores: { OWL: 3, TURTLE: 2 } },
        { text: 'Te preocupa haber hecho algo mal y te angustias un poco', scores: { HEDGEHOG: 3, DOG: 1 } }
      ]
    },
    {
      id: 4,
      question: 'Cuando tú y tu pareja no están de acuerdo, tú:',
      options: [
        { text: 'Expresas tu punto claramente e intentas convencerle', scores: { LION: 3, OWL: 1 } },
        { text: 'Cedes para que no se hieran los sentimientos', scores: { DOG: 3, CAT: 1 } },
        { text: 'Te distancias hasta que las emociones se calmen', scores: { OWL: 2, TURTLE: 3 } },
        { text: 'Evitas la situación y te lo guardas para ti', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    },
    {
      id: 5,
      question: 'Tu cita ideal de fin de semana sería:',
      options: [
        { text: 'Explorar lugares nuevos o eventos — algo activo', scores: { CHEETAH: 3, LION: 2 } },
        { text: 'Un buen restaurante o exposición — compartir gustos', scores: { FOX: 3, CAT: 2 } },
        { text: 'Ver películas en casa, cómodos y relajados', scores: { DOG: 2, TURTLE: 3 } },
        { text: 'Hacer cada uno lo suyo y quedar por la noche', scores: { CAT: 2, OWL: 3 } }
      ]
    },
    {
      id: 6,
      question: '¿Qué piensas sobre el período inicial de "casi novios"?',
      options: [
        { text: 'Quiero hacerlo oficial cuanto antes — cuanto más corto mejor', scores: { CHEETAH: 3, LION: 2 } },
        { text: 'Es necesario tomarse un tiempo para conocerse', scores: { DOG: 2, FOX: 3 } },
        { text: 'Que fluya naturalmente — no hace falta ponerle nombre', scores: { CAT: 3, TURTLE: 2 } },
        { text: 'La ambigüedad me estresa — quiero claridad', scores: { HEDGEHOG: 3, OWL: 2 } }
      ]
    },
    {
      id: 7,
      question: 'Conoces a los amigos de tu pareja por primera vez. Tú:',
      options: [
        { text: 'Te presentas con confianza y lideras la conversación', scores: { LION: 3, CHEETAH: 1 } },
        { text: 'Te integras naturalmente y te vas soltando poco a poco', scores: { DOG: 3, FOX: 2 } },
        { text: 'Observas en silencio y hablas cuando te hablan', scores: { CAT: 2, OWL: 3 } },
        { text: 'Estás muy nervioso/a y quieres que acabe pronto', scores: { HEDGEHOG: 3, TURTLE: 2 } }
      ]
    },
    {
      id: 8,
      question: 'Cuando sientes que la relación no va bien, tú:',
      options: [
        { text: 'Propones hablar directamente e intentas resolver las cosas', scores: { LION: 3, DOG: 2 } },
        { text: 'Observas y esperas que las cosas mejoren solas', scores: { CAT: 3, TURTLE: 2 } },
        { text: 'Analizas la situación racionalmente y lo procesas solo/a', scores: { OWL: 3, FOX: 2 } },
        { text: 'Empiezas a alejarte para protegerte de posibles heridas', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    }
  ],

  id: [
    {
      id: 1,
      question: 'Kamu menyukai seseorang. Apa yang kamu lakukan?',
      options: [
        { text: 'Langsung mendekati dan meminta nomor kontaknya', scores: { LION: 3, CHEETAH: 2 } },
        { text: 'Mencari cara untuk sering bertemu dan mendekati secara alami', scores: { DOG: 3, FOX: 1 } },
        { text: 'Mengamati dan menunggu mereka membuat langkah pertama', scores: { CAT: 3, OWL: 1 } },
        { text: 'Menyukainya diam-diam sambil menunggu momen yang tepat', scores: { TURTLE: 2, HEDGEHOG: 3 } }
      ]
    },
    {
      id: 2,
      question: 'Kamu harus merencanakan kencan pertama. Kamu:',
      options: [
        { text: 'Riset sendiri dan mengusulkan tempat yang mengesankan', scores: { LION: 3, CHEETAH: 2 } },
        { text: 'Memikirkan apa yang mereka sukai dan menyarankannya', scores: { DOG: 3, CAT: 1 } },
        { text: 'Bilang terserah dan membiarkan mereka yang memutuskan', scores: { TURTLE: 2, CAT: 2 } },
        { text: 'Memberi beberapa pilihan dan membiarkan mereka memilih', scores: { FOX: 3, OWL: 2 } }
      ]
    },
    {
      id: 3,
      question: 'Kamu mengirim pesan beberapa jam lalu — belum ada balasan. Reaksimu?',
      options: [
        { text: 'Menelepon atau mengirim pesan lagi', scores: { LION: 2, DOG: 3 } },
        { text: 'Terganggu tapi berpura-pura tidak peduli', scores: { CAT: 3, FOX: 1 } },
        { text: 'Secara rasional berasumsi mereka sibuk dan menunggu', scores: { OWL: 3, TURTLE: 2 } },
        { text: 'Khawatir telah berbuat salah dan sedikit cemas', scores: { HEDGEHOG: 3, DOG: 1 } }
      ]
    },
    {
      id: 4,
      question: 'Saat kamu dan pasangan tidak setuju, kamu:',
      options: [
        { text: 'Menyatakan pendapatmu dengan jelas dan mencoba meyakinkan mereka', scores: { LION: 3, OWL: 1 } },
        { text: 'Mencoba mengakomodasi agar tidak ada yang tersakiti', scores: { DOG: 3, CAT: 1 } },
        { text: 'Menciptakan jarak sampai emosi mereda', scores: { OWL: 2, TURTLE: 3 } },
        { text: 'Menghindari situasi dan memendam sendiri', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    },
    {
      id: 5,
      question: 'Kencan akhir pekan idealmu:',
      options: [
        { text: 'Menjelajahi tempat baru atau acara — tetap aktif', scores: { CHEETAH: 3, LION: 2 } },
        { text: 'Restoran bagus atau pameran — berbagi selera', scores: { FOX: 3, CAT: 2 } },
        { text: 'Nonton film di rumah, santai dan nyaman', scores: { DOG: 2, TURTLE: 3 } },
        { text: 'Masing-masing melakukan hal sendiri, lalu bertemu makan malam', scores: { CAT: 2, OWL: 3 } }
      ]
    },
    {
      id: 6,
      question: 'Apa yang kamu pikirkan tentang fase "PDKT"?',
      options: [
        { text: 'Ingin segera resmi — semakin singkat semakin baik', scores: { CHEETAH: 3, LION: 2 } },
        { text: 'Perlu waktu untuk saling mengenal', scores: { DOG: 2, FOX: 3 } },
        { text: 'Biarkan mengalir alami — tidak perlu diberi label', scores: { CAT: 3, TURTLE: 2 } },
        { text: 'Ambiguitasnya membuat stres — aku ingin kejelasan', scores: { HEDGEHOG: 3, OWL: 2 } }
      ]
    },
    {
      id: 7,
      question: 'Kamu bertemu teman-teman pasanganmu untuk pertama kali. Kamu:',
      options: [
        { text: 'Memperkenalkan diri dengan percaya diri dan memimpin percakapan', scores: { LION: 3, CHEETAH: 1 } },
        { text: 'Menyatu secara alami dan hangat seiring waktu', scores: { DOG: 3, FOX: 2 } },
        { text: 'Mengamati diam-diam dan berbicara ketika diajak bicara', scores: { CAT: 2, OWL: 3 } },
        { text: 'Merasa cukup cemas dan ingin segera selesai', scores: { HEDGEHOG: 3, TURTLE: 2 } }
      ]
    },
    {
      id: 8,
      question: 'Ketika hubungan terasa tidak berjalan dengan baik, kamu:',
      options: [
        { text: 'Mengajak bicara dan mencoba menyelesaikan masalah', scores: { LION: 3, DOG: 2 } },
        { text: 'Menonton dan menunggu hal-hal membaik sendiri', scores: { CAT: 3, TURTLE: 2 } },
        { text: 'Menganalisis situasi secara rasional dan memprosesnya sendiri', scores: { OWL: 3, FOX: 2 } },
        { text: 'Mulai menjauh untuk melindungi diri dari rasa sakit', scores: { HEDGEHOG: 3, TURTLE: 1 } }
      ]
    }
  ]
};
