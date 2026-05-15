import type { BlogTeaser } from '../models/blog-teaser.model';

/** `single-category.html` — World / cat-blue listing (first page). */
export const CATEGORY_WORLD_TEASERS: BlogTeaser[] = [
  {
    articleClass: 'cat-blue',
    imageWrapperClass: 'pull-left item-image',
    imageSrc: '/images/news-1.jpg',
    imageAlt: 'Donald Trump Threatens to Sue The Times Over Article on Unwanted  Advances',
    genreName: 'World',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula mi ex, feugiat ultrices enim tincidunt eget. Sed leo eros, faucibus at eros sollicitudin, vehicula auctor lacus. .',
    title: 'Donald Trump Threatens to Sue The Times Over Article on Unwanted  Advances',
    showEmailInTools: true,
  },
  {
    articleClass: 'cat-blue',
    imageWrapperClass: 'pull- item-image',
    imageSrc: '/images/news-37.jpg',
    imageAlt: 'Latest breaking news, daily news and African news',
    genreName: 'Africa',
    intro:
      'Mauris in luctus tortor, et luctus ex. Aliquam et ultricies libero. Nullam tempor sollicitudin molestie. Donec vel bibendum ex. Vestibulum vel risus mollis, porta risus sed, ',
    title: 'Latest breaking news, daily news and African news',
    showEmailInTools: true,
  },
  {
    articleClass: 'cat-blue',
    imageWrapperClass: 'pull- item-image',
    imageSrc: '/images/news-35.jpg',
    imageAlt: "2018 FIFA World Cup Russia™ - Qualifiers - Africa",
    genreName: 'Africa',
    intro:
      'Morbi interdum magna sed ipsum vehicula, id tincidunt sapien hendrerit. Pellentesque euismod iaculis mi, id viverra eros cursus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    title: "2018 FIFA World Cup Russia™ - Qualifiers - Africa",
    showEmailInTools: true,
  },
  {
    articleClass: 'cat-blue',
    imageWrapperClass: 'pull- item-image',
    imageSrc: '/images/news-38.jpg',
    imageAlt: 'Latest Africa News & Headlines, Top Stories Today',
    genreName: 'Africa',
    intro:
      'Aliquam erat volutpat. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    title: 'Latest Africa News & Headlines, Top Stories Today',
    showEmailInTools: true,
  },
];

/** `single-subcategory.html` — Computer / cat-cyan hub. */
export const SUBCATEGORY_COMPUTER_TEASERS: BlogTeaser[] = [
  {
    articleClass: 'cat-cyan',
    imageWrapperClass: 'pull- item-image',
    imageSrc: '/images/news-28.jpeg',
    imageAlt: 'Computers: PC, Laptop & Tablet Options',
    genreName: 'Computer',
    intro:
      'Hendrerit sollicitudin. Vivamus faucibus facilisis euismod. Vivamus tempus rhoncus sem, id tempus sapien vulputate vitae. Ut sapien purus, cursus a sem at, accumsan.',
    title: 'Computers: PC, Laptop & Tablet Options',
    showEmailInTools: false,
  },
  {
    articleClass: 'cat-cyan',
    imageWrapperClass: 'pull- item-image',
    imageSrc: '/images/news-30.jpeg',
    imageAlt: 'Computer science and technology',
    genreName: 'Computer',
    intro:
      'Curabitur et mauris finibus nunc suscipit pretium. Etiam faucibus justo sit amet ornare dictum. Mauris vestibulum est commodo nunc eleifend vulputate. Sed blandit .',
    title: 'Computer science and technology',
    showEmailInTools: false,
  },
  {
    articleClass: 'cat-cyan',
    imageWrapperClass: 'pull- item-image',
    imageSrc: '/images/news-32.jpg',
    imageAlt: 'News and Insights on the PC Ecosystem',
    genreName: 'Computer',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla nulla erat, nec efficitur turpis iaculis ut. Nulla a lacinia augue. Suspendisse nisl leo, placerat vitae volutpat.',
    title: 'News and Insights on the PC Ecosystem',
    showEmailInTools: false,
  },
  {
    articleClass: 'cat-cyan',
    imageWrapperClass: 'pull-left item-image',
    imageSrc: '/images/news-17.jpeg',
    imageAlt: 'Intel and AMD team up: A future Core chip will have Radeon graphics inside',
    genreName: 'Computer',
    intro:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.',
    title: 'Intel and AMD team up: A future Core chip will have Radeon graphics inside',
    showEmailInTools: false,
  },
];

export interface LatestNewsItem {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  showGalleryBadge?: boolean;
  /** When true, wraps image in ja-gallery-list + btn-play (static, no blueimp). */
  galleryStyle?: boolean;
}

export const SIDEBAR_LATEST_NEWS_ITEMS: LatestNewsItem[] = [
  {
    galleryStyle: true,
    imageSrc: '/images/news-14.jpeg',
    imageAlt: 'Merkel Vows to Stay on Course Despite Party Setback',
    title: 'Merkel Vows to Stay on Course Despite Party Setback...',
  },
  { title: 'The goop Magazine Cover Story...' },
  {
    imageSrc: '/images/news-16.jpeg',
    imageAlt: 'Business News and Financial News - CNNMoney',
    title: 'Business News and Financial News - CNNMoney...',
  },
  {
    imageSrc: '/images/fashtion-7.jpg',
    imageAlt: "Here's Every Piece From the Just-Launched Erdem x H&M Collab",
    title: "Here's Every Piece From the Just-Launched Erdem x H&M Collab...",
  },
  {
    imageSrc: '/images/news-1.jpg',
    imageAlt: 'Donald Trump Threatens to Sue The Times Over Article on Unwanted  Advances',
    title: 'Donald Trump Threatens to Sue The Times Over Article on Unwa...',
  },
];

export interface MostReadRow {
  linkClass: string;
  imageWrapperClass: string;
  imageSrc: string;
  imageAlt: string;
  rank: string;
  dateLine: string;
  headline: string;
  /** `article` | `subcategory` */
  linkKind: 'article' | 'subcategory';
}

export const SIDEBAR_MOST_READ_WEEK: MostReadRow[] = [
  {
    linkClass: 'link-cat-purple',
    imageWrapperClass: 'pull-left item-image',
    imageSrc: '/images/news-16.jpeg',
    imageAlt: 'Free can be fatal, especially when it comes to news',
    rank: '1',
    dateLine: 'Mar, 09 2022',
    headline: 'Free can be fatal, especially when it comes to news',
    linkKind: 'article',
  },
  {
    linkClass: 'link-cat-blue',
    imageWrapperClass: 'pull- item-image',
    imageSrc: '/images/news-50.jpeg',
    imageAlt: "Europe's Latest Business News, Sector Watch News and Business",
    rank: '2',
    dateLine: 'Mar, 09 2022',
    headline: "Europe's Latest Business News, Sector Watch News and Business",
    linkKind: 'subcategory',
  },
  {
    linkClass: 'link-cat-green',
    imageWrapperClass: 'pull-left item-image',
    imageSrc: '/images/soccer-5.jpeg',
    imageAlt: 'Chelsea proved they are still behind Conte with United win - Neville',
    rank: '3',
    dateLine: 'Mar, 09 2022',
    headline: 'Chelsea proved they are still behind Conte with United win - Neville',
    linkKind: 'article',
  },
];
