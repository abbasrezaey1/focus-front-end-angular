import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { BlogTeaser } from '../../models/blog-teaser.model';
import { ArticleToolsDropdownComponent } from '../article-tools-dropdown/article-tools-dropdown.component';

@Component({
  selector: 'app-blog-post-teaser',
  standalone: true,
  imports: [RouterLink, ArticleToolsDropdownComponent],
  templateUrl: './blog-post-teaser.component.html',
})
export class BlogPostTeaserComponent {
  @Input({ required: true }) teaser!: BlogTeaser;
  @Input({ required: true }) columnClass!: 'column-1' | 'column-2';
  @Input() genreLink: string | any[] = '/gallery';
  @Input() articleLink: string | any[] = '/article';
}
