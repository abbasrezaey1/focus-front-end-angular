import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

/** Shared off-canvas open state (panel lives outside `.t3-wrapper` like static `off-canvas.js`). */
@Injectable({ providedIn: 'root' })
export class SiteOffCanvasService {
  private readonly doc = inject(DOCUMENT);

  readonly open = signal(false);

  toggle(): void {
    if (this.open()) {
      this.close();
    } else {
      this.openPanel();
    }
  }

  openPanel(): void {
    this.open.set(true);
    this.doc.body.classList.add('off-canvas-open', 'off-canvas-effect-4', 'off-canvas-left');
  }

  close(): void {
    this.open.set(false);
    this.doc.body.classList.remove('off-canvas-open', 'off-canvas-effect-4', 'off-canvas-left', 'noscroll');
  }
}
