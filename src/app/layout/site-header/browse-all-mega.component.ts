import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** “Browse All Sections” mega panel from static `index.html` (must stay a real `<li>` inside `.nav`). */
@Component({
  selector: 'li[appBrowseAllMega]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './browse-all-mega.component.html',
})
export class BrowseAllMegaComponent {}
