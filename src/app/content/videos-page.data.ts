import { JA_SAMPLE_VIDEO_EMBED } from './shared-video.data';

export interface VideoArchiveItem {
  dataUrl: string;
  dataTitle: string;
  dataVideo: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  genre: string;
  intro: string;
}

export interface VideosPageFeatured {
  posterSrc: string;
  posterAlt: string;
  headline: string;
  videoId: string;
}

export const VIDEOS_PAGE_FEATURED: VideosPageFeatured = {
  posterSrc: '/images/news-14.jpeg',
  posterAlt: 'Ivanka Trump: Sexual harassment should never be tolerated',
  headline: 'Ivanka Trump: Sexual harassment should never be tolerated',
  videoId: '1ASJfIB2Asg',
};

export const VIDEOS_PAGE_ITEMS: VideoArchiveItem[] = [
  {
    dataUrl:
      '/index.php/politics/20-debating/22-ivanka-trump-sexual-harassment-should-never-be-tolerated',
    dataTitle: 'Ivanka Trump: Sexual harassment should never be tolerated',
    dataVideo: JA_SAMPLE_VIDEO_EMBED,
    imageSrc: '/images/news-14.jpeg',
    imageAlt: 'Ivanka Trump: Sexual harassment should never be tolerated',
    title: 'Ivanka Trump: Sexual harassment should never be tolerated',
    genre: 'Debating',
    intro:
      'Duis a dui ut elit tincidunt semper.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent non dolor aliquam, ullamcorper ...',
  },
  {
    dataUrl:
      '/index.php/politics/20-debating/79-jailing-of-catalan-ministers-sparks-mass-protests-in-barcelona',
    dataTitle: 'Jailing of Catalan ministers sparks mass protests in Barcelona',
    dataVideo: JA_SAMPLE_VIDEO_EMBED,
    imageSrc: '/images/news-11.jpg',
    imageAlt: 'Jailing of Catalan ministers sparks mass protests in Barcelona',
    title: 'Jailing of Catalan ministers sparks mass protests in Barcelona',
    genre: 'Debating',
    intro:
      'Felis eu mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent non dolor aliquam, ullamcorper ...',
  },
  {
    dataUrl:
      '/index.php/politics/20-debating/80-amanda-knox-says-she-was-never-allowed-to-mourn-meredith-kercher',
    dataTitle: 'Amanda Knox says she was never allowed to mourn Meredith Kercher',
    dataVideo: JA_SAMPLE_VIDEO_EMBED,
    imageSrc: '/images/news-40.jpeg',
    imageAlt: 'Amanda Knox says she was never allowed to mourn Meredith Kercher',
    title: 'Amanda Knox says she was never allowed to mourn Meredith Kercher',
    genre: 'Debating',
    intro:
      'Pellentesque placerat felis eu mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent non dolor aliquam, ...',
  },
  {
    dataUrl:
      '/index.php/politics/20-debating/81-new-fast-track-drug-plan-will-speed-nhs-access-by-up-to-four-years',
    dataTitle: "New 'fast track' drug plan will speed NHS access by up to four years",
    dataVideo: JA_SAMPLE_VIDEO_EMBED,
    imageSrc: '/images/news-46.jpeg',
    imageAlt: "New 'fast track' drug plan will speed NHS access by up to four years",
    title: "New 'fast track' drug plan will speed NHS access by up to four years",
    genre: 'Debating',
    intro:
      'Placerat felis eu mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent non dolor aliquam, ullamcorper ...',
  },
  {
    dataUrl:
      '/index.php/politics/20-debating/82-british-tourist-i-gave-new-york-terror-suspect-five-stars-on-uber',
    dataTitle: "British tourist: 'I gave New York terror suspect five stars on Uber'",
    dataVideo: JA_SAMPLE_VIDEO_EMBED,
    imageSrc: '/images/news-19.jpg',
    imageAlt: "British tourist: 'I gave New York terror suspect five stars on Uber'",
    title: "British tourist: 'I gave New York terror suspect five stars on Uber'",
    genre: 'Debating',
    intro:
      'Quisque pellentesque placerat felis eu mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent non dolor ...',
  },
];
