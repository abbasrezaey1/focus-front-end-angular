import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { RectangleAdInput } from '../../models/story-teaser.model';

@Component({
  selector: 'app-uni-sidebar-ad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './uni-sidebar-ad.component.html',
})
export class UniSidebarAdComponent {
  @Input({ required: true }) ad!: RectangleAdInput;
}
