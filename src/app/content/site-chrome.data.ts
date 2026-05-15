/** Site-wide chrome (leaderboard, etc.) — edit here to change what layouts consume. */
export interface LeaderboardBannerInput {
  /** Image URL from `src/assets/images` (served as `/images/...`). */
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  sponsorLink: string;
  sponsorTitle: string;
}

export const LEADERBOARD_BANNER: LeaderboardBannerInput = {
  /** Same creative as static `index.html` (`./images/top-leaderboard.jpg`). */
  imageSrc: '/images/top-leaderboard.jpg',
  imageWidth: 728,
  imageHeight: 90,
  /** Avoid "advertisement" in alt — many ad blockers hide those images. */
  imageAlt: 'Site sponsor',
  sponsorLink: '/category/world',
  sponsorTitle: 'Browse category',
};
