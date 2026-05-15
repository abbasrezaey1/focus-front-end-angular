import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { MostReadRow } from '../../data/static-blog-pages.data';

@Component({
  selector: 'app-sidebar-most-read',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './sidebar-most-read.component.html',
})
export class SidebarMostReadComponent {
  @Input({ required: true }) rows!: MostReadRow[];
}
