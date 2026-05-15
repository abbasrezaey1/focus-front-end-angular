import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SIDEBAR_LATEST_NEWS_ITEMS, SUBCATEGORY_COMPUTER_TEASERS } from '../../data/static-blog-pages.data';
import { mostReadTabs } from '../home/home-sections.data';
import type { BlogTeaser } from '../../models/blog-teaser.model';
import { BlogPostTeaserComponent } from '../../ui/blog-post-teaser/blog-post-teaser.component';
import { SidebarFollowUsComponent } from '../../ui/sidebar-follow-us/sidebar-follow-us.component';
import { SidebarLatestNewsComponent } from '../../ui/sidebar-latest-news/sidebar-latest-news.component';
import { SidebarMostReadComponent } from '../../ui/sidebar-most-read/sidebar-most-read.component';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [
    RouterLink,
    BlogPostTeaserComponent,
    SidebarFollowUsComponent,
    SidebarLatestNewsComponent,
    SidebarMostReadComponent,
  ],
  templateUrl: './subcategory.component.html',
})
export class SubcategoryComponent {
  readonly teaserRows: BlogTeaser[][] = chunk(SUBCATEGORY_COMPUTER_TEASERS, 2);
  readonly latestNewsItems = SIDEBAR_LATEST_NEWS_ITEMS;
  readonly mostReadTabs = mostReadTabs;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}
