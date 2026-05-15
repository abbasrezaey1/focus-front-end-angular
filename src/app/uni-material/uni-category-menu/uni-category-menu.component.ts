import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CategoryMenuItemInput } from '../../models/index-widget.model';

@Component({
  selector: 'app-uni-category-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './uni-category-menu.component.html',
})
export class UniCategoryMenuComponent {
  @Input({ required: true }) items!: CategoryMenuItemInput[];
}
