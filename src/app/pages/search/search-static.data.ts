export interface StaticSearchHit {
  image: string;
  title: string;
  snippet: string;
}

/** Sample hits aligned with `search.html` export (titles/snippets/thumbs). */
export const STATIC_SEARCH_RESULTS: readonly StaticSearchHit[] = [
  {
    image: '/images/boxing-4.jpeg',
    title: "'No deadline' for GGG-Canelo",
    snippet:
      'Morbi tristique senectus turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
  },
  {
    image: '/images/game-6.jpg',
    title: '9 reasons why PC gaming is a better value than consoles',
    snippet:
      'Tetus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas',
  },
  {
    image: '/images/news-40.jpeg',
    title: 'Amanda Knox says she was never allowed to mourn Meredith Kercher',
    snippet:
      'Quisque sit amet est et sapien ultricies eget, tempor sit amet, Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida.',
  },
  {
    image: '/images/tennis-2.jpg',
    title: 'Injured Konta out of WTA Finals',
    snippet:
      'Vitae Pellentesque. Accumsan mus Pellentesque et lacus vitae dui Curabitur et Curabitur interdum. Auctor Phasellus lacinia fringilla euismod augue nibh lorem laoreet habitasse ac.',
  },
  {
    image: '/images/news-17.jpeg',
    title: 'Intel and AMD team up: A future Core chip will have Radeon graphics inside',
    snippet:
      'Alesuada fames ac turpis egestas, auris placerat eleifend leo. Quisque sit amet est et sapien ultricies eget, tempor sit amet, Cras in mi at felis aliquet congue.',
  },
  {
    image: '/images/news-14.jpeg',
    title: 'EU citizens explain why they are leaving the UK',
    snippet:
      'Maecenas vehicula mi ex, feugiat ultrices enim tincidunt eget. Sed leo eros, faucibus at eros sollicitudin, vehicula auctor lacus.',
  },
  {
    image: '/images/fashtion-7.jpg',
    title: 'Here’s Every Piece From the Just-Launched Erdem x H&M Collab',
    snippet:
      'Senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
  },
  {
    image: '/images/news-26.jpeg',
    title: 'Breaking Stock Market News',
    snippet:
      'Nullam nec leo maximus, volutpat massa in, tempor libero. Nullam id rhoncus dui, ut placerat arcu. Nunc ac pharetra dui.',
  },
];
