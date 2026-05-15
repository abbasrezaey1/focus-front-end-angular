import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

/** Top utility bar: nav links, expandable search, share/social strip (JA Focus `index.html`). */
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

  private readonly searchPanel = viewChild<ElementRef<HTMLElement>>('searchPanel');
  private readonly socialPanel = viewChild<ElementRef<HTMLElement>>('socialPanel');
  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  readonly offCanvasOpen = signal(false);
  readonly searchOpen = signal(false);
  readonly socialOpen = signal(false);

  searchWord = '';

  /** First hamburger: toggles `.t3-navbar-collapse` (category list), like static Bootstrap collapse. */
  toggleNavCollapse(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    const panel = this.doc.querySelector('#t3-mainnav .t3-navbar-collapse');
    if (!(panel instanceof HTMLElement)) {
      return;
    }

    const opening = !panel.classList.contains('in');
    if (opening) {
      this.closeOffCanvas();
      panel.classList.add('in');
    } else {
      panel.classList.remove('in');
    }
  }

  /** Second hamburger: off-canvas sidebar (Top Menu + Main Menu), like static `off-canvas.js`. */
  toggleOffCanvas(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.offCanvasOpen()) {
      this.closeOffCanvas();
      return;
    }

    this.closeNavCollapse();
    this.offCanvasOpen.set(true);

    const body = this.doc.body;
    body.classList.add('off-canvas-open', 'off-canvas-effect-4', 'off-canvas-left');
  }

  closeOffCanvas(): void {
    this.offCanvasOpen.set(false);
    this.doc.body.classList.remove('off-canvas-open', 'off-canvas-effect-4', 'off-canvas-left', 'noscroll');
  }

  closeNavCollapse(): void {
    this.doc.querySelector('#t3-mainnav .t3-navbar-collapse')?.classList.remove('in');
  }

  toggleSearch(event: Event): void {
    event.stopPropagation();
    const open = !this.searchOpen();
    this.searchOpen.set(open);
    if (open) {
      this.socialOpen.set(false);
      queueMicrotask(() => this.searchInput()?.nativeElement.focus());
    }
  }

  toggleSocial(event: Event): void {
    event.stopPropagation();
    const open = !this.socialOpen();
    this.socialOpen.set(open);
    if (open) {
      this.searchOpen.set(false);
    }
  }

  submitSearch(): void {
    const q = this.searchWord.trim();
    this.searchOpen.set(false);
    this.socialOpen.set(false);
    void this.router.navigate(['/search'], { queryParams: q ? { q } : {} });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    const searchEl = this.searchPanel()?.nativeElement;
    if (searchEl && !searchEl.contains(target)) {
      this.searchOpen.set(false);
    }

    const socialEl = this.socialPanel()?.nativeElement;
    if (socialEl && !socialEl.contains(target)) {
      this.socialOpen.set(false);
    }
  }
}
