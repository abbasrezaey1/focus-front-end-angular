import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-widget',
  standalone: true,
  templateUrl: './sidebar-widget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarWidgetComponent {
  @Input({ required: true }) title!: string;
  @Input() moduleId?: string;
}
