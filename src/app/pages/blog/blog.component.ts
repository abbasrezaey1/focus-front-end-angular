import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  readonly posts = [
    {
      title: 'Merkel Vows to Stay on Course Despite Party Setback',
      teaser: 'Summary of the political context and next steps for the coalition.',
      img: '/images/news-14.jpeg',
    },
    {
      title: 'Spain on the brink: violence erupts as police chief sacked',
      teaser: 'Regional tensions and institutional responses in focus.',
      img: '/images/news-7.jpg',
    },
    {
      title: 'Business News and Financial News',
      teaser: 'Markets, currencies, and corporate headlines in brief.',
      img: '/images/news-16.jpeg',
    },
  ];
}
