import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ABOUT_ALL_MEMBERS_ROW1,
  ABOUT_ALL_MEMBERS_ROW2,
  ABOUT_TOP_MEMBERS,
} from '../../content/about-page.data';
import { MemberTileComponent } from '../../ui/member-tile/member-tile.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MemberTileComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly topMembers = ABOUT_TOP_MEMBERS;
  readonly allMembersRow1 = ABOUT_ALL_MEMBERS_ROW1;
  readonly allMembersRow2 = ABOUT_ALL_MEMBERS_ROW2;
}
