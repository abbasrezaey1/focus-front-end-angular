/** Static blog listing card (matches `single-category.html` / `single-subcategory.html` teaser markup). */
export interface BlogTeaser {
  articleClass: string;
  /** e.g. `pull-left item-image` or `pull- item-image` (legacy export quirk). */
  imageWrapperClass: string;
  imageSrc: string;
  imageAlt: string;
  genreName: string;
  intro: string;
  title: string;
  showEmailInTools: boolean;
}
