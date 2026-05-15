import type { Article, CategoryMenuItem, VideoItem } from '../models/news-ui.model';

/** Example menu — mirrors Politics strip for documentation/tests. */
export const MOCK_SECTION_MENU: CategoryMenuItem[] = [
  { title: 'Election', link: '/article' },
  { title: 'Policy', link: '/article' },
];

/** Example lead + sidebar set. */
export const MOCK_LEAD_ARTICLE: Article = {
  imageSrc: '/images/news-1.jpg',
  imageAlt: 'Lead story',
  categoryLabel: 'Politics',
  categoryLink: '/article',
  dateLine: 'Mar 9, 2022',
  title: 'Example lead headline for reusable section',
  titleLink: '/subcategory',
  intro: 'Short dek text used by the big card variant.',
};

export const MOCK_SIDEBAR_ARTICLES: Article[] = [
  {
    imageSrc: '/images/news-2.jpg',
    imageAlt: 'Sidebar',
    categoryLabel: 'Politics',
    categoryLink: '/article',
    dateLine: 'Mar 9, 2022',
    title: 'Sidebar teaser one',
    titleLink: '/article',
  },
];

export const MOCK_VIDEO_FEATURED: VideoItem = {
  imageSrc: '/images/news-40.jpeg',
  imageAlt: 'Featured video',
  title: 'Featured clip headline',
  titleLink: '/article',
  dateLine: 'Mar 9, 2022',
};

export const MOCK_VIDEO_LIST: VideoItem[] = [
  {
    imageSrc: '/images/news-10.jpg',
    imageAlt: 'More',
    title: 'Second video',
    titleLink: '/article',
  },
];
