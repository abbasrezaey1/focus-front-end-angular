import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FeaturedPlayerVideo, VideoTeaserData } from '../../models/news-ui.model';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './video-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoListComponent {
  @Input({ required: true }) featuredVideo!: FeaturedPlayerVideo;
  @Input({ required: true }) videos!: VideoTeaserData[];
}
