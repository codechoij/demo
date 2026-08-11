/**
 * Single source of truth for the letter pages.
 *
 * Loaded by BOTH:
 *   1. index.html (before app.js) — app.js builds its LETTER_PAGES from this.
 *   2. GitHub Actions build (headless Chromium page) — the download ZIP is
 *      generated from the exact same page data, so editing letter content
 *      (resources/Strings.resx) or the page list here automatically updates
 *      both the website and the letters.zip download.
 *
 * Date strings are ISO 8601 with a UTC offset so they are timezone-safe
 * regardless of where the code runs.
 *
 * 편지 공개시간은 이 파일의 descriptionReleaseAt/releaseAt만 수정합니다.
 * LetterPageSixBody의 unlockByGiftNine은 Gift9 보상 공개 조건입니다.
 */
window.LETTER_CONFIG = {
  descriptionReleaseAt: "2025-12-25T12:00:00+09:00", // 25일 오후 12시
  pages: [
    {
      bodyKey: "LetterPageOneBody",
      releaseAt: "2025-12-25T18:00:00+09:00", // 25일 오후 6시
    },
    {
      bodyKey: "LetterPageTwoBody",
      releaseAt: "2025-12-26T09:00:00+09:00", // 26일 오전 9시
    },
    {
      bodyKey: "LetterPageThreeBody",
      releaseAt: "2025-12-27T09:00:00+09:00", // 27일 오전 9시
    },
    {
      bodyKey: "LetterPageFourBody",
      releaseAt: "2025-12-27T09:00:00+09:00", // 27일 오전 9시
    },
    {
      bodyKey: "LetterPageFiveBody",
      releaseAt: "2025-12-28T09:00:00+09:00", // 28일 오전 9시
    },
    {
      bodyKey: "LetterPageSixBody",
      releaseAt: "2025-12-29T09:00:00+09:00", // 29일 오전 9시
      unlockByGiftNine: true,
    },
    {
      bodyKey: "LetterPageSevenBody",
      releaseAt: "2025-12-29T09:00:00+09:00", // 29일 오전 9시
    },
    {
      bodyKey: "LetterPageEightBody",
      releaseAt: "2025-12-30T09:00:00+09:00", // 30일 오전 9시
    },
    {
      bodyKey: "LetterPageNineBody",
      releaseAt: "2025-12-31T09:00:00+09:00", // 31일 오전 9시
    },
  ],
};
