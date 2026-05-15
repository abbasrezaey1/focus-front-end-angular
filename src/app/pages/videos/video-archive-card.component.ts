import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { VideoArchiveItem } from '../../content/videos-page.data';
import { ArticleToolsDropdownComponent } from '../../ui/article-tools-dropdown/article-tools-dropdown.component';
import { JaVideoListDirective } from '../../homepage/directives/ja-video-list.directive';

@Component({
  selector: 'app-video-archive-card',
  standalone: true,
  imports: [RouterLink, ArticleToolsDropdownComponent, JaVideoListDirective],
  templateUrl: './video-archive-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoArchiveCardComponent {
  @Input({ required: true }) item!: VideoArchiveItem;
}
