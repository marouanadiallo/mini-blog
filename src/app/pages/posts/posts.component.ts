import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mb-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {

}
