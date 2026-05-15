import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-topbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './site-topbar.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SiteTopbarComponent {
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);

  readonly offCanvasOpen = signal(false);
  searchWord = '';

  toggleOffCanvas(): void {
    this.offCanvasOpen.update((v) => !v);
    this.doc.body.classList.toggle('off-canvas-open', this.offCanvasOpen());
  }

  closeOffCanvas(): void {
    this.offCanvasOpen.set(false);
    this.doc.body.classList.remove('off-canvas-open');
  }

  submitSearch(): void {
    const q = this.searchWord.trim();
    void this.router.navigate(['/search'], { queryParams: q ? { q } : {} });
  }
}
