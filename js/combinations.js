// 64개 동물 관계 조합 — CSV RL_Types (1).csv 데이터 변환
// 구조: COMBINATIONS['나의동물_상대동물'] = { ko: { line, advice }, en: { line, advice } }

const COMBINATIONS = {
  // LION + *
  'LION_LION': {
    ko: { emoji: '🦁🦁', line: '서로 강하게 밀고 나가는 상태', advice: '두 사람 모두 주도권을 원하는 만큼, 충돌이 잦을 수 있어요. 하지만 그 열정과 에너지가 맞닿으면 누구보다 뜨거운 관계가 될 수 있습니다. 서로 양보하는 법을 배우는 게 핵심이에요.' },
    en: { emoji: '🦁🦁', line: 'Both sides are pushing forward', advice: 'Two lions in the room — clashes are inevitable. But when that passion aligns, the chemistry is electric. The key is learning when to let the other lead.' }
  },
  'LION_CAT': {
    ko: { emoji: '🦁🐈', line: '나는 적극적이고 상대는 관망 중', advice: '당신은 이미 올인했는데 상대는 아직 지켜보는 중입니다. 조급해하지 마세요. 고양이는 억지로 부를수록 멀어져요. 여유를 가지고 기다리면, 상대가 먼저 다가올 수 있어요.' },
    en: { emoji: '🦁🐈', line: 'You are leaning in — they are watching', advice: 'You\'re all in, but they\'re still observing. Don\'t push too hard — the more you chase a cat, the further they drift. Give them space and let them come to you.' }
  },
  'LION_DOG': {
    ko: { emoji: '🦁🐕', line: '서로 마음은 있으나 내가 주도', advice: '두 사람 모두 진심이에요. 당신이 앞장서고 상대가 든든하게 받쳐주는 구조입니다. 상대의 헌신을 당연하게 여기지 않도록 주의하세요. 감사함을 표현하는 게 이 관계를 더 단단하게 만들어요.' },
    en: { emoji: '🦁🐕', line: 'Both care — but you are driving', advice: 'You both have genuine feelings. You lead, they support. Be careful not to take their devotion for granted — expressing gratitude strengthens this bond more than anything.' }
  },
  'LION_FOX': {
    ko: { emoji: '🦁🦊', line: '나는 확실함을 원하고 상대는 탐색 중', advice: '당신은 답을 원하지만 상대는 아직 여러 가능성을 열어두고 있어요. 지금 당장 확신을 요구하면 역효과가 날 수 있습니다. 상대가 탐색하는 시간을 존중해주세요.' },
    en: { emoji: '🦁🦊', line: 'You want clarity — they are exploring', advice: 'You want answers, but they\'re still exploring options. Pushing for commitment now may backfire. Respect their need for time and space to decide.' }
  },
  'LION_CHEETAH': {
    ko: { emoji: '🦁🐆', line: '양쪽 모두 에너지가 높음', advice: '두 사람 모두 빠르고 에너지가 넘쳐요. 함께할 때 불꽃 튀는 케미가 있지만, 둘 다 충동적으로 움직이다 방향이 엇갈릴 수도 있어요. 가끔은 멈추고 서로의 방향을 맞추는 시간이 필요해요.' },
    en: { emoji: '🦁🐆', line: 'High energy on both sides', advice: 'The chemistry is undeniable — but two impulsive forces can collide. Occasionally slow down and make sure you\'re heading in the same direction.' }
  },
  'LION_TURTLE': {
    ko: { emoji: '🦁🐢', line: '내 에너지가 상황보다 앞서 있음', advice: '당신은 이미 한참 앞서가 있는데 상대는 아직 준비가 안 됐을 수 있어요. 재촉하면 상대가 더 움츠러들 수 있습니다. 페이스를 맞추는 노력이 이 관계의 열쇠예요.' },
    en: { emoji: '🦁🐢', line: 'Your energy is ahead of the moment', advice: 'You\'re far ahead — they may not be ready yet. Rushing will only make them retreat further. Learning to match their pace is the real challenge here.' }
  },
  'LION_OWL': {
    ko: { emoji: '🦁🦉', line: '감정과 거리감이 충돌함', advice: '당신의 뜨거운 감정과 상대의 이성적인 거리감이 충돌하고 있어요. 상대를 감정으로 설득하려 하면 오히려 밀어낼 수 있어요. 논리적으로 안정감을 보여주면 상대의 벽이 조금씩 낮아질 거예요.' },
    en: { emoji: '🦁🦉', line: 'Emotion meets distance', advice: 'Your fire meets their composed distance. Emotional appeals may push them further away. Show them stability and logic — their walls will gradually come down.' }
  },
  'LION_HEDGEHOG': {
    ko: { emoji: '🦁🦔', line: '의도적으로 거리를 두는 상태', advice: '상대는 당신의 강한 에너지를 경계하고 있을 수 있어요. 적극적인 접근이 오히려 상대를 더 움츠러들게 만들 수 있습니다. 천천히, 부드럽게 신뢰를 쌓는 방식이 필요해요.' },
    en: { emoji: '🦁🦔', line: 'The distance is intentional', advice: 'Your intensity may be triggering their defenses. An aggressive approach will only make them retreat more. Build trust slowly and softly — patience is your best tool here.' }
  },

  // CAT + *
  'CAT_LION': {
    ko: { emoji: '🐈🦁', line: '상대는 다가오고 나는 지켜보는 중', advice: '상대는 당신에게 적극적으로 다가오고 있어요. 당신이 아직 지켜보는 단계라면 괜찮아요. 하지만 관심이 있다면 작은 신호라도 보내주세요. 상대의 열정이 언제까지나 기다려주진 않을 수 있어요.' },
    en: { emoji: '🐈🦁', line: 'They are leaning in — you are watching', advice: 'They\'re coming toward you with energy. It\'s okay to observe — but if you\'re interested, send a small signal. Their enthusiasm won\'t wait forever.' }
  },
  'CAT_CAT': {
    ko: { emoji: '🐈🐈', line: '가볍고 부담 없는 관계', advice: '두 사람 모두 여유롭고 부담이 없는 관계예요. 평화롭지만, 누군가가 먼저 움직이지 않으면 관계가 그 자리에 머물 수 있어요. 소소한 먼저가 관계를 앞으로 나아가게 합니다.' },
    en: { emoji: '🐈🐈', line: 'Light and unpressured', advice: 'A peaceful, low-pressure dynamic. But without someone making a move, things can stay comfortably stagnant. A small first step goes a long way.' }
  },
  'CAT_DOG': {
    ko: { emoji: '🐈🐕', line: '상대는 안정적이고 나는 편안함', advice: '상대의 안정감 덕분에 당신이 편안하게 자기 페이스를 유지할 수 있어요. 상대는 당신이 마음을 열 때까지 기다려줄 준비가 되어 있습니다. 가끔 당신의 감사함을 표현해주세요.' },
    en: { emoji: '🐈🐕', line: 'They are steady — you are comfortable', advice: 'Their stability gives you the freedom to be yourself at your own pace. They\'ll wait for you to open up. Just remember to show appreciation — they need that reassurance.' }
  },
  'CAT_FOX': {
    ko: { emoji: '🐈🦊', line: '가볍지만 결론은 없는 상태', advice: '두 사람 모두 쉽게 정착하지 않는 스타일이에요. 지금은 가볍고 즐거운 관계지만, 어느 시점에는 서로가 원하는 게 무엇인지 확인하는 대화가 필요할 거예요.' },
    en: { emoji: '🐈🦊', line: 'Easy and undecided', advice: 'You\'re both non-committal types — easygoing and undefined. It\'s fun for now, but at some point you\'ll need to check in and see if you want the same thing.' }
  },
  'CAT_CHEETAH': {
    ko: { emoji: '🐈🐆', line: '상대가 나보다 빠름', advice: '상대는 당신보다 훨씬 빠르게 움직이고 있어요. 당신이 아직 탐색 중인데 상대는 이미 다음 단계를 원할 수 있어요. 현재 당신의 속도를 솔직하게 전달하는 게 중요해요.' },
    en: { emoji: '🐈🐆', line: 'They are moving faster than you', advice: 'They\'re several steps ahead of you. While you\'re still figuring things out, they may already want the next stage. Be honest about where you are.' }
  },
  'CAT_TURTLE': {
    ko: { emoji: '🐈🐢', line: '아무도 서두르지 않음', advice: '두 사람 모두 천천히 가는 타입이에요. 편안하고 여유로운 관계지만, 관계가 발전하려면 누군가 먼저 작은 발걸음을 내딛어야 해요.' },
    en: { emoji: '🐈🐢', line: 'No one is rushing', advice: 'Both of you are in no hurry — comfortable, unhurried. But for things to grow, someone needs to take a small step forward.' }
  },
  'CAT_OWL': {
    ko: { emoji: '🐈🦉', line: '조용하고 멀게 느껴짐', advice: '두 사람 모두 감정 표현이 많지 않아요. 서로 마음이 있어도 신호가 잘 안 보일 수 있습니다. 작은 관심 표현이 상대에게 큰 의미가 될 수 있어요.' },
    en: { emoji: '🐈🦉', line: 'Quiet and distant', advice: 'Neither of you shows emotions openly. Even if feelings exist, they stay invisible. A small gesture of interest can mean everything to the other person.' }
  },
  'CAT_HEDGEHOG': {
    ko: { emoji: '🐈🦔', line: '의도적으로 거리를 둠', advice: '상대는 경계를 치고 있고 당신도 서두르지 않아요. 지금은 아무 문제없지만, 관계를 진전시키려면 한쪽이 먼저 따뜻하게 다가가야 해요.' },
    en: { emoji: '🐈🦔', line: 'The distance is intentional', advice: 'They\'re guarded and you\'re not rushing. That\'s fine — but to move forward, one of you needs to offer warmth first.' }
  },

  // DOG + *
  'DOG_LION': {
    ko: { emoji: '🐕🦁', line: '상대가 밀고 나는 지켜주는 역할', advice: '상대가 앞장서고 당신이 든든하게 받쳐주는 구조예요. 이 역할이 편하다면 좋지만, 당신의 감정과 필요도 표현해야 해요. 일방적인 지지는 오래가기 어렵습니다.' },
    en: { emoji: '🐕🦁', line: 'They are pushing — you are steady', advice: 'They lead, you support. That works — but your feelings and needs matter too. One-sided support eventually runs dry.' }
  },
  'DOG_CAT': {
    ko: { emoji: '🐕🐈', line: '나는 항상 있고 상대는 익숙해함', advice: '당신은 언제나 그 자리에 있고, 상대는 그것에 익숙해졌을 수 있어요. 당신의 헌신이 당연하게 여겨지고 있진 않은지 점검해보세요. 때로는 한 발 물러서는 것도 방법이에요.' },
    en: { emoji: '🐕🐈', line: 'You are always there — they are comfortable', advice: 'You\'re always present, and they\'ve gotten used to it. Check if your devotion is being taken for granted. Sometimes stepping back a little creates the space they need to appreciate you.' }
  },
  'DOG_DOG': {
    ko: { emoji: '🐕🐕', line: '서로 노력하지만 점점 부담됨', advice: '두 사람 모두 열심히 노력하고 있어요. 하지만 서로 너무 많이 주려 하다 보면 부담이 쌓일 수 있어요. 가끔은 아무것도 안 해도 되는 여유를 서로에게 주세요.' },
    en: { emoji: '🐕🐕', line: 'Mutual effort — growing heavy', advice: 'You\'re both trying so hard. But too much giving can create pressure. Give each other permission to just be — without always performing devotion.' }
  },
  'DOG_FOX': {
    ko: { emoji: '🐕🦊', line: '나는 확실하고 상대는 고민 중', advice: '당신은 이미 마음을 정했지만 상대는 아직 저울질 중이에요. 기다리는 게 힘들겠지만, 상대를 재촉하면 역효과가 날 수 있어요. 당신의 일관된 모습이 상대에게 가장 좋은 설득이에요.' },
    en: { emoji: '🐕🦊', line: 'You are committed — they are undecided', advice: 'You\'re sure; they\'re still weighing things up. Waiting is hard, but pushing will backfire. Your consistent presence is the most convincing argument you can make.' }
  },
  'DOG_CHEETAH': {
    ko: { emoji: '🐕🐆', line: '상대의 속도가 흐름을 주도', advice: '상대가 빠르게 움직이고 당신은 그 흐름에 맞추려 하고 있어요. 당신의 페이스가 있다면 솔직하게 말해주세요. 상대의 속도에 무조건 따라가다 지칠 수 있어요.' },
    en: { emoji: '🐕🐆', line: 'Their pace leads the flow', advice: 'They move fast and you\'re trying to keep up. If you have your own rhythm, say so. Running at someone else\'s pace indefinitely can leave you exhausted.' }
  },
  'DOG_TURTLE': {
    ko: { emoji: '🐕🐢', line: '나는 곁에 있고 상대는 느림', advice: '당신은 준비가 됐는데 상대는 아직 시간이 필요해요. 곁에 있어주는 것 자체가 상대에게 큰 위안이 됩니다. 조급해하지 말고 그 자리를 지켜주세요.' },
    en: { emoji: '🐕🐢', line: 'You are present — they are slow', advice: 'You\'re ready, they need more time. Simply being there is a huge comfort to them. Stay steady — your presence matters more than you know.' }
  },
  'DOG_OWL': {
    ko: { emoji: '🐕🦉', line: '감정과 절제가 맞부딪힘', advice: '당신의 따뜻한 감정과 상대의 이성적인 절제가 충돌하고 있어요. 감정으로 다가가면 상대가 불편해할 수 있어요. 안정적이고 꾸준한 모습을 보여주는 게 더 효과적이에요.' },
    en: { emoji: '🐕🦉', line: 'Feeling meets restraint', advice: 'Your warmth collides with their cool logic. Coming in too emotional may make them uncomfortable. Consistency and stability are more persuasive than emotional expression.' }
  },
  'DOG_HEDGEHOG': {
    ko: { emoji: '🐕🦔', line: '의도적으로 거리를 둠', advice: '상대는 가시를 세우고 있어요. 당신의 헌신이 상대를 감동시킬 수 있지만, 너무 들이밀면 오히려 도망갈 수 있어요. 천천히, 압박 없이 신뢰를 쌓아가세요.' },
    en: { emoji: '🐕🦔', line: 'The distance is intentional', advice: 'Their spines are up. Your devotion can move them — but pushing too hard may make them flee. Build trust gradually, without pressure.' }
  },

  // FOX + *
  'FOX_LION': {
    ko: { emoji: '🦊🦁', line: '상대는 더 원하고 나는 시험 중', advice: '상대는 확신에 차 있고 당신은 아직 탐색 중이에요. 상대의 열정을 가지고 놀듯이 이용하지 않도록 주의하세요. 진지하게 받아들일 준비가 됐을 때 솔직하게 말해주세요.' },
    en: { emoji: '🦊🦁', line: 'They want more — you are testing', advice: 'They\'re certain; you\'re still running tests. Be careful not to play with their feelings. When you\'re ready to be serious, say so honestly.' }
  },
  'FOX_CAT': {
    ko: { emoji: '🦊🐈', line: '가벼운 관심만 있는 상태', advice: '두 사람 모두 가볍게 관심을 두고 있지만 깊이 들어가지 않아요. 지금 이 관계가 어디로 가길 원하는지 스스로에게 물어보세요.' },
    en: { emoji: '🦊🐈', line: 'Light interest with no pressure', advice: 'You\'re both mildly interested but not diving deep. Ask yourself where you actually want this to go.' }
  },
  'FOX_DOG': {
    ko: { emoji: '🦊🐕', line: '상대는 안정적이고 나는 확신 없음', advice: '상대는 당신에게 헌신할 준비가 되어 있지만, 당신은 아직 확신이 없어요. 상대의 감정을 오래 유보시키는 건 공정하지 않아요. 솔직하게 현재 마음 상태를 나눠주세요.' },
    en: { emoji: '🦊🐕', line: 'They are steady — you are unsure', advice: 'They\'re ready to commit; you\'re not there yet. Keeping someone in limbo isn\'t fair. Share where your head is honestly.' }
  },
  'FOX_FOX': {
    ko: { emoji: '🦊🦊', line: '서로 맴돌며 탐색 중', advice: '두 사람 모두 탐색 중이고 선뜻 먼저 나서지 않아요. 재미있는 탐색 게임이지만, 언제까지나 맴돌 수는 없어요. 용기 있는 한 발이 관계를 바꿀 수 있어요.' },
    en: { emoji: '🦊🦊', line: 'Both are circling', advice: 'You\'re both orbiting each other, neither willing to commit. It\'s an interesting dance — but circles don\'t move forward. One brave step can change everything.' }
  },
  'FOX_CHEETAH': {
    ko: { emoji: '🦊🐆', line: '상대가 너무 빠르게 움직임', advice: '상대는 이미 저만치 앞서가 있어요. 당신이 아직 탐색 중인데 상대는 빠르게 결론을 원할 수 있어요. 페이스 조절이 필요하다면 솔직하게 말해주세요.' },
    en: { emoji: '🦊🐆', line: 'They are rushing ahead', advice: 'They\'re way out in front. While you\'re still exploring, they may be rushing toward a conclusion. If you need to slow things down, say it.' }
  },
  'FOX_TURTLE': {
    ko: { emoji: '🦊🐢', line: '탐색과 인내가 만남', advice: '당신의 호기심과 상대의 느긋함이 의외로 잘 맞을 수 있어요. 서로를 억지로 바꾸려 하지 않으면, 이 관계는 조용하지만 깊은 탐험이 될 수 있어요.' },
    en: { emoji: '🦊🐢', line: 'Exploration meets patience', advice: 'Your curiosity and their patience can complement each other surprisingly well. Don\'t try to change each other — this can be a quiet but deeply meaningful journey.' }
  },
  'FOX_OWL': {
    ko: { emoji: '🦊🦉', line: '호기심과 거리감이 공존', advice: '당신의 호기심과 상대의 이성적인 거리감이 공존하고 있어요. 서로 지적인 대화에서 끌림을 느낄 수 있어요. 감정보다 대화와 교류로 관계를 쌓아가는 게 자연스러워요.' },
    en: { emoji: '🦊🦉', line: 'Curiosity meets distance', advice: 'Your curiosity and their rational distance can actually click. Intellectual connection may be your bridge. Build through conversation, not emotion.' }
  },
  'FOX_HEDGEHOG': {
    ko: { emoji: '🦊🦔', line: '의도적으로 거리를 둠', advice: '상대는 경계를 치고 있고 당신도 탐색 중이에요. 서두르지 않는 것 자체가 상대에게 좋은 신호가 될 수 있어요. 천천히 신뢰를 쌓아가세요.' },
    en: { emoji: '🦊🦔', line: 'The distance is intentional', advice: 'They\'re guarded, and you\'re still exploring. Your unhurried approach is actually reassuring to them. Take your time — trust builds slowly here.' }
  },

  // CHEETAH + *
  'CHEETAH_LION': {
    ko: { emoji: '🐆🦁', line: '서로 에너지가 매우 높음', advice: '두 사람 모두 에너지가 폭발적이에요. 함께하면 엄청난 시너지가 날 수 있지만, 방향이 다르면 충돌도 커요. 같은 방향을 바라보고 있는지 확인해보세요.' },
    en: { emoji: '🐆🦁', line: 'Both energy levels are high', advice: 'Explosive chemistry — but also explosive potential for conflict. Make sure you\'re pointed in the same direction before sprinting together.' }
  },
  'CHEETAH_CAT': {
    ko: { emoji: '🐆🐈', line: '나는 빠르고 상대는 느림', advice: '당신은 이미 달리고 있는데 상대는 여유롭게 지켜보고 있어요. 속도를 조금 낮춰서 상대가 따라올 수 있게 해주세요. 혼자 달리면 결국 혼자가 돼요.' },
    en: { emoji: '🐆🐈', line: 'You are fast — they are not', advice: 'You\'re sprinting while they\'re strolling. Slow down enough to let them keep up — because running alone means being alone.' }
  },
  'CHEETAH_DOG': {
    ko: { emoji: '🐆🐕', line: '나는 서두르고 상대는 안정적', advice: '당신의 빠른 감정과 상대의 안정적인 성격이 대조를 이뤄요. 상대의 페이스가 답답하게 느껴질 수 있지만, 그 안정감이 당신에게 좋은 균형이 될 수 있어요.' },
    en: { emoji: '🐆🐕', line: 'You are rushing — they are steady', advice: 'Your pace and their steadiness create an interesting contrast. Their stability may feel slow to you — but it might be exactly the anchor you need.' }
  },
  'CHEETAH_FOX': {
    ko: { emoji: '🐆🦊', line: '속도와 망설임이 충돌', advice: '당신은 빠르게 결론을 내리고 싶은데 상대는 아직 탐색 중이에요. 기다리는 게 힘들겠지만, 서두르면 상대가 더 뒤로 물러날 수 있어요.' },
    en: { emoji: '🐆🦊', line: 'Speed meets hesitation', advice: 'You want to reach the finish line; they\'re still running laps of consideration. Pushing harder will make them retreat. Patience is your hidden superpower here.' }
  },
  'CHEETAH_CHEETAH': {
    ko: { emoji: '🐆🐆', line: '양쪽 모두 너무 빠름', advice: '두 사람 모두 충동적으로 빠르게 움직여요. 처음의 강렬한 끌림이 굉장하지만, 감정이 식으면 두 사람 모두 다음을 찾아 떠날 위험이 있어요. 속도 이면의 감정을 제대로 확인해보세요.' },
    en: { emoji: '🐆🐆', line: 'Both sides are moving fast', advice: 'The initial pull is intense — but when two cheetahs run fast together, they can run right past each other. Check what\'s underneath the speed.' }
  },
  'CHEETAH_TURTLE': {
    ko: { emoji: '🐆🐢', line: '속도가 완전히 맞지 않음', advice: '페이스 차이가 매우 커요. 당신이 답답해할 수 있고 상대는 부담스러울 수 있어요. 서로의 속도를 인정하고 중간 지점을 찾는 노력이 이 관계의 핵심이에요.' },
    en: { emoji: '🐆🐢', line: 'The pace is completely misaligned', advice: 'The speed difference is significant. You may feel frustrated; they may feel overwhelmed. Finding a middle ground — and accepting it — is what this relationship needs.' }
  },
  'CHEETAH_OWL': {
    ko: { emoji: '🐆🦉', line: '충동과 통제가 부딪힘', advice: '당신의 즉흥적인 감정과 상대의 이성적인 통제가 충돌해요. 처음에는 매력적인 대조일 수 있지만, 장기적으로는 갈등이 될 수 있어요. 서로의 방식을 이해하는 대화가 필요해요.' },
    en: { emoji: '🐆🦉', line: 'Impulse meets restraint', advice: 'Your spontaneity clashes with their control. Initially this contrast may be attractive — long-term it can create friction. Understanding each other\'s approach is essential.' }
  },
  'CHEETAH_HEDGEHOG': {
    ko: { emoji: '🐆🦔', line: '의도적으로 거리를 둠', advice: '당신의 빠른 접근이 상대를 놀라게 했을 수 있어요. 고슴도치는 갑작스러운 자극에 가시를 세워요. 속도를 확 낮추고 천천히 다가가야 해요.' },
    en: { emoji: '🐆🦔', line: 'The distance is intentional', advice: 'Your speed may have startled them. Hedgehogs raise their spines when surprised. Drastically slow down — patient and gentle is the only way in.' }
  },

  // TURTLE + *
  'TURTLE_LION': {
    ko: { emoji: '🐢🦁', line: '상대가 상황보다 앞서 있음', advice: '상대가 훨씬 빠르게 달리고 있어요. 당신의 페이스를 솔직하게 전달해주세요. 상대가 당신을 위해 속도를 늦출 수 있도록요.' },
    en: { emoji: '🐢🦁', line: 'They are ahead of the moment', advice: 'They\'re running far ahead of you. Honestly communicate your pace — give them the chance to slow down for you.' }
  },
  'TURTLE_CAT': {
    ko: { emoji: '🐢🐈', line: '서로 서두르지 않음', advice: '두 사람 모두 여유롭고 느긋해요. 편안한 관계지만, 이 상태가 계속되면 관계가 발전하지 않을 수 있어요. 작은 첫걸음이 큰 변화를 만들어요.' },
    en: { emoji: '🐢🐈', line: 'Neither side is rushing', advice: 'Comfortable and unhurried — a peaceful dynamic. But without movement, things don\'t grow. One small step forward can make all the difference.' }
  },
  'TURTLE_DOG': {
    ko: { emoji: '🐢🐕', line: '상대는 안정적이고 나는 조심스러움', advice: '상대의 든든한 존재감 덕분에 당신이 조심스럽게 마음을 열어갈 수 있어요. 서두르지 않아도 돼요. 상대는 기다릴 준비가 되어 있어요.' },
    en: { emoji: '🐢🐕', line: 'They are steady — you are reserved', advice: 'Their solid presence gives you room to open up at your own pace. No need to rush — they\'re prepared to wait for you.' }
  },
  'TURTLE_FOX': {
    ko: { emoji: '🐢🦊', line: '느림과 호기심의 만남', advice: '상대의 호기심이 당신을 끌어내려 할 수 있어요. 그 자극이 흥미롭게 느껴진다면, 조금씩 반응해보세요. 당신의 느긋한 깊이에 상대가 매력을 느낄 수 있어요.' },
    en: { emoji: '🐢🦊', line: 'Slow pace meets curiosity', advice: 'Their curiosity may gently draw you out. If it feels interesting, let yourself respond a little. Your quiet depth may be exactly what fascinates them.' }
  },
  'TURTLE_CHEETAH': {
    ko: { emoji: '🐢🐆', line: '속도가 완전히 불일치', advice: '상대의 속도가 당신에게는 너무 빠를 수 있어요. 부담스럽다면 솔직하게 말해주세요. 억지로 맞추려 하면 관계가 아니라 경쟁이 될 수 있어요.' },
    en: { emoji: '🐢🐆', line: 'The pace is completely misaligned', advice: 'Their speed can feel overwhelming. Speak up if it\'s too much — trying to match a pace that isn\'t yours turns connection into a race.' }
  },
  'TURTLE_TURTLE': {
    ko: { emoji: '🐢🐢', line: '차분하고 여유로운 상태', advice: '두 사람 모두 느긋하고 차분해요. 이 여유로운 관계가 힘은 되지만, 언제까지나 제자리에 있을 수는 없어요. 서로의 손을 잡고 천천히라도 앞으로 나아가 보세요.' },
    en: { emoji: '🐢🐢', line: 'Calm and unhurried', advice: 'Peaceful and grounded — this relationship has a calming quality. But even turtles eventually move forward. Hold hands and take slow, gentle steps ahead.' }
  },
  'TURTLE_OWL': {
    ko: { emoji: '🐢🦉', line: '조용하고 통제된 분위기', advice: '두 사람 모두 감정 표현이 적고 차분해요. 조용하지만 서로 이해하는 관계가 될 수 있어요. 하지만 감정을 너무 속에 담아두면 서로 모를 수 있어요. 가끔은 속마음을 나눠주세요.' },
    en: { emoji: '🐢🦉', line: 'Quiet and controlled', advice: 'Both reserved and composed — there\'s an unspoken understanding here. But too much silence can create distance. Share your inner world occasionally.' }
  },
  'TURTLE_HEDGEHOG': {
    ko: { emoji: '🐢🦔', line: '의도적으로 거리를 둠', advice: '두 사람 모두 쉽게 열리지 않아요. 서로 기다리기만 하면 아무것도 안 일어날 수 있어요. 작은 용기가 이 관계를 움직일 열쇠예요.' },
    en: { emoji: '🐢🦔', line: 'The distance is intentional', advice: 'Neither of you opens easily. If you both just wait, nothing happens. A small act of courage is the key that unlocks this.' }
  },

  // OWL + *
  'OWL_LION': {
    ko: { emoji: '🦉🦁', line: '감정과 억제가 충돌', advice: '상대의 열정이 당신에게는 부담스러울 수 있어요. 하지만 그 열정 뒤에 진심이 있다면, 조금씩 반응해주세요. 당신의 차분함이 상대에게 좋은 균형이 될 수 있어요.' },
    en: { emoji: '🦉🦁', line: 'Emotion meets restraint', advice: 'Their passion may feel overwhelming to you. But if the feeling is genuine, let yourself respond a little. Your composure can be a stabilizing force they actually need.' }
  },
  'OWL_CAT': {
    ko: { emoji: '🦉🐈', line: '차분하지만 거리 있음', advice: '두 사람 모두 차분하고 자기 페이스가 있어요. 서로를 있는 그대로 존중하는 관계가 될 수 있지만, 감정적 연결을 위한 노력이 필요해요.' },
    en: { emoji: '🦉🐈', line: 'Detached and calm', advice: 'Both self-paced and composed — you can respect each other\'s space. But an emotional connection still needs to be built intentionally.' }
  },
  'OWL_DOG': {
    ko: { emoji: '🦉🐕', line: '생각과 감정이 만남', advice: '상대의 따뜻한 감정이 당신의 이성적인 벽을 조금씩 녹일 수 있어요. 억지로 감정을 내보일 필요는 없지만, 상대의 헌신에 고마움을 표현해주는 것만으로도 충분해요.' },
    en: { emoji: '🦉🐕', line: 'Thinking meets feeling', advice: 'Their warmth can gradually melt your rational walls. You don\'t need to force emotion — but acknowledging their devotion with gratitude goes a long way.' }
  },
  'OWL_FOX': {
    ko: { emoji: '🦉🦊', line: '호기심과 경계가 공존', advice: '상대의 호기심이 당신에게 흥미롭게 느껴질 수 있어요. 지적인 탐구를 함께 즐기는 것이 이 관계의 접점이 될 수 있어요.' },
    en: { emoji: '🦉🦊', line: 'Curiosity meets caution', advice: 'Their curiosity may intrigue you. Shared intellectual exploration could be your natural meeting point — build from there.' }
  },
  'OWL_CHEETAH': {
    ko: { emoji: '🦉🐆', line: '속도와 통제의 대비', advice: '상대의 즉흥적인 에너지가 당신에겐 혼란스러울 수 있어요. 하지만 그 자유로움이 당신에게 새로운 경험이 될 수도 있어요. 완전히 통제하려 하지 말고 조금씩 흘러가 보세요.' },
    en: { emoji: '🦉🐆', line: 'Speed meets control', advice: 'Their spontaneity may feel chaotic to you. But that freedom can also be a new experience. Try not to control everything — let things flow a little.' }
  },
  'OWL_TURTLE': {
    ko: { emoji: '🦉🐢', line: '낮은 온도와 낮은 에너지', advice: '두 사람 모두 차분하고 에너지가 낮은 편이에요. 평화롭지만 자칫 무기력한 관계가 될 수 있어요. 가끔은 새로운 자극이나 활동이 관계에 활력을 줄 수 있어요.' },
    en: { emoji: '🦉🐢', line: 'Low energy and low warmth', advice: 'Both calm and low-key — peaceful, but potentially stagnant. Occasionally introducing a new activity or stimulus can inject life into this dynamic.' }
  },
  'OWL_OWL': {
    ko: { emoji: '🦉🦉', line: '차분하지만 멀게 느껴짐', advice: '두 사람 모두 이성적이고 거리를 두는 경향이 있어요. 서로를 완전히 이해할 수 있는 유일한 사람일 수 있지만, 감정적 친밀감을 의식적으로 만들어가야 해요.' },
    en: { emoji: '🦉🦉', line: 'Calm and distant and controlled', advice: 'You may be the only ones who truly understand each other\'s logic. But emotional intimacy still needs to be built consciously — it won\'t happen on its own.' }
  },
  'OWL_HEDGEHOG': {
    ko: { emoji: '🦉🦔', line: '의도적으로 거리를 둠', advice: '두 사람 모두 경계가 강해요. 서로 밀어내는 것 같지만, 실은 서로가 안전하다는 걸 확인하는 중일 수 있어요. 천천히 신뢰를 쌓아가면 의외로 깊은 관계가 될 수 있어요.' },
    en: { emoji: '🦉🦔', line: 'The distance is intentional', advice: 'Both heavily guarded — it may feel like mutual rejection. But you\'re both just checking if the other is safe. Slowly built trust can lead to a surprisingly deep bond.' }
  },

  // HEDGEHOG + *
  'HEDGEHOG_LION': {
    ko: { emoji: '🦔🦁', line: '의도적으로 거리를 유지하는 상태', advice: '상대의 강한 에너지가 당신을 더 움츠러들게 만들 수 있어요. 불편하다면 솔직하게 말해주세요. 당신의 경계를 존중하는 사람이 맞는 사람이에요.' },
    en: { emoji: '🦔🦁', line: 'The distance is intentional', advice: 'Their intensity may be triggering your defenses. If it feels uncomfortable, say so. The right person will respect your boundaries — not bulldoze through them.' }
  },
  'HEDGEHOG_CAT': {
    ko: { emoji: '🦔🐈', line: '의도적으로 거리를 유지하는 상태', advice: '상대도 여유롭고 당신도 경계가 있어요. 서로 압박이 없어서 오히려 편안할 수 있어요. 천천히 탐색해보세요.' },
    en: { emoji: '🦔🐈', line: 'The distance is intentional', advice: 'Neither of you presses the other — which can actually feel comfortable. Take your time exploring this at a gentle pace.' }
  },
  'HEDGEHOG_DOG': {
    ko: { emoji: '🦔🐕', line: '의도적으로 거리를 유지하는 상태', advice: '상대는 당신 곁에 묵묵히 있어줄 준비가 됐어요. 억지로 열 필요 없어요. 상대의 꾸준한 존재가 결국 당신의 가시를 조금씩 녹여줄 거예요.' },
    en: { emoji: '🦔🐕', line: 'The distance is intentional', advice: 'They\'re prepared to wait quietly by your side. You don\'t have to force yourself to open up. Their steady presence will gradually soften your defenses.' }
  },
  'HEDGEHOG_FOX': {
    ko: { emoji: '🦔🦊', line: '의도적으로 거리를 유지하는 상태', advice: '상대의 호기심이 당신을 탐색하려 하지만, 당신은 아직 준비가 안 됐을 수 있어요. 서두르지 말고, 관심은 있지만 아직 시간이 필요하다고 솔직하게 전달해보세요.' },
    en: { emoji: '🦔🦊', line: 'The distance is intentional', advice: 'Their curiosity reaches toward you, but you may not be ready. Don\'t rush — it\'s okay to say you\'re interested but need more time.' }
  },
  'HEDGEHOG_CHEETAH': {
    ko: { emoji: '🦔🐆', line: '의도적으로 거리를 유지하는 상태', advice: '상대의 빠른 속도가 당신을 위협하게 만들 수 있어요. 속도를 늦춰달라고 분명하게 요청해주세요. 당신의 경계가 무시된다면 그것은 신호예요.' },
    en: { emoji: '🦔🐆', line: 'The distance is intentional', advice: 'Their speed may feel threatening. Clearly ask them to slow down. If your boundaries are consistently ignored, that itself is a signal worth heeding.' }
  },
  'HEDGEHOG_TURTLE': {
    ko: { emoji: '🦔🐢', line: '의도적으로 거리를 유지하는 상태', advice: '두 사람 모두 천천히 가요. 서로에게 압박이 없으니 가장 편안한 관계가 될 수 있어요. 하지만 서로 기다리기만 하면 아무것도 안 일어나요. 작은 신호 하나가 필요해요.' },
    en: { emoji: '🦔🐢', line: 'The distance is intentional', advice: 'No pressure from either side — potentially the most comfortable dynamic. But if you both just wait, nothing happens. One small signal can start something real.' }
  },
  'HEDGEHOG_OWL': {
    ko: { emoji: '🦔🦉', line: '의도적으로 거리를 유지하는 상태', advice: '두 사람 모두 경계가 강하고 차분해요. 서로의 공간을 완벽히 이해하는 관계가 될 수 있어요. 신뢰가 쌓이면 의외로 깊은 연결이 만들어질 거예요.' },
    en: { emoji: '🦔🦉', line: 'The distance is intentional', advice: 'Both guarded and composed — you may understand each other\'s need for space better than anyone. When trust builds, the connection can be unexpectedly profound.' }
  },
  'HEDGEHOG_HEDGEHOG': {
    ko: { emoji: '🦔🦔', line: '의도적으로 거리를 유지하는 상태', advice: '두 사람 모두 쉽게 열리지 않아요. 서로 기다리기만 한다면 영원히 만나지 못할 수도 있어요. 하지만 한쪽이 먼저 작은 가시를 내리는 순간, 관계가 시작돼요. 용기를 내보세요.' },
    en: { emoji: '🦔🦔', line: 'The distance is intentional', advice: 'Neither of you opens easily. If you both just wait forever, nothing will happen. But the moment one of you lowers a spine — that\'s when it begins. Be brave.' }
  }
};
