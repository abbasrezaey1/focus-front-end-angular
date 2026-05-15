/** Category tab in a section menu (routerLink path). */
export interface CategoryMenuItem {
  title: string;
  link: string;
}

/** Optional “More” mega-dropdown appended after flat menu links. */
export interface CategoryMenuMega {
  moreLabel: string;
  items: CategoryMenuItem[];
}

/** Normalised article/teaser used by cards and sliders. */
export interface Article {
  imageSrc: string;
  imageAlt: string;
  categoryLabel: string;
  categoryLink: string;
  dateLine: string;
  title: string;
  titleLink: string;
  intro?: string;
  /** e.g. `bg-cat-blue` for brick slider rows */
  categoryBgClass?: string;
  /** Anchor title attribute for image link (slider bricks). */
  imageTitle?: string;
  /** When set, brick slider image opens inline / main-player video on play click. */
  slideVideo?: VideoTeaserData;
  /** Optional duration label on slider play badge (e.g. `2:38`). */
  videoDuration?: string;
  /** Image wrapper classes on legacy exports (e.g. `pull- item-image`). */
  imageWrapperClass?: string;
  /** Adds `clearfix` on `news-big` / lead rows. */
  leadClearfix?: boolean;
  /** `half` = col-md-6, `wide` = col-md-12, `flow` = no column width on lead. */
  leadLayout?: 'half' | 'wide' | 'flow';
  /** Adds `clear` on `news-normal` rows (ja-news-3 / sidebar grids). */
  teaserClear?: boolean;
  /** Omit legacy `clearfix` on the teaser row (category columns). */
  teaserClearfix?: boolean;
  /** Omit image column (category-column text rows). */
  hideImage?: boolean;
  /** Editor pick: title before date-only meta row. */
  metaAfterTitle?: boolean;
}

export interface SocialLinkItem {
  href: string;
  title: string;
  /** e.g. `btn instagram` */
  btnClass: string;
  /** e.g. `fa fa-instagram` */
  iconClass: string;
  label: string;
}

export interface VideoTeaserData {
  dataUrl: string;
  dataTitle: string;
  /** Raw iframe HTML for `data-video` attribute. */
  dataVideo: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleLink: string;
  dateLine?: string;
}

export interface FeaturedPlayerVideo {
  posterSrc: string;
  posterAlt: string;
  headline: string;
}

export type EditorSidebarEntry =
  | { kind: 'article'; item: Article }
  | { kind: 'video'; item: Article; video: VideoTeaserData };

export interface CategoryColumn {
  title: string;
  accentGroupClass: string;
  minHeightPx?: number;
  lead: Article;
  items: Article[];
}

export interface MostReadGallerySlide {
  href: string;
  title: string;
}

export type MostReadRow =
  | {
      kind: 'image';
      rank: number;
      accentClass: string;
      article: Article;
      imageWrapperClass?: string;
    }
  | {
      kind: 'gallery';
      rank: number;
      accentClass: string;
      article: Article;
      galleryId: string;
      photosLabel: string;
      slides: MostReadGallerySlide[];
    }
  | {
      kind: 'video';
      rank: number;
      accentClass: string;
      article: Article;
      video: VideoTeaserData;
    };

export interface MostReadTab {
  title: string;
  tabTitleClass: 'first' | '' | 'last';
  rows: MostReadRow[];
}

export interface VideoItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleLink: string;
  dateLine?: string;
}

/** Main player block in “Most Watched Videos”. */
export interface FeaturedPlayerVideo {
  posterSrc: string;
  posterAlt: string;
  headline: string;
}

export interface SidebarWidget {
  title: string;
  moduleId?: string;
}

export type NewsSectionLayout =
  | 'lead-sidebar'
  | 'two-big-grid'
  | 'lead-sidebar-grid'
  | 'wide-lead-three-medium';
