import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  VIDEOS_PAGE_FEATURED,
  VIDEOS_PAGE_ITEMS,
} from '../../content/videos-page.data';
import { VideoArchiveCardComponent } from './video-archive-card.component';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [VideoArchiveCardComponent],
  templateUrl: './videos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosComponent {
  readonly featured = VIDEOS_PAGE_FEATURED;
  readonly row0 = VIDEOS_PAGE_ITEMS.slice(0, 3);
  readonly row1 = VIDEOS_PAGE_ITEMS.slice(3);

  readonly mainPlayerActive = signal(false);

  featuredEmbedUrl(): string {
    return `https://www.youtube.com/embed/${this.featured.videoId}?autoplay=1`;
  }

  playFeatured(event: Event): void {
    event.preventDefault();
    this.mainPlayerActive.set(true);
  }
}
