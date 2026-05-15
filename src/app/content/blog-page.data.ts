import type { BlogTeaser } from '../models/blog-teaser.model';

function teaser(
  img: string,
  alt: string,
  genre: string,
  intro: string,
  title: string,
  articleClass = 'cat-purple',
  imageWrapperClass = 'pull-left item-image',
): BlogTeaser {
  return {
    articleClass,
    imageWrapperClass,
    imageSrc: img,
    imageAlt: alt,
    genreName: genre,
    intro,
    title,
    showEmailInTools: true,
  };
}

/** Blog listing rows (`blog.html` — cols-3 grid). */
export const BLOG_TEASER_ROWS: BlogTeaser[][] = [
  [
    teaser(
      '/images/news-14.jpeg',
      'Merkel Vows to Stay on Course Despite Party Setback',
      'Politics',
      'In vestibulum luctus turpis et luctus. Integer euismod sed erat eget vehicula. Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus. Aenean aliquam',
      'Merkel Vows to Stay on Course Despite Party Setback',
    ),
    teaser(
      '/images/news-30.jpeg',
      'Catalan leader Puidgemont rules out snap election',
      'Politics',
      'Integer euismod sed erat eget vehicula. Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus.',
      'Catalan leader Puidgemont rules out snap election',
    ),
    teaser(
      '/images/news-4.jpg',
      "Debating News George Heriot's School",
      'Debating',
      'Etiam vitae venenatis turpis, in dictum lorem. Suspendisse ac placerat arcu, et pulvinar risus. Morbi volutpat tristique varius.',
      "Debating News George Heriot's School",
    ),
  ],
  [
    teaser(
      '/images/news-4.jpg',
      '126 million Americans may have seen Russia-linked political posts',
      'Election 2017',
      'Feugiat ultrices enim tincidunt eget. Sed leo eros, faucibus at eros sollicitudin, vehicula auctor lacus. Integer tristique, nisl ac viverra posuere, est ex convallis erat,',
      '126 million Americans may have seen Russia-linked political posts',
    ),
    teaser(
      '/images/news-1.jpg',
      "Macri's coalition sweeps Argentina's mid-term vote",
      'Election 2017',
      'Kapien viverra vel. Fusce iaculis est eu ipsum facilisis, at sodales diam condimentum. Maecenas vel suscipit turpis. Phasellus venenatis libero in urna fermentum, sapien',
      "Macri's coalition sweeps Argentina's mid-term vote",
    ),
    teaser(
      '/images/news-7.jpg',
      'Spain on the brink: violence erupts as police chief sacked',
      'Politics',
      'Regional tensions and institutional responses in focus across the peninsula.',
      'Spain on the brink: violence erupts as police chief sacked',
    ),
  ],
  [
    teaser(
      '/images/news-16.jpeg',
      'Business News and Financial News - CNNMoney',
      'Market',
      'Markets, currencies, and corporate headlines in brief from global desks.',
      'Business News and Financial News',
    ),
    teaser(
      '/images/news-21.jpeg',
      'Barack Obama Mourns Shimon Peres, and a Bygone Israel',
      'World',
      'Reflections on leadership and the shifting Middle East peace landscape.',
      'Barack Obama Mourns Shimon Peres, and a Bygone Israel',
    ),
    teaser(
      '/images/news-40.jpeg',
      'Amanda Knox says she was never allowed to mourn Meredith Kercher',
      'Debating',
      'Pellentesque placerat felis eu mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      'Amanda Knox says she was never allowed to mourn Meredith Kercher',
    ),
  ],
  [
    teaser(
      '/images/news-11.jpg',
      'Jailing of Catalan ministers sparks mass protests in Barcelona',
      'Debating',
      'Felis eu mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent non dolor aliquam, ullamcorper velit.',
      'Jailing of Catalan ministers sparks mass protests in Barcelona',
    ),
    teaser(
      '/images/news-19.jpg',
      "British tourist: 'I gave New York terror suspect five stars on Uber'",
      'Debating',
      'Quisque pellentesque placerat felis eu mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      "British tourist: 'I gave New York terror suspect five stars on Uber'",
    ),
    teaser(
      '/images/news-46.jpeg',
      "New 'fast track' drug plan will speed NHS access by up to four years",
      'Debating',
      'Placerat felis eu mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent non dolor aliquam, ullamcorper.',
      "New 'fast track' drug plan will speed NHS access by up to four years",
    ),
  ],
];
