import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  HOME_BRICK_ITEMS,
  HOME_POLITICS_BIG,
  HOME_POLITICS_NAV,
  HOME_POLITICS_SIDEBAR,
  HOME_SIDEBAR_AD,
} from '../../content/home-page.data';
import type { CategoryMenuItem } from '../../homepage/models/news-ui.model';
import { AdBannerComponent } from '../../homepage/widgets/ad-banner/ad-banner.component';
import { CategoryColumnsComponent } from '../../homepage/widgets/category-columns/category-columns.component';
import { MostReadTabsComponent } from '../../homepage/widgets/most-read-tabs/most-read-tabs.component';
import { NewsSectionComponent } from '../../homepage/sections/news-section/news-section.component';
import { NewsSliderComponent } from '../../homepage/widgets/news-slider/news-slider.component';
import { SidebarNewsWidgetComponent } from '../../homepage/widgets/sidebar-news-widget/sidebar-news-widget.component';
import { SocialLinksComponent } from '../../homepage/widgets/social-links/social-links.component';
import { VideoListComponent } from '../../homepage/widgets/video-list/video-list.component';
import { HomeIndexBusinessStripComponent } from './home-index-business-strip/home-index-business-strip.component';
import {
  categoryColumns,
  editorArticles,
  editorLeadArticle,
  entertainmentLeadArticle,
  entertainmentMenuItems,
  entertainmentSidebarArticles,
  featuredPlayerVideo,
  mostReadTabs,
  sidebarSliderArticles,
  socialLinks,
  sportLeadArticle,
  sportMenuItems,
  sportSidebarArticles,
  techMegaMenu,
  techMenuItems,
  techSliderArticles,
  videoSidebarList,
  worldBigArticles,
  worldMenuItems,
  worldNormalArticles,
} from './home-sections.data';
import { UniBrickTileComponent } from '../../uni-material/uni-brick-tile/uni-brick-tile.component';
import { UniStockWidgetComponent } from '../../uni-material/uni-stock-widget/uni-stock-widget.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UniBrickTileComponent,
    UniStockWidgetComponent,
    HomeIndexBusinessStripComponent,
    NewsSectionComponent,
    AdBannerComponent,
    NewsSliderComponent,
    SocialLinksComponent,
    SidebarNewsWidgetComponent,
    MostReadTabsComponent,
    CategoryColumnsComponent,
    VideoListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly bricks = HOME_BRICK_ITEMS;
  readonly politicsNavItems: CategoryMenuItem[] = HOME_POLITICS_NAV.map((x) => ({
    title: x.title,
    link: x.link,
  }));
  readonly politicsBig = HOME_POLITICS_BIG;
  readonly politicsSidebar = HOME_POLITICS_SIDEBAR;
  readonly politicsAccent = 'link-cat-purple';
  readonly sidebarAd = HOME_SIDEBAR_AD;

  readonly worldMenuItems = worldMenuItems;
  readonly worldBigArticles = worldBigArticles;
  readonly worldNormalArticles = worldNormalArticles;

  readonly sportMenuItems = sportMenuItems;
  readonly sportLeadArticle = sportLeadArticle;
  readonly sportSidebarArticles = sportSidebarArticles;

  readonly entertainmentMenuItems = entertainmentMenuItems;
  readonly entertainmentLeadArticle = entertainmentLeadArticle;
  readonly entertainmentSidebarArticles = entertainmentSidebarArticles;

  readonly techMenuItems = techMenuItems;
  readonly techMegaMenu = techMegaMenu;
  readonly techSliderArticles = techSliderArticles;

  readonly sidebarSliderArticles = sidebarSliderArticles;

  readonly editorLeadArticle = editorLeadArticle;
  readonly editorArticles = editorArticles;

  readonly mostReadTabs = mostReadTabs;

  readonly categoryColumns = categoryColumns;

  readonly socialLinks = socialLinks;

  readonly featuredPlayerVideo = featuredPlayerVideo;
  readonly videoSidebarList = videoSidebarList;
}
