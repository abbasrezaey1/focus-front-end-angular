/** Compact “Politics sidebar” style row (image + meta + title). */
export interface NewsCompactRowInput {
  imageSrc: string;
  imageAlt: string;
  categoryLabel: string;
  categoryLink: string;
  dateLine: string;
  title: string;
  titleLink: string;
  /** Text-only teasers (e.g. category columns) omit the image column. */
  hideImage?: boolean;
  /** When false, omits `clearfix` on the row (category columns). */
  teaserClearfix?: boolean;
}

/** Large “Politics lead” row with intro paragraph. */
export interface NewsFeatureRowInput extends NewsCompactRowInput {
  intro: string;
  /** Image wrapper classes (e.g. `pull- item-image` on `ja-news-2` business strip). */
  imageWrapperClass?: string;
}

/** 300×250-style sidebar tile. */
export interface RectangleAdInput {
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
  /** In-app route, e.g. /contact */
  routerLink?: string;
  /** External URL when set (opens new tab). */
  externalHref?: string;
  title?: string;
}
