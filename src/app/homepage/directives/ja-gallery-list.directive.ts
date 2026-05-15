import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  inject,
} from '@angular/core';
import type { GallerySlide } from '../../content/gallery-page.data';
import { GalleryLightboxService } from '../services/gallery-lightbox.service';

@Directive({
  selector: '[appJaGalleryList]',
  standalone: true,
})
export class JaGalleryListDirective implements AfterViewInit, OnDestroy {
  @Input({ required: true }) gallerySlides: GallerySlide[] = [];

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly lightbox = inject(GalleryLightboxService);
  private clickTarget: HTMLElement | null = null;

  private readonly onClick = (event: Event): void => {
    const container = this.host.nativeElement;
    const btnPlay = container.querySelector('.btn-play');
    if (
      btnPlay &&
      event.target !== btnPlay &&
      !btnPlay.contains(event.target as Node)
    ) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.lightbox.open(this.gallerySlides);
  };

  ngAfterViewInit(): void {
    const container = this.host.nativeElement;
    const btnPlay = container.querySelector('.btn-play');
    const target = (btnPlay as HTMLElement | null) ?? container;
    this.clickTarget = target;
    target.addEventListener('click', this.onClick);
  }

  ngOnDestroy(): void {
    this.clickTarget?.removeEventListener('click', this.onClick);
  }
}
