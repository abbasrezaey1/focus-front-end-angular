import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteOffCanvasService } from './site-off-canvas.service';

@Component({
  selector: 'app-site-off-canvas',
  standalone: true,
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './site-off-canvas.component.html',
})
export class SiteOffCanvasComponent {
  readonly offCanvas = inject(SiteOffCanvasService);

  close(): void {
    this.offCanvas.close();
  }
}
