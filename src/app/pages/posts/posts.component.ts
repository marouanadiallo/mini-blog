import { 
  ChangeDetectionStrategy, 
  Component, 
  inject 
} from '@angular/core';

import { PostService } from './post.service';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';


@Component({
  selector: 'mb-posts',
  imports: [
    AsyncPipe,
    SpinnerComponent
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {
  private readonly _postService = inject(PostService);

  posts$ = this._postService.getPosts();

  addPost() {
    alert('Add post');
  }

  editPost(id: number) {
    alert(`Edit post ${id}`);
  }

  deletePost(id: number) {
    alert(`Delete post ${id}`);
  }
}
