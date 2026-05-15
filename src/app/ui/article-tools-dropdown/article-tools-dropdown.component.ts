import { Component, HostListener, Input, signal } from '@angular/core';
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

  readonly open = signal(false);

  toggle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.open.update((v) => !v);
  }

  @HostListener('document:click')
  closeOnOutsideClick(): void {
    this.open.set(false);
  }

  @HostListener('click', ['$event'])
  stopInsideClick(event: Event): void {
    event.stopPropagation();
  }
}
