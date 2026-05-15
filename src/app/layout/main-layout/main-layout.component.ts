import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { SiteOffCanvasComponent } from '../site-header/site-off-canvas.component';
import { SiteOffCanvasService } from '../site-header/site-off-canvas.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SiteOffCanvasComponent, SiteHeaderComponent, RouterOutlet, SiteFooterComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  private readonly doc = inject(DOCUMENT);
  private readonly offCanvas = inject(SiteOffCanvasService);

  readonly backTopVisible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.backTopVisible.set(this.doc.defaultView?.scrollY ? this.doc.defaultView.scrollY > 400 : false);
  }

  scrollTop(): void {
    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** Tap dimmed page to close off-canvas (static `off-canvas.js` binds `.t3-wrapper` click). */
  onWrapperClick(event: MouseEvent): void {
    if (!this.offCanvas.open()) {
      return;
    }
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('#t3-off-canvas, .off-canvas-toggle')) {
      return;
    }
    this.offCanvas.close();
  }
}
