import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { Article, CategoryMenuItem, CategoryMenuMega } from '../../models/news-ui.model';
import { CategoryMenuComponent } from '../../components/category-menu/category-menu.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-news-slider',
  standalone: true,
  imports: [CategoryMenuComponent, NewsCardComponent],
  templateUrl: './news-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSliderComponent {
  /** Preferred binding name for swiper slides. */
  @Input() articles: Article[] = [];
  /** Legacy / alternate binding (same payload as `articles`). */
  @Input() items: Article[] = [];
  /** Optional top category strip (Tech mega menu). Hidden in compact sidebar mode. */
  @Input() menuItems: CategoryMenuItem[] = [];
  /** When set, renders trailing “More” mega dropdown after `menuItems`. */
  @Input() mega?: CategoryMenuMega;
  /** Sidebar slider (Mod116): narrower slides + pagination + alternate chrome. */
  @Input() compact = false;
  /** Explicit slide width; defaults to 346 when `compact`, otherwise 384. */
  @Input() slideWidthPx: number | null = null;

  sliderArticles(): Article[] {
    return this.articles.length ? this.articles : this.items;
  }

  resolvedSlideWidth(): number {
    if (this.slideWidthPx != null) {
      return this.slideWidthPx;
    }
    return this.compact ? 346 : 384;
  }
}
