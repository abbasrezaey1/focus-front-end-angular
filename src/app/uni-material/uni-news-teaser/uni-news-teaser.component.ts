import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { NewsCompactRowInput } from '../../models/story-teaser.model';

@Component({
  selector: 'app-uni-news-teaser',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './uni-news-teaser.component.html',
})
export class UniNewsTeaserComponent {
  @Input({ required: true }) accentClass!: string;
  @Input({ required: true }) item!: NewsCompactRowInput;
  /** When true, adds `col-md-6` for half-width sidebar columns. */
  @Input() colMd6 = false;
  /** When true, adds legacy `clear` helper on the row. */
  @Input() teaserClear = false;
  /** Legacy rows often include `clearfix`; category columns omit it. */
  @Input() clearfix = true;
  /** Image wrapper classes (legacy export used `pull- item-image` in places). */
  @Input() imageWrapperClass = 'pull-left item-image';
}
