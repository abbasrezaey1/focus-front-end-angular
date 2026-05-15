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

  toggleOffCanvas(): void {
    this.offCanvasOpen.update((v) => !v);
    this.doc.body.classList.toggle('off-canvas-open', this.offCanvasOpen());
  }

  closeOffCanvas(): void {
    this.offCanvasOpen.set(false);
    this.doc.body.classList.remove('off-canvas-open');
  }

  /** Same as static `js/script(1).js`: `.btn-search` toggles `.head-search.btn-open`. */
  toggleSearch(event: Event): void {
    event.stopPropagation();
    const open = !this.searchOpen();
    this.searchOpen.set(open);
    if (open) {
      this.socialOpen.set(false);
      queueMicrotask(() => this.searchInput()?.nativeElement.focus());
    }
  }

  /** Same as static: `.btn-social` toggles `.head-social.btn-open`. */
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
