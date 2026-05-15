import type { NewsCompactRowInput, NewsFeatureRowInput } from './story-teaser.model';

/** @deprecated Use NewsFeatureRowInput — kept for existing imports. */
export type HomePoliticsBigItem = NewsFeatureRowInput;
/** @deprecated Use NewsCompactRowInput — kept for existing imports. */
export type HomePoliticsSidebarItem = NewsCompactRowInput;

/** One brick tile on the home “brick-layout” hero (matches `index.html`). */
export interface HomeBrickItem {
  layoutClass: string;
  imageSrc: string;
  imageAlt: string;
  articleLink: string;
  categoryBgClass: string;
  categoryLink: string;
  categoryLabel: string;
  titleLink: string;
  title: string;
}

export interface MemberProfile {
  imageSrc: string;
  name: string;
  role: string;
  alt?: string;
}
