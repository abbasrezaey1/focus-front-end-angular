import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { LatestGridCellInput } from '../../models/index-widget.model';

@Component({
  selector: 'app-latest-grid-row',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './latest-grid-row.component.html',
})
export class LatestGridRowComponent {
  @Input({ required: true }) cells!: LatestGridCellInput[];
}
