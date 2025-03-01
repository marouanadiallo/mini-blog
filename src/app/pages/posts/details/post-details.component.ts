import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { exhaustMap, finalize } from 'rxjs';
import { AsyncPipe } from '@angular/common';

declare type RouteParams = {
  id?: number;
}

@Component({
  selector: 'mb-details',
  imports: [
    AsyncPipe
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailsComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  postService = inject(PostService);

  post$ = this.activatedRoute.params.pipe(
    finalize(() => console.log('Params subscription completed')),
    exhaustMap(
      (params: RouteParams) => this.postService.getPost(params.id!).pipe(
        finalize(() => console.log('Request completed'))
      )
    )
  );

  ngOnInit(): void {
   
  }
}
