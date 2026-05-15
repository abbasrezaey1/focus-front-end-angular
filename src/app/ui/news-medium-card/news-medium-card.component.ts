import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { NewsFeatureRowInput } from '../../models/story-teaser.model';

@Component({
  selector: 'app-news-medium-card',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './news-medium-card.component.html',
})
export class NewsMediumCardComponent {
  @Input({ required: true }) item!: NewsFeatureRowInput;
  @Input({ required: true }) accentClass!: string;
  /** Matches export where the first card in a row uses `.clear`. */
  @Input() firstInRow = false;
}
