import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { NewsCompactRowInput } from '../../models/story-teaser.model';

@Component({
  selector: 'app-news-compact-row',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './news-compact-row.component.html',
})
export class NewsCompactRowComponent {
  @Input({ required: true }) accentClass!: string;
  @Input({ required: true }) item!: NewsCompactRowInput;
}
