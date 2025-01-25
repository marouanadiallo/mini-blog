import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PostService } from './post.service';
import { PostCardComponent } from '../../shared/components/post-card/post-card.component';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'mb-posts',
  imports: [
    AsyncPipe,
    PostCardComponent
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {
  private readonly _postService = inject(PostService);

  posts$ = this._postService.getPosts();

  editPost(postId: number) {
    confirm(`Editing post with id: ${postId}`);
  }

  readMore(postId: number) {
    confirm(`Reading more about post with id: ${postId}`);
  }
}
