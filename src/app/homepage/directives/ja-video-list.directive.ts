import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';

/**
 * Replaces legacy `JAVideoPlayer.playlist()` (index.html): injects `data-video` iframe
 * into `#ja-main-player` when present, otherwise into `.video-wrapper` inside the teaser.
 */
@Directive({
  selector: '[appJaVideoList]',
  standalone: true,
})
export class JaVideoListDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
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
    this.play(container);
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

  private play(container: HTMLElement): void {
    const encoded = container.getAttribute('data-video');
    if (!encoded) {
      return;
    }

    const mainPlayer = document.getElementById('ja-main-player');
    let target: HTMLElement | null;
    let clearData = false;

    if (mainPlayer) {
      target = mainPlayer;
    } else {
      target =
        (container.querySelector('.video-wrapper') as HTMLElement | null) ??
        this.ensureVideoWrapper(container);
      clearData = true;
    }

    if (!target) {
      return;
    }

    document.querySelectorAll('.ja-video-list').forEach((el) => {
      el.classList.remove('video-playing');
    });
    container.classList.add('video-playing');

    const width = mainPlayer ? target.clientWidth : container.offsetWidth;
    const height = mainPlayer ? target.offsetHeight : container.offsetHeight;

    target.innerHTML = encoded;
    target.style.display = '';

    target.querySelectorAll('iframe.ja-video, video').forEach((node) => {
      const media = node as HTMLElement;
      media.removeAttribute('width');
      media.removeAttribute('height');
      media.style.width = `${width}px`;
      media.style.height = `${height}px`;
    });

    if (clearData) {
      container.setAttribute('data-video', '');
    }

    if (mainPlayer) {
      window.setTimeout(() => {
        mainPlayer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }

  private ensureVideoWrapper(container: HTMLElement): HTMLElement {
    let wrapper = container.querySelector('.video-wrapper') as HTMLElement | null;
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.className = 'video-wrapper';
      container.appendChild(wrapper);
    }
    return wrapper;
  }
}
