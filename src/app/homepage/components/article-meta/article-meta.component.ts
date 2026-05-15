import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-meta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleMetaComponent {
  @Input() categoryLabel?: string;
  @Input() categoryLink?: string;
  @Input() dateLine?: string;
}
