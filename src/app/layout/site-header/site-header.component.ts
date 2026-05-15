import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrowseAllMegaComponent } from './browse-all-mega.component';
import { SiteChromeTopComponent } from './site-chrome-top.component';
import { SiteMegamenuHoverDirective } from './site-megamenu-hover.directive';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, BrowseAllMegaComponent, SiteChromeTopComponent, SiteMegamenuHoverDirective],
  templateUrl: './site-header.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      app-site-header {
        display: block;
      }

      @media (min-width: 992px) {
        app-site-header app-site-chrome-top {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        app-site-header > .container {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        app-site-header #t3-mainnav.t3-mainnav {
          margin-top: 0 !important;
        }
      }
    `,
  ],
})
export class SiteHeaderComponent {}
