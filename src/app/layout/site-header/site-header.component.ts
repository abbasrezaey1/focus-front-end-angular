import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';



import { BrowseAllMegaComponent } from './browse-all-mega.component';

import { SiteChromeTopComponent } from './site-chrome-top.component';
import { SiteMegamenuHoverDirective } from './site-megamenu-hover.directive';



@Component({

  selector: 'app-site-header',

  standalone: true,

  imports: [RouterLink, BrowseAllMegaComponent, SiteChromeTopComponent, SiteMegamenuHoverDirective],

  templateUrl: './site-header.component.html',

  styles: [

    `

      :host {

        display: block;

      }

    `,

  ],

})

export class SiteHeaderComponent {}

