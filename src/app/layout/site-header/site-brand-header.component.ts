import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-brand-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-brand-header.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      app-site-brand-header {
        display: block;
      }

      /* Mobile + tablet: centered logo with breathing room (not pinned to nav line). */
      @media (max-width: 991px) {
        #t3-header.t3-header {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        #t3-header.t3-header > .row {
          display: block !important;
          margin-bottom: 0 !important;
        }

        #t3-header.t3-header > .row::before,
        #t3-header.t3-header > .row::after {
          display: table !important;
          content: ' ' !important;
        }

        #t3-header.t3-header > .row::after {
          clear: both !important;
        }

        #t3-header.t3-header > .row > .logo {
          float: none !important;
          width: 100% !important;
          max-width: 100% !important;
          text-align: center !important;
          min-height: 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          margin-top: 28px;
          margin-bottom: 28px;
        }

        #t3-header.t3-header > .row > .col-lg-8 {
          float: none !important;
          width: 100% !important;
          max-width: 100% !important;
          clear: both;
        }

        #t3-header.t3-header .logo-text,
        #t3-header.t3-header .logo-text a {
          line-height: 1 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        #t3-header.t3-header .logo-text a {
          display: inline-block;
        }

        #t3-header.t3-header .t3-sl {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        #t3-header.t3-header .t3-sl .t3-module {
          min-height: 0 !important;
          align-items: center !important;
          margin-bottom: 0 !important;
        }

        #t3-header.t3-header .t3-header-magazine__imgwrap {
          margin-bottom: 0;
        }
      }

      @media (max-width: 767px) {
        #t3-header.t3-header > .row > .logo {
          margin-top: 32px;
          margin-bottom: 32px;
        }
      }

      /* Desktop: logo left, newsletter/breaking aligned to nav rule. */
      @media (min-width: 992px) {
        #t3-header.t3-header {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        #t3-header.t3-header > .row {
          display: flex !important;
          flex-wrap: wrap;
          align-items: flex-end !important;
          margin-bottom: 0 !important;
        }

        #t3-header.t3-header > .row::before,
        #t3-header.t3-header > .row::after {
          display: none !important;
        }

        #t3-header.t3-header > .row > .logo {
          float: none !important;
          width: 33.33333333%;
          flex: 0 0 33.33333333%;
          max-width: 33.33333333%;
          min-height: 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          margin-top: 0;
          margin-bottom: 24px;
          text-align: left !important;
        }

        #t3-header.t3-header .t3-header-magazine__imgwrap {
          margin-bottom: -10px;
        }

        #t3-header.t3-header > .row > .col-lg-8 {
          float: none !important;
          width: 66.66666667%;
          flex: 0 0 66.66666667%;
          max-width: 66.66666667%;
        }

        #t3-header.t3-header .logo-text,
        #t3-header.t3-header .logo-text a {
          line-height: 1 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        #t3-header.t3-header .logo-text span {
          display: inline-block;
          line-height: 0.82;
          vertical-align: bottom;
        }

        #t3-header.t3-header .t3-sl {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        #t3-header.t3-header .t3-sl .t3-module {
          min-height: 0 !important;
          display: flex !important;
          align-items: flex-end !important;
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        #t3-header.t3-header .t3-sl .t3-spotlight.row {
          margin-bottom: 0 !important;
        }
      }
    `,
  ],
})
export class SiteBrandHeaderComponent {}
