import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { LatestNewsItem } from '../../data/static-blog-pages.data';

@Component({
  selector: 'app-sidebar-latest-news',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar-latest-news.component.html',
})
export class SidebarLatestNewsComponent {
  @Input({ required: true }) items!: LatestNewsItem[];
}
