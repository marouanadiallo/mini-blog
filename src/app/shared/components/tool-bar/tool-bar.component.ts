import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'mb-tool-bar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent {

}
