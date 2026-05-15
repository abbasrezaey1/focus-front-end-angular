import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SIDEBAR_LATEST_NEWS_ITEMS } from '../../data/static-blog-pages.data';
import { mostReadTabs } from '../home/home-sections.data';
import { ArticleToolsDropdownComponent } from '../../ui/article-tools-dropdown/article-tools-dropdown.component';
import { SidebarFollowUsComponent } from '../../ui/sidebar-follow-us/sidebar-follow-us.component';
import { SidebarLatestNewsComponent } from '../../ui/sidebar-latest-news/sidebar-latest-news.component';
import { SidebarMostReadComponent } from '../../ui/sidebar-most-read/sidebar-most-read.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterLink,
    ArticleToolsDropdownComponent,
    SidebarFollowUsComponent,
    SidebarLatestNewsComponent,
    SidebarMostReadComponent,
  ],
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  readonly latestNewsItems = SIDEBAR_LATEST_NEWS_ITEMS;
  readonly mostReadTabs = mostReadTabs;
}
