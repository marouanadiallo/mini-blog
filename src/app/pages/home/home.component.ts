import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostService } from '../posts/post.service';
import { AsyncPipe } from '@angular/common';
import { PostCardComponent } from '../../shared/components/post-card/post-card.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@Component({
  selector: 'mb-home',
  imports: [
    AsyncPipe,

    PostCardComponent,
    SpinnerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly _postService = inject(PostService);

  posts$ = this._postService.getPosts();

  readMore(postId: number) {
    confirm(`Reading more about post with id: ${postId}`);
  }
}
