import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import type { Article } from '../../models/news-ui.model';
import type { NewsCompactRowInput, NewsFeatureRowInput } from '../../../models/story-teaser.model';
import { UniNewsLeadComponent } from '../../../uni-material/uni-news-lead/uni-news-lead.component';
import { UniNewsMediumComponent } from '../../../uni-material/uni-news-medium/uni-news-medium.component';
import { ArticleMetaComponent } from '../article-meta/article-meta.component';
import { UniNewsTeaserComponent } from '../../../uni-material/uni-news-teaser/uni-news-teaser.component';
import { JaVideoListDirective } from '../../directives/ja-video-list.directive';

export type NewsCardVariant = 'big' | 'medium' | 'normal' | 'slider' | 'video';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    UniNewsLeadComponent,
    UniNewsMediumComponent,
    UniNewsTeaserComponent,
    ArticleMetaComponent,
    JaVideoListDirective,
  ],
  templateUrl: './news-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NewsCardComponent {
  private readonly sanitizer = inject(DomSanitizer);

  @Input({ required: true }) variant!: NewsCardVariant;
  @Input({ required: true }) item!: Article;
  @Input({ required: true }) accentClass!: string;
  @Input() firstInRow = false;
  @Input() imageWrapperClass = 'pull-left item-image';
  /** Half-width `news-normal` columns (Sport / World grids). */
  @Input() colMd6 = false;
  /** Swiper slide width for `slider` variant. */
  @Input() slideWidthPx = 384;

  /** Maps `Article` to existing uni “feature” row model. */
  asFeature(): NewsFeatureRowInput {
    return {
      ...this.item,
      intro: this.item.intro ?? '',
    };
  }

  asCompact(): NewsCompactRowInput {
    return this.item;
  }

  backgroundStyle(): SafeStyle {
    const u = this.item.imageSrc.replace(/'/g, '%27');
    return this.sanitizer.bypassSecurityTrustStyle(`url('${u}')`);
  }
}
