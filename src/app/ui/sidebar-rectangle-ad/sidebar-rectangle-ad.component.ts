import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { RectangleAdInput } from '../../models/story-teaser.model';

@Component({
  selector: 'app-sidebar-rectangle-ad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar-rectangle-ad.component.html',
})
export class SidebarRectangleAdComponent {
  @Input({ required: true }) ad!: RectangleAdInput;
}
