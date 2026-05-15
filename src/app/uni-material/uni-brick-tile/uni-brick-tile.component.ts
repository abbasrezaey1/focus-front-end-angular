import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import type { HomeBrickItem } from '../../models/content-blocks.model';

@Component({
  selector: 'app-uni-brick-tile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './uni-brick-tile.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class UniBrickTileComponent {
  private readonly sanitizer = inject(DomSanitizer);

  @Input({ required: true }) item!: HomeBrickItem;

  backgroundStyle(): SafeStyle {
    const u = this.item.imageSrc.replace(/'/g, '%27');
    return this.sanitizer.bypassSecurityTrustStyle(`url('${u}')`);
  }
}
