import { 
  AfterContentInit,
  ChangeDetectionStrategy, 
  Component, 
  contentChild, 
  ElementRef, 
  input, 
  output 
} from '@angular/core';
import { Post } from '../../../core';


@Component({
  selector: 'mb-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements AfterContentInit {
  post = input.required<Post>();

  readMoreEvent = output<number>();

  //@ContentChild('btn') content: ElementRef;
  content = contentChild<ElementRef>('btn');

  onReadMore() {
    this.readMoreEvent.emit(this.post().id);
  }

  ngAfterContentInit() {
    console.log('PostCardComponent => content initialized', { content: this.content() });
  }
}
