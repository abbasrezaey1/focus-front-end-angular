import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { RectangleAdInput } from '../../../models/story-teaser.model';

@Component({
  selector: 'app-ad-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ad-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdBannerComponent {
  /** Full banner payload (image + routing). */
  @Input({ required: true }) config!: RectangleAdInput;
}
