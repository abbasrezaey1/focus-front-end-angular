import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { Article, CategoryMenuItem, NewsSectionLayout } from '../../models/news-ui.model';
import { CategoryMenuComponent } from '../../components/category-menu/category-menu.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CategoryMenuComponent, NewsCardComponent],
  templateUrl: './news-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSectionComponent {
  @Input({ required: true }) accentClass!: string;
  @Input({ required: true }) menuItems!: CategoryMenuItem[];
  @Input({ required: true }) layoutType!: NewsSectionLayout;
  @Input() leadArticle?: Article;
  @Input() sidebarArticles: Article[] = [];
  @Input() bigArticles: Article[] = [];
  @Input() normalArticles: Article[] = [];
}
