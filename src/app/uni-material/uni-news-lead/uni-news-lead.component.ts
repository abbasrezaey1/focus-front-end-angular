import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { NewsFeatureRowInput } from '../../models/story-teaser.model';

@Component({
  selector: 'app-uni-news-lead',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './uni-news-lead.component.html',
})
export class UniNewsLeadComponent {
  /** Matches JA Focus category accent (e.g. `link-cat-purple`). */
  @Input({ required: true }) accentClass!: string;
  @Input({ required: true }) item!: NewsFeatureRowInput;
  /** `half` = col-md-6, `wide` = col-md-12, `flow` = full-width lead (sidebar editor pick). */
  @Input() leadLayout: 'half' | 'wide' | 'flow' = 'half';
  @Input() clearfix = false;
  /** Wrapper classes on the image column (legacy exports used `pull- item-image`). */
  @Input() imageWrapperClass = 'pull-left item-image';
  /** Editor pick: print title before the date/category meta row. */
  @Input() metaAfterTitle = false;
}
