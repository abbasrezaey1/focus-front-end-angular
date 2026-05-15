import { Injectable } from '@angular/core';
import type { GallerySlide } from '../../content/gallery-page.data';

@Injectable({ providedIn: 'root' })
export class GalleryLightboxService {
  private overlay: HTMLElement | null = null;
  private slides: GallerySlide[] = [];
  private index = 0;

  open(slides: GallerySlide[], startIndex = 0): void {
    if (!slides.length) {
      return;
    }
    this.slides = slides;
    this.index = Math.min(Math.max(0, startIndex), slides.length - 1);
    this.ensureOverlay();
    this.render();
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
    document.body.style.overflow = '';
  }

  private ensureOverlay(): void {
    if (this.overlay) {
      return;
    }

    const root = document.createElement('div');
    root.className = 'gallery-lightbox-overlay';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');

    root.innerHTML = `
      <button type="button" class="gallery-lightbox-close" aria-label="Close">&times;</button>
      <button type="button" class="gallery-lightbox-prev" aria-label="Previous">
        <span class="fa fa-angle-left"></span>
      </button>
      <button type="button" class="gallery-lightbox-next" aria-label="Next">
        <span class="fa fa-angle-right"></span>
      </button>
      <div class="gallery-lightbox-stage">
        <img class="gallery-lightbox-image" alt="" />
      </div>
    `;

    root.addEventListener('click', (event) => {
      if (event.target === root) {
        this.close();
      }
    });

    root.querySelector('.gallery-lightbox-close')?.addEventListener('click', () => this.close());
    root.querySelector('.gallery-lightbox-prev')?.addEventListener('click', (event) => {
      event.stopPropagation();
      this.step(-1);
    });
    root.querySelector('.gallery-lightbox-next')?.addEventListener('click', (event) => {
      event.stopPropagation();
      this.step(1);
    });

    document.body.appendChild(root);
    this.overlay = root;
  }

  private step(delta: number): void {
    if (!this.slides.length) {
      return;
    }
    this.index = (this.index + delta + this.slides.length) % this.slides.length;
    this.render();
  }

  private render(): void {
    if (!this.overlay) {
      return;
    }
    const img = this.overlay.querySelector<HTMLImageElement>('.gallery-lightbox-image');
    if (!img) {
      return;
    }
    const slide = this.slides[this.index];
    img.src = slide.href;
    img.alt = slide.title;
  }
}
