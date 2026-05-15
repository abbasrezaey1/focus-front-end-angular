import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { NewsFeatureRowInput } from '../../models/story-teaser.model';

@Component({
  selector: 'app-uni-news-medium',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './uni-news-medium.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class UniNewsMediumComponent {
  @Input({ required: true }) item!: NewsFeatureRowInput;
  @Input({ required: true }) accentClass!: string;
  /** Matches export where the first card in a row uses `.clear`. */
  @Input() firstInRow = false;
  /** Image wrapper classes (legacy export used `pull- item-image` in places). */
  @Input() imageWrapperClass = 'pull-left item-image';
}
