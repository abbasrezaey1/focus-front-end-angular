import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CategoryMenuItemInput } from '../../models/index-widget.model';

@Component({
  selector: 'app-category-menu-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-menu-list.component.html',
})
export class CategoryMenuListComponent {
  @Input({ required: true }) items!: CategoryMenuItemInput[];
}
