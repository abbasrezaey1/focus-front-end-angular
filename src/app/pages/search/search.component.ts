import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';

import { STATIC_SEARCH_RESULTS } from './search-static.data';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly demoHits = STATIC_SEARCH_RESULTS;

  readonly query = toSignal(this.route.queryParamMap.pipe(map((m) => m.get('q') ?? '')), {
    initialValue: '',
  });

  searchDraft = '';

  constructor() {
    effect(() => {
      this.searchDraft = this.query();
    });
  }

  submitSearch(): void {
    const q = this.searchDraft.trim();
    void this.router.navigate(['/search'], { queryParams: q ? { q } : {} });
  }
}
