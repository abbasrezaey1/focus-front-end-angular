import { DOCUMENT } from '@angular/common';

import { Component, HostListener, inject, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { SiteFooterComponent } from '../site-footer/site-footer.component';

import { SiteHeaderComponent } from '../site-header/site-header.component';



@Component({

  selector: 'app-main-layout',

  standalone: true,

  imports: [SiteHeaderComponent, RouterOutlet, SiteFooterComponent],

  templateUrl: './main-layout.component.html',

})

export class MainLayoutComponent {

  private readonly doc = inject(DOCUMENT);



  readonly backTopVisible = signal(false);



  @HostListener('window:scroll')

  onScroll(): void {

    this.backTopVisible.set(this.doc.defaultView?.scrollY ? this.doc.defaultView.scrollY > 400 : false);

  }



  scrollTop(): void {

    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });

  }

}

