import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mb-spinner',
  imports: [],
  template: `
    <span class="loader"></span>
  `,
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  hello = 'world';

  show() {
    alert('Show spinner');
  }
}
