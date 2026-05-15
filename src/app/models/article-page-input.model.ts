/** Feed an article/detail page from data (extend `ArticleComponent` to bind these). */
export interface ArticlePageInput {
  title: string;
  dateLine: string;
  heroImageSrc: string;
  heroImageAlt: string;
  /** Plain text or trusted HTML depending on how the page renders it. */
  bodyText: string;
  categoryLabel?: string;
  categoryLink?: string;
}
