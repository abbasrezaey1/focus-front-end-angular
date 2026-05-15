import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { NewsFeatureRowInput } from '../../models/story-teaser.model';

@Component({
  selector: 'app-news-feature-row',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './news-feature-row.component.html',
})
export class NewsFeatureRowComponent {
  /** Matches JA Focus category accent (e.g. `link-cat-purple`). */
  @Input({ required: true }) accentClass!: string;
  @Input({ required: true }) item!: NewsFeatureRowInput;
}
