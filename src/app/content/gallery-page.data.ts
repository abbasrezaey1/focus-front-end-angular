export interface GallerySlide {
  href: string;
  title: string;
}

export interface GalleryFeatured {
  title: string;
  intro: string;
  articleLink: string;
  slides: GallerySlide[];
}

export interface GalleryArchiveItem {
  id: string;
  articleClass: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  genre: string;
  intro: string;
  photoCount: number;
  slides: GallerySlide[];
}

export const GALLERY_PAGE_FEATURED: GalleryFeatured = {
  title: 'Merkel Vows to Stay on Course Despite Party Setback',
  intro:
    'In vestibulum luctus turpis et luctus. Integer euismod sed erat eget vehicula. Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus. Aenean aliquam',
  articleLink: '/article',
  slides: [
    { href: '/images/news-14.jpeg', title: '' },
    { href: '/images/news-3.jpg', title: '' },
    { href: '/images/news-7.jpg', title: '' },
    { href: '/images/news-6.jpg', title: '' },
  ],
};

export const GALLERY_PAGE_ROWS: GalleryArchiveItem[][] = [
  [
    {
      id: 'ja-gallery-list-23',
      articleClass: 'default cat-purple',
      imageSrc: '/images/news-14.jpeg',
      imageAlt: 'Merkel Vows to Stay on Course Despite Party Setback',
      title: 'Merkel Vows to Stay on Course Despite Party Setback',
      genre: 'Politics',
      intro:
        'In vestibulum luctus turpis et luctus. Integer euismod sed erat eget vehicula. Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus. Aenean ...',
      photoCount: 4,
      slides: GALLERY_PAGE_FEATURED.slides,
    },
    {
      id: 'ja-gallery-list-188',
      articleClass: 'default cat-orange',
      imageSrc: '/images/news-13.jpeg',
      imageAlt: 'Suspendisse mauris nibh',
      title: 'Suspendisse mauris nibh',
      genre: 'Technology',
      intro:
        'Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus. Aenean aliquam ultricies tellus at elementum. Morbi quis cursus tortor, id vulputate ...',
      photoCount: 4,
      slides: [
        { href: '/images/news-13.jpeg', title: '' },
        { href: '/images/news-20.jpeg', title: '' },
        { href: '/images/news-16.jpeg', title: '' },
        { href: '/images/news-17.jpeg', title: '' },
      ],
    },
    {
      id: 'ja-gallery-list-186',
      articleClass: 'default cat-yellow',
      imageSrc: '/images/news-10.jpg',
      imageAlt: 'Fusce porttitor dapibus magna a gravida',
      title: 'Fusce porttitor dapibus magna a gravida',
      genre: 'Movie',
      intro:
        'Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus. Aenean aliquam ultricies tellus at elementum. Morbi quis cursus tortor, id vulputate ...',
      photoCount: 4,
      slides: [
        { href: '/images/news-10.jpg', title: '' },
        { href: '/images/news-20.jpeg', title: '' },
        { href: '/images/news-16.jpeg', title: '' },
        { href: '/images/news-17.jpeg', title: '' },
      ],
    },
  ],
  [
    {
      id: 'ja-gallery-list-187',
      articleClass: 'default cat-orange',
      imageSrc: '/images/news-33.jpg',
      imageAlt: 'Aenean pharetra sem quis metus consectetur iaculis',
      title: 'Aenean pharetra sem quis metus consectetur iaculis',
      genre: 'Technology',
      intro:
        'Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus. Aenean aliquam ultricies tellus at elementum. Morbi quis cursus tortor, id vulputate ...',
      photoCount: 4,
      slides: [
        { href: '/images/news-33.jpg', title: '' },
        { href: '/images/news-20.jpeg', title: '' },
        { href: '/images/news-16.jpeg', title: '' },
        { href: '/images/news-17.jpeg', title: '' },
      ],
    },
    {
      id: 'ja-gallery-list-87',
      articleClass: 'default cat-yellow',
      imageSrc: '/images/news-11.jpg',
      imageAlt: 'Merkel Vows to Stay on Course Despite Party Setback',
      title: 'Merkel Vows to Stay on Course Despite Party Setback',
      genre: 'Movie',
      intro:
        'Aliquam dui nulla, fermentum sit amet ante et, tempor facilisis metus. Aenean aliquam ultricies tellus at elementum. Morbi quis cursus tortor, id vulputate ...',
      photoCount: 4,
      slides: [
        { href: '/images/news-11.jpg', title: '' },
        { href: '/images/news-3.jpg', title: '' },
        { href: '/images/news-7.jpg', title: '' },
        { href: '/images/news-6.jpg', title: '' },
      ],
    },
  ],
];
