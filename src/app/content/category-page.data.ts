import type { BlogTeaser } from '../models/blog-teaser.model';

export const CATEGORY_SLUGS = [
  'politics',
  'business',
  'world',
  'tech',
  'sport',
  'entertainment',
] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface CategoryChrome {
  pageTitle: string;
  pageTitleClass: string;
  fieldLabel: string;
  fieldValue: string;
}

export const CATEGORY_CHROME: Record<CategorySlug, CategoryChrome> = {
  politics: {
    pageTitle: 'Politics',
    pageTitleClass: 'cat-purple',
    fieldLabel: 'Colors:',
    fieldValue: 'Purple Color',
  },
  business: {
    pageTitle: 'Business',
    pageTitleClass: 'cat-orange',
    fieldLabel: 'Colors:',
    fieldValue: 'Orange Color',
  },
  world: {
    pageTitle: 'World',
    pageTitleClass: 'cat-blue',
    fieldLabel: 'Colors:',
    fieldValue: 'Blue Color',
  },
  tech: {
    pageTitle: 'Tech',
    pageTitleClass: 'cat-cyan',
    fieldLabel: 'Colors:',
    fieldValue: 'Cyan Color',
  },
  sport: {
    pageTitle: 'Sport',
    pageTitleClass: 'cat-green',
    fieldLabel: 'Colors:',
    fieldValue: 'Green Color',
  },
  entertainment: {
    pageTitle: 'Entertainment',
    pageTitleClass: 'cat-yellow',
    fieldLabel: 'Colors:',
    fieldValue: 'Yellow Color',
  },
};

function row(
  articleClass: string,
  img: string,
  alt: string,
  genre: string,
  intro: string,
  title: string,
  email = true,
): BlogTeaser {
  return {
    articleClass,
    imageWrapperClass: 'pull-left item-image',
    imageSrc: img,
    imageAlt: alt,
    genreName: genre,
    intro,
    title,
    showEmailInTools: email,
  };
}

