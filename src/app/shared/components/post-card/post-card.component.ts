import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Post } from '../../../core';

@Component({
  selector: 'mb-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent {
  post = input.required<Post>();

  readMoreEvent = output<number>();
  editEvent = output<number>();

  onReadMore() {
    this.readMoreEvent.emit(this.post().id);
  }

  onEdit() {
    this.editEvent.emit(this.post().id);
  }
}
