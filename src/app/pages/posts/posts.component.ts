import { 
  ChangeDetectionStrategy, 
  Component
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mb-posts',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {}
