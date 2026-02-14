const CONFIG = {
  // profile setting (required)
  profile: {
    name: "당글",
    image: "/avatar.svg", // 나중에 본인 사진으로 변경 가능합니다.
    role: "취준생, 신입사원의 팅커벨",
    bio: "취업 콘텐츠와 성장을 기록하는 공간입니다.",
    email: "yuncontest@naver.com",
    threads: "dang_guel",
  },
  projects: [
    {
      name: `당글의 노션 블로그`,
      href: "https://dangguel.netlify.app",
    },
  ],
  // blog setting (required)
  blog: {
    title: "당글 로그 (Dangguel Log)",
    description: "취업 준비부터 신입사원 적응기까지, 당글의 성장 기록",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configuration (required)
  link: "https://dangguel.netlify.app",
  since: 2024, // 시작 연도
  lang: "ko-KR", // 한국어로 설정 변경
  ogImageGenerateURL: "https://og-image-korean.vercel.app", 

  // notion configuration (required)
  notionConfig: {
    // 여기에 확인하신 32자리 ID를 직접 입력했습니다.
    pageId: "30668b320acc81acab92febfb8bf2f7e",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "yunhouak-rgb/morethan-log", // 댓글이 저장될 본인의 깃허브 저장소 이름
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", 
    },
  },
  isProd: process.env.VERCEL_ENV === "production", 
  revalidateTime: 21600 * 7, 
}

module.exports = { CONFIG }
