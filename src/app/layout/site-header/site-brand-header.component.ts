import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-brand-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-brand-header.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SiteBrandHeaderComponent {}
