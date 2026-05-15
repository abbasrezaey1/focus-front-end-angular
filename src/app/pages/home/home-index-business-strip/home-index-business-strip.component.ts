import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BUSINESS_GALLERY_ITEM,
  BUSINESS_MEDIUM_BLOCKS,
  BUSINESS_NAV,
} from '../../../content/home-index-unified.data';
import { UniCategoryMenuComponent } from '../../../uni-material/uni-category-menu/uni-category-menu.component';
import { UniNewsMediumComponent } from '../../../uni-material/uni-news-medium/uni-news-medium.component';

@Component({
  selector: 'app-home-index-business-strip',
  standalone: true,
  imports: [RouterLink, UniCategoryMenuComponent, UniNewsMediumComponent],
  templateUrl: './home-index-business-strip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeIndexBusinessStripComponent {
  readonly nav = BUSINESS_NAV;
  readonly blocks = BUSINESS_MEDIUM_BLOCKS;
  readonly galleryItem = BUSINESS_GALLERY_ITEM;
  readonly accentClass = 'link-cat-orange';
}
