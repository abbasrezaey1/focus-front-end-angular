import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  GALLERY_PAGE_FEATURED,
  GALLERY_PAGE_ROWS,
} from '../../content/gallery-page.data';
import { GalleryArchiveCardComponent } from './gallery-archive-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryArchiveCardComponent, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  readonly featured = GALLERY_PAGE_FEATURED;
  readonly rows = GALLERY_PAGE_ROWS;

  readonly activeSlide = signal(0);

  selectSlide(index: number): void {
    this.activeSlide.set(index);
  }

  prevSlide(event: Event): void {
    event.preventDefault();
    const count = this.featured.slides.length;
    this.activeSlide.update((i) => (i - 1 + count) % count);
  }

  nextSlide(event: Event): void {
    event.preventDefault();
    const count = this.featured.slides.length;
    this.activeSlide.update((i) => (i + 1) % count);
  }
}
