import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_TEASER_ROWS } from '../../content/blog-page.data';
import { BlogPostTeaserComponent } from '../../ui/blog-post-teaser/blog-post-teaser.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, BlogPostTeaserComponent],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  readonly rows = BLOG_TEASER_ROWS;
  readonly extraPages = [2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

  columnClass(index: number): 'column-1' | 'column-2' | 'column-3' {
    if (index === 0) {
      return 'column-1';
    }
    if (index === 1) {
      return 'column-2';
    }
    return 'column-3';
  }
}
