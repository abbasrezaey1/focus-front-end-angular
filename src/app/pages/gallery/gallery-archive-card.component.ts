import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { GalleryArchiveItem } from '../../content/gallery-page.data';
import { JaGalleryListDirective } from '../../homepage/directives/ja-gallery-list.directive';
import { ArticleToolsDropdownComponent } from '../../ui/article-tools-dropdown/article-tools-dropdown.component';

@Component({
  selector: 'app-gallery-archive-card',
  standalone: true,
  imports: [RouterLink, JaGalleryListDirective, ArticleToolsDropdownComponent],
  templateUrl: './gallery-archive-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryArchiveCardComponent {
  @Input({ required: true }) item!: GalleryArchiveItem;
}
