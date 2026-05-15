import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';

interface MegaItemState {
  status: 'open' | 'close';
  timer?: ReturnType<typeof setTimeout>;
  astimer?: ReturnType<typeof setTimeout>;
  atimer?: ReturnType<typeof setTimeout>;
  onEnter: () => void;
  onLeave: () => void;
}

/**
 * Replaces static `menu.js` hover for `.t3-megamenu.animate.fading` (400ms fade).
 */
@Directive({
  selector: '[appSiteMegamenuHover]',
  standalone: true,
})
export class SiteMegamenuHoverDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly duration = 400;
  private readonly hideDelay = 200;
  private readonly bindings: { li: HTMLElement; state: MegaItemState }[] = [];
  private hideAllTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly itemState = new WeakMap<HTMLElement, MegaItemState>();

  private readonly onMegaMenuEnter = () => this.clearHideAll();
  private readonly onMegaMenuLeave = () => this.scheduleHideAll();

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const root = this.el.nativeElement;
    root.addEventListener('mouseenter', this.onMegaMenuEnter);
    root.addEventListener('mouseleave', this.onMegaMenuLeave);

    const megaItems = Array.from(
      root.querySelectorAll(':scope > .nav > li.dropdown.mega'),
    ) as HTMLElement[];
    for (const li of megaItems) {
      const state: MegaItemState = {
        status: 'close',
        onEnter: () => this.show(li),
        onLeave: () => this.hide(li),
      };
      this.itemState.set(li, state);
      this.bindings.push({ li, state });
      li.addEventListener('mouseenter', state.onEnter);
      li.addEventListener('mouseleave', state.onLeave);
    }
  }

  ngOnDestroy(): void {
    const root = this.el.nativeElement;
    root.removeEventListener('mouseenter', this.onMegaMenuEnter);
    root.removeEventListener('mouseleave', this.onMegaMenuLeave);

    for (const { li, state } of this.bindings) {
      li.removeEventListener('mouseenter', state.onEnter);
      li.removeEventListener('mouseleave', state.onLeave);
      this.clearTimers(state);
    }
    this.bindings.length = 0;
    this.clearHideAll();
  }

  private clearTimers(s: MegaItemState): void {
    if (s.timer) {
      clearTimeout(s.timer);
      s.timer = undefined;
    }
    if (s.astimer) {
      clearTimeout(s.astimer);
      s.astimer = undefined;
    }
    if (s.atimer) {
      clearTimeout(s.atimer);
      s.atimer = undefined;
    }
  }

  private show(li: HTMLElement): void {
    this.clearHideAll();
    this.hideOthers(li);

    const s = this.itemState.get(li);
    if (!s) {
      return;
    }

    this.clearTimers(s);

    if (s.status === 'open' && li.classList.contains('open')) {
      return;
    }

    s.astimer = setTimeout(() => li.classList.add('animating'), 10);
    s.timer = setTimeout(() => li.classList.add('open'), 100);
    s.atimer = setTimeout(() => li.classList.remove('animating'), this.duration + 50);
    s.status = 'open';
  }

  private hide(li: HTMLElement): void {
    const s = this.itemState.get(li);
    if (!s) {
      return;
    }

    this.clearTimers(s);
    li.classList.add('animating');
    s.atimer = setTimeout(() => li.classList.remove('animating'), this.duration);
    s.timer = setTimeout(() => li.classList.remove('open'), 100);
    s.status = 'close';
    this.scheduleHideAll();
  }

  private hideOthers(active: HTMLElement): void {
    for (const { li } of this.bindings) {
      if (li !== active) {
        this.hideImmediate(li);
      }
    }
  }

  private hideImmediate(li: HTMLElement): void {
    const s = this.itemState.get(li);
    if (!s) {
      return;
    }
    this.clearTimers(s);
    li.classList.remove('animating', 'open');
    s.status = 'close';
  }

  private scheduleHideAll(): void {
    this.clearHideAll();
    this.hideAllTimer = setTimeout(() => this.hideAll(), this.hideDelay);
  }

  private clearHideAll(): void {
    if (this.hideAllTimer) {
      clearTimeout(this.hideAllTimer);
      this.hideAllTimer = null;
    }
  }

  private hideAll(): void {
    for (const { li } of this.bindings) {
      this.hideImmediate(li);
    }
  }
}
