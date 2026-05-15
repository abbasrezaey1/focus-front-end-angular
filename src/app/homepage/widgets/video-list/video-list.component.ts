import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FeaturedPlayerVideo, VideoTeaserData } from '../../models/news-ui.model';
import { JaVideoListDirective } from '../../directives/ja-video-list.directive';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [RouterLink, JaVideoListDirective],
  templateUrl: './video-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoListComponent {
  @Input({ required: true }) featuredVideo!: FeaturedPlayerVideo;
  @Input({ required: true }) videos!: VideoTeaserData[];
}
