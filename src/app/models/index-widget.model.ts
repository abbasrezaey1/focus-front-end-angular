/** One cell in a `.latest-grid` row (image + date + title). */
export interface LatestGridCellInput {
  imageSrc: string;
  imageAlt: string;
  dateLine: string;
  title: string;
  titleLink: string;
}

/** Vertical category links (`.category-menu ul`). */
export interface CategoryMenuItemInput {
  title: string;
  link: string;
}
