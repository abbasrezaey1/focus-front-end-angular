import type { CategoryMenuItemInput } from '../models/index-widget.model';
import type { NewsFeatureRowInput } from '../models/story-teaser.model';

export const BUSINESS_NAV: CategoryMenuItemInput[] = [
  { title: 'Market', link: '/article' },
  { title: 'Personal Finance', link: '/article' },
  { title: 'Technology', link: '/article' },
];

/** Gallery card body (image chrome stays in the business strip template). */
export const BUSINESS_GALLERY_ITEM: NewsFeatureRowInput = {
  imageSrc: '/images/news-33.jpg',
  imageAlt: 'Aenean pharetra sem quis metus consectetur iaculis',
  categoryLabel: 'Technology',
  categoryLink: '/article',
  dateLine: 'Mar 9, 2022',
  title: 'Aenean pharetra sem quis metus consectetur iaculis',
  titleLink: '/article',
  intro:
    'Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus. Aenean aliquam ultricies tellus at elementum. Morbi quis cursus tortor, id...',
};

export type BusinessRowBlock =
  | { kind: 'medium'; item: NewsFeatureRowInput; firstInRow: boolean }
  | { kind: 'gallery' };

export const BUSINESS_MEDIUM_BLOCKS: BusinessRowBlock[] = [
  {
    kind: 'medium',
    firstInRow: true,
    item: {
      imageSrc: '/images/news-25.jpeg',
      imageAlt: "10 Best Markets in Vietnam - Vietnam's Most Popular Local Markets",
      categoryLabel: 'Market',
      categoryLink: '/article',
      dateLine: 'Mar 9, 2022',
      title: "10 Best Markets in Vietnam - Vietnam's Most Popular Local Markets",
      titleLink: '/article',
      intro:
        'Egestas odio eget, imperdiet neque. Suspendisse hendrerit justo quam, a pharetra eros consequat eget. Aenean nulla arcu, convallis vitae massa ac,...',
      imageWrapperClass: 'pull- item-image',
    },
  },
  { kind: 'gallery' },
  {
    kind: 'medium',
    firstInRow: false,
    item: {
      imageSrc: '/images/news-16.jpeg',
      imageAlt: 'Apple says no operations were moved from Ireland',
      categoryLabel: 'Personal Finance',
      categoryLink: '/article',
      dateLine: 'Mar 9, 2022',
      title: 'Apple says no operations were moved from Ireland',
      titleLink: '/article',
      intro:
        'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi...',
      imageWrapperClass: 'pull-left item-image',
    },
  },
  {
    kind: 'medium',
    firstInRow: true,
    item: {
      imageSrc: '/images/news-26.jpeg',
      imageAlt: 'Breaking Stock Market News',
      categoryLabel: 'Market',
      categoryLink: '/article',
      dateLine: 'Mar 9, 2022',
      title: 'Breaking Stock Market News',
      titleLink: '/article',
      intro:
        'Nullam nec leo maximus, volutpat massa in, tempor libero. Nullam id rhoncus dui, ut placerat arcu. Nunc ac pharetra dui. Duis vitae tellus...',
      imageWrapperClass: 'pull- item-image',
    },
  },
  {
    kind: 'medium',
    firstInRow: false,
    item: {
      imageSrc: '/images/news-46.jpeg',
      imageAlt: 'Business News and Financial News - CNNMoney',
      categoryLabel: 'Business',
      categoryLink: '/category/world',
      dateLine: 'Mar 9, 2022',
      title: 'Business News and Financial News - CNNMoney',
      titleLink: '/article',
      intro:
        'Nunc ante nisi, varius ut turpis viverra, eleifend ultrices nulla. Vestibulum at ex ac metus dictum posuere. Donec neque arcu, finibus sed lacus...',
      imageWrapperClass: 'pull- item-image',
    },
  },
  {
    kind: 'medium',
    firstInRow: false,
    item: {
      imageSrc: '/images/news-30.jpeg',
      imageAlt: 'Business, financial and personal finance news',
      categoryLabel: 'Personal Finance',
      categoryLink: '/article',
      dateLine: 'Mar 9, 2022',
      title: 'Business, financial and personal finance news',
      titleLink: '/article',
      intro:
        'Sed sodales, odio a viverra vehicula, quam elit rhoncus odio, venenatis eleifend odio nulla non mi. Nunc faucibus pretium condimentum.feugiat et nisl',
      imageWrapperClass: 'pull- item-image',
    },
  },
];
