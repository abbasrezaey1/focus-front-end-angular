import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-tools-dropdown',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-tools-dropdown.component.html',
})
export class ArticleToolsDropdownComponent {
  @Input() showEmail = true;
  /** Joomla-style edit/delete row (single article view). */
  @Input() showEditDelete = false;
  @Input() printLink: string | any[] = '/article';
}
