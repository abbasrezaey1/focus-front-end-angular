import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CategoryMenuItem, CategoryMenuMega } from '../../models/news-ui.model';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryMenuComponent {
  @Input({ required: true }) items!: CategoryMenuItem[];
  /** When set, renders trailing Bootstrap mega `dropdown-menu` block (Tech homepage). */
  @Input() mega?: CategoryMenuMega;
}
