import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-tile',
  standalone: true,
  templateUrl: './member-tile.component.html',
})
export class MemberTileComponent {
  @Input({ required: true }) imageSrc!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) role!: string;
  @Input() alt = '';
}