/** Four teasers per hub; copy mirrors `single-category.html` tone. */
export const CATEGORY_TEASERS: Record<CategorySlug, BlogTeaser[]> = {
  politics: [
    row(
      'cat-purple',
      '/images/news-4.jpg',
      '126 million Americans may have seen Russia-linked political posts',
      'Election 2017',
      'Feugiat ultrices enim tincidunt eget. Sed leo eros, faucibus at eros sollicitudin, vehicula auctor lacus.',
      '126 million Americans may have seen Russia-linked political posts',
    ),
    row(
      'cat-purple',
      '/images/news-8.jpg',
      'News channel debating a topic for last 48 hours',
      'Debating',
      'Integer tristique, nisl ac viverra venenatis, lectus leo venenatis diam, vel laoreet odio mi id mi.',
      'News channel debating a topic for last 48 hours to prove that the topic should be ignored',
    ),
    row(
      'cat-purple',
      '/images/news-11.jpg',
      'Comment, opinion and discussion from the Guardian US',
      'Opinion',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      'Comment, opinion and discussion from the Guardian US',
    ),
    row(
      'cat-purple',
      '/images/news-20.jpeg',
      'Russian groups made 1,100 YouTube videos during 2016 US election',
      'Election 2017',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      'Russian groups made 1,100 YouTube videos during 2016 US election',
    ),
  ],
  business: [
    row(
      'cat-orange',
      '/images/news-25.jpeg',
      "10 Best Markets in Vietnam - Vietnam's Most Popular Local Markets",
      'Market',
      'Egestas odio eget, imperdiet neque. Suspendisse hendrerit justo quam, a pharetra eros consequat eget.',
      "10 Best Markets in Vietnam - Vietnam's Most Popular Local Markets",
    ),
    row(
      'cat-orange',
      '/images/news-16.jpeg',
      'Business News and Financial News - CNNMoney',
      'Personal Finance',
      'Aliquam erat volutpat. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      'Business News and Financial News - CNNMoney',
    ),
    row(
      'cat-orange',
      '/images/news-33.jpg',
      'Aenean pharetra sem quis metus consectetur iaculis',
      'Technology',
      'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      'Aenean pharetra sem quis metus consectetur iaculis',
    ),
    row(
      'cat-orange',
      '/images/news-10.jpg',
      'Stock Market News',
      'Market',
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Stock Market News',
    ),
  ],
  world: [
    row(
      'cat-blue',
      '/images/news-1.jpg',
      'Donald Trump Threatens to Sue The Times Over Article on Unwanted  Advances',
      'World',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula mi ex, feugiat ultrices enim tincidunt eget.',
      'Donald Trump Threatens to Sue The Times Over Article on Unwanted  Advances',
    ),
    row(
      'cat-blue',
      '/images/news-37.jpg',
      'Latest breaking news, daily news and African news',
      'Africa',
      'Mauris in luctus tortor, et luctus ex. Aliquam et ultricies libero. Nullam tempor sollicitudin molestie.',
      'Latest breaking news, daily news and African news',
    ),
    row(
      'cat-blue',
      '/images/news-35.jpg',
      "2018 FIFA World Cup Russia™ - Qualifiers - Africa",
      'Africa',
      'Morbi interdum magna sed ipsum vehicula, id tincidunt sapien hendrerit. Pellentesque euismod iaculis mi.',
      "2018 FIFA World Cup Russia™ - Qualifiers - Africa",
    ),
    row(
      'cat-blue',
      '/images/news-38.jpg',
      'Latest Africa News & Headlines, Top Stories Today',
      'Africa',
      'Aliquam erat volutpat. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      'Latest Africa News & Headlines, Top Stories Today',
    ),
  ],
  tech: [
    row(
      'cat-cyan',
      '/images/news-28.jpeg',
      'Computers: PC, Laptop & Tablet Options',
      'Computer',
      'Hendrerit sollicitudin. Vivamus faucibus facilisis euismod. Vivamus tempus rhoncus sem.',
      'Computers: PC, Laptop & Tablet Options',
    ),
    row(
      'cat-cyan',
      '/images/news-30.jpeg',
      'Computer science and technology',
      'Computer',
      'Curabitur et mauris finibus nunc suscipit pretium. Etiam faucibus justo sit amet ornare dictum.',
      'Computer science and technology',
    ),
    row(
      'cat-cyan',
      '/images/news-32.jpg',
      'News and Insights on the PC Ecosystem',
      'Computer',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla nulla erat.',
      'News and Insights on the PC Ecosystem',
    ),
    row(
      'cat-cyan',
      '/images/news-17.jpeg',
      'Intel and AMD team up: A future Core chip will have Radeon graphics inside',
      'Computer',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
      'Intel and AMD team up: A future Core chip will have Radeon graphics inside',
    ),
  ],
  sport: [
    row(
      'cat-green',
      '/images/soccer-5.jpeg',
      'Chelsea proved they are still behind Conte with United win - Neville',
      'Soccer',
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
      'Chelsea proved they are still behind Conte with United win - Neville',
    ),
    row(
      'cat-green',
      '/images/news-6.jpg',
      'NewsNow: Sport news | Breaking News & Search 24/7',
      'Sport',
      'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.',
      'NewsNow: Sport news | Breaking News & Search 24/7',
    ),
    row(
      'cat-green',
      '/images/news-7.jpg',
      'Breaking Celeb News, Entertainment News, and Celebrity Gossip',
      'Sport',
      'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
      'Breaking Celeb News, Entertainment News, and Celebrity Gossip',
    ),
    row(
      'cat-green',
      '/images/news-8.jpg',
      'News channel debating a topic for last 48 hours',
      'Sport',
      'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.',
      'News channel debating a topic for last 48 hours to prove that the topic should be ignored',
    ),
  ],
  entertainment: [
    row(
      'cat-yellow',
      '/images/news-7.jpg',
      'Breaking Celeb News, Entertainment News, and Celebrity Gossip',
      'Entertainment',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
      'Breaking Celeb News, Entertainment News, and Celebrity Gossip',
    ),
    row(
      'cat-yellow',
      '/images/news-13.jpeg',
      'Spain on the brink: VIOLENCE erupts as police chief sacked',
      'Entertainment',
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
      'Spain on the brink: VIOLENCE erupts as police chief sacked',
    ),
    row(
      'cat-yellow',
      '/images/news-14.jpeg',
      'Labour MP who said Remain voters better educated',
      'Entertainment',
      'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      "Labour MP who said Remain voters better educated 'has facts on side'",
    ),
    row(
      'cat-yellow',
      '/images/news-3.jpg',
      "Apple fires employee after daughter's video of iPhone X goes viral",
      'Entertainment',
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
      "Apple fires employee after daughter's video of iPhone X goes viral",
    ),
  ],
};

export function isCategorySlug(s: string): s is CategorySlug {
  return (CATEGORY_SLUGS as readonly string[]).includes(s);
}
