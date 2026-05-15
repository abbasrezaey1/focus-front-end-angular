import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { Article, CategoryColumn } from '../../models/news-ui.model';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-category-columns',
  standalone: true,
  imports: [NewsCardComponent, NgClass],
  templateUrl: './category-columns.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryColumnsComponent {
  @Input({ required: true }) columns!: CategoryColumn[];

  /** Legacy category columns use image-less `news-normal` rows (no `clearfix`). */
  withTeaserDefaults(item: Article): Article {
    if (item.imageSrc) {
      return item;
    }
    return { ...item, hideImage: true, teaserClearfix: false };
  }

  /**
   * `ja-news-6` leads must stay full-width: default `leadLayout` is `half` (`col-md-6`),
   * which stacks teaser rows beside the lead and breaks the legacy layout.
   */
  leadForColumn(col: CategoryColumn): Article {
    return { ...col.lead, leadLayout: 'flow', leadClearfix: true };
  }
}
