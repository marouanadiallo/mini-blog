import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutModule } from './shared/components/layout.module';

@Component({
  selector: 'mb-root',
  imports: [
    RouterOutlet,
    LayoutModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'mini-blog';
}
