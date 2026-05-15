import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import type { HomeBrickItem } from '../../models/content-blocks.model';

@Component({
  selector: 'app-brick-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brick-article.component.html',
})
export class BrickArticleComponent {
  private readonly sanitizer = inject(DomSanitizer);

  @Input({ required: true }) item!: HomeBrickItem;

  backgroundStyle(): SafeStyle {
    const u = this.item.imageSrc.replace(/'/g, '%27');
    return this.sanitizer.bypassSecurityTrustStyle(`url('${u}')`);
  }
}
