import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LEADERBOARD_BANNER } from '../../content/site-chrome.data';

@Component({
  selector: 'app-site-leaderboard-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-leaderboard-banner.component.html',
  styles: [
    `
      :host {
        display: block;
      }

      .site-hd-sponsor__img {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
        width: auto;
        height: auto;
        max-height: 90px;
        object-fit: contain;
      }
    `,
  ],
})
export class SiteLeaderboardBannerComponent {
  readonly banner = LEADERBOARD_BANNER;

  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const fallback = '/images/top-leaderboard.jpg';
    if (!img.src.includes('top-leaderboard.jpg')) {
      img.src = fallback;
    }
  }
}
