import { Component } from '@angular/core';

import { SiteBrandHeaderComponent } from './site-brand-header.component';
import { SiteLeaderboardBannerComponent } from './site-leaderboard-banner.component';
import { SiteTopbarComponent } from './site-topbar.component';

/**
 * Top chrome as three separate pieces: leaderboard, utility topbar, brand row (`#t3-header`).
 */
@Component({
  selector: 'app-site-chrome-top',
  standalone: true,
  imports: [SiteLeaderboardBannerComponent, SiteTopbarComponent, SiteBrandHeaderComponent],
  template: `
    <div class="site-chrome-top">
      <app-site-leaderboard-banner />
      <app-site-topbar />
      <app-site-brand-header />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .site-chrome-top {
        display: block;
      }
    `,
  ],
})
export class SiteChromeTopComponent {}
