import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { Article, EditorSidebarEntry } from '../../models/news-ui.model';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-news-widget',
  standalone: true,
  imports: [NewsCardComponent, RouterLink, NgClass],
  templateUrl: './sidebar-news-widget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarNewsWidgetComponent {
  /** Mirrors module `<span>` title for accessibility; outer `module-title` stays in the shell. */
  @Input() title = '';
  @Input({ required: true }) accentClass!: string;
  @Input({ required: true }) leadArticle!: Article;
  @Input({ required: true }) articles!: EditorSidebarEntry[];
}
