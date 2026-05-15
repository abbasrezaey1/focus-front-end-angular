import { Component, Input } from '@angular/core';
import { MostReadTabsComponent } from '../../homepage/widgets/most-read-tabs/most-read-tabs.component';
import type { MostReadTab } from '../../homepage/models/news-ui.model';

@Component({
  selector: 'app-sidebar-most-read',
  standalone: true,
  imports: [MostReadTabsComponent],
  templateUrl: './sidebar-most-read.component.html',
})
export class SidebarMostReadComponent {
  @Input({ required: true }) tabs!: MostReadTab[];
}
