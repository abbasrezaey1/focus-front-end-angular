import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import {
  CATEGORY_CHROME,
  CATEGORY_TEASERS,
  isCategorySlug,
  type CategorySlug,
} from '../../content/category-page.data';
import { SIDEBAR_LATEST_NEWS_ITEMS } from '../../data/static-blog-pages.data';
import { mostReadTabs } from '../home/home-sections.data';
import { BlogPostTeaserComponent } from '../../ui/blog-post-teaser/blog-post-teaser.component';
import { SidebarFollowUsComponent } from '../../ui/sidebar-follow-us/sidebar-follow-us.component';
import { SidebarLatestNewsComponent } from '../../ui/sidebar-latest-news/sidebar-latest-news.component';
import { SidebarMostReadComponent } from '../../ui/sidebar-most-read/sidebar-most-read.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    RouterLink,
    BlogPostTeaserComponent,
    SidebarFollowUsComponent,
    SidebarLatestNewsComponent,
    SidebarMostReadComponent,
  ],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly slugParam = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? 'world')), {
    initialValue: 'world',
  });

  readonly view = computed(() => {
    const raw = this.slugParam();
    const slug: CategorySlug = isCategorySlug(raw) ? raw : 'world';
    return {
      slug,
      chrome: CATEGORY_CHROME[slug],
      teaserRows: chunk(CATEGORY_TEASERS[slug], 2),
      genreLink: `/category/${slug}`,
    };
  });

  readonly latestNewsItems = SIDEBAR_LATEST_NEWS_ITEMS;
  readonly mostReadTabs = mostReadTabs;

  constructor() {
    effect(() => {
      const raw = this.slugParam();
      if (raw && !isCategorySlug(raw)) {
        void this.router.navigate(['/category/world'], { replaceUrl: true });
      }
    });
  }
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}
