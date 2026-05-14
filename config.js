/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김태우",
    father: "김정철",
    mother: "박은영",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "변나리",
    father: "변태안",
    mother: "최명화",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-12",
    time: "11:00",
    venue: "웨딩시그니처 합정 _ 트리니티홀",
  
    address: "서울 마포구 양화로 87",
    mapLinks: {
      kakao: "https://kko.to/U4rtaDDkGd",
      naver: "https://naver.me/F0w2UI7c"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "김태우", bank: "기업은행", number: "109-129651-01-017" },
      { role: "박은영", bank: "국민은행", number: "666202-01-273247" }
      
    ],
    bride: [
      { role: "변나리", bank: "하나은행", number: "576-910259-85207" },
      { role: "변태안", bank: "농협은행", number: "3125-5412-5423-81" }
      
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김태우 ♥ 변나리 결혼합니다",
    description: "2026년 7월 12일, 소중한 분들을 초대합니다."
  }
};
