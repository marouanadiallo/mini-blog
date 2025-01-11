import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolBarComponent } from './shared/components/tool-bar/tool-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'mb-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    ToolBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'mini-blog';
}
