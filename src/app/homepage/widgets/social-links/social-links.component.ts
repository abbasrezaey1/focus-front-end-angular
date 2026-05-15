import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { SocialLinkItem } from '../../models/news-ui.model';

@Component({
  selector: 'app-social-links',
  standalone: true,
  templateUrl: './social-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {
  @Input({ required: true }) items!: SocialLinkItem[];
}
