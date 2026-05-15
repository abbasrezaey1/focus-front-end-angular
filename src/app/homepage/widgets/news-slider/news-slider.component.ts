import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import type { Article, CategoryMenuItem, CategoryMenuMega } from '../../models/news-ui.model';
import { CategoryMenuComponent } from '../../components/category-menu/category-menu.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-news-slider',
  standalone: true,
  imports: [CategoryMenuComponent, NewsCardComponent],
  templateUrl: './news-slider.component.html',
  styleUrl: './news-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSliderComponent implements AfterViewInit, OnDestroy {
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

  private readonly sliderContainer = viewChild<ElementRef<HTMLElement>>('sliderContainer');

  readonly activeIndex = signal(0);
  readonly containerWidth = signal(0);
  readonly slidesPerView = signal(1);

  readonly sliderArticles = computed(() =>
    this.articles.length ? this.articles : this.items,
  );

  readonly maxIndex = computed(() => {
    const count = this.sliderArticles().length;
    return Math.max(0, count - this.slidesPerView());
  });

  readonly slideWidth = computed(() => {
    if (this.compact) {
      return this.containerWidth() || this.defaultSlideWidth();
    }
    return this.defaultSlideWidth();
  });

  readonly translatePx = computed(() => -this.activeIndex() * this.slideWidth());

  readonly wrapperTransform = computed(
    () => `translate3d(${this.translatePx()}px, 0px, 0px)`,
  );

  readonly canPrev = computed(() => this.activeIndex() > 0);
  readonly canNext = computed(() => this.activeIndex() < this.maxIndex());

  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    const el = this.sliderContainer()?.nativeElement;
    if (!el) {
      return;
    }

    const syncLayout = (): void => {
      const width = el.clientWidth;
      this.containerWidth.set(width);
      const perView = this.resolveSlidesPerView(width);
      this.slidesPerView.set(perView);
      const max = Math.max(0, this.sliderArticles().length - perView);
      if (this.activeIndex() > max) {
        this.activeIndex.set(max);
      }
    };

    syncLayout();
    this.resizeObserver = new ResizeObserver(syncLayout);
    this.resizeObserver.observe(el);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  slideWidthForCard(): number {
    return this.slideWidth();
  }

  next(): void {
    if (this.canNext()) {
      this.activeIndex.update((index) => index + 1);
    }
  }

  prev(): void {
    if (this.canPrev()) {
      this.activeIndex.update((index) => index - 1);
    }
  }

  goTo(index: number): void {
    this.activeIndex.set(Math.min(this.maxIndex(), Math.max(0, index)));
  }

  private resolveSlidesPerView(containerWidth: number): number {
    if (this.compact) {
      return 1;
    }
    if (containerWidth >= 1024) {
      return 3;
    }
    if (containerWidth >= 480) {
      return 2;
    }
    return 1;
  }

  private defaultSlideWidth(): number {
    if (this.slideWidthPx != null) {
      return this.slideWidthPx;
    }
    return this.compact ? 346 : 384;
  }
}
