import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { PostService } from "../post.service";
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'mb-post-list',
    imports: [
        AsyncPipe,
        SpinnerComponent
    ],
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent {
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