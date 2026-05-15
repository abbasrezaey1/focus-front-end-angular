import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { MostReadGallerySlide, MostReadRow, MostReadTab } from '../../models/news-ui.model';
import { JaVideoListDirective } from '../../directives/ja-video-list.directive';

@Component({
  selector: 'app-most-read-tabs',
  standalone: true,
  imports: [RouterLink, NgClass, JaVideoListDirective],
  templateUrl: './most-read-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostReadTabsComponent {
  @Input({ required: true }) tabs!: MostReadTab[];

  active = 0;

  selectTab(i: number): void {
    this.active = i;
  }

  galleryJson(slides: MostReadGallerySlide[]): string {
    return JSON.stringify(slides);
  }
}
