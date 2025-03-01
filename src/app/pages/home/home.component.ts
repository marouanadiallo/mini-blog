import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { PostService } from '../posts/post.service';
import { AsyncPipe } from '@angular/common';
import { PostCardComponent } from '../../shared/components/post-card/post-card.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { Router } from '@angular/router';

/**
 * Hooks: lié au cycle de vie d'un composant
 * - ngOnChanges: appelé à chaque fois qu'une propriété d'entrée change - @Input | input<>()
 * - ngOnInit: appelé une fois après la création du composant
 * - ngOnDestroy: appelé une fois avant la destruction du composant
 * 
 * Hooks supplémentaires liés au cycle de vie d'un composant :
 * - ngDoCheck: appelé à chaque fois que le composant est vérifié
 * 
 * - ngAfterContentInit: appelé une fois après l'initialisation du contenu
 * - ngAfterContentChecked: appelé à chaque fois que le contenu est vérifié
 * 
 * - ngAfterViewInit: appelé une fois après l'initialisation de la vue
 * - ngAfterViewChecked: appelé à chaque fois que la vue est vérifiée
 * 
 */
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
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
  private readonly _postService = inject(PostService);
  private readonly _router = inject(Router);

  posts$ = this._postService.getPosts();

  //@ViewChild('postsContainer') container: ElementRef;

  container = viewChild<ElementRef>('postsContainer');

  constructor() {
    console.log('$HomeComponent => created', { containerFromConstructor: this.container() });
  }

  ngOnInit() {
    console.log('$HomeComponent => initialized');
  }

  ngOnDestroy() {
    console.log('$HomeComponent => destroyed');
  }


  ngAfterViewInit() {
    console.log('$HomeComponent => view initialized', { container: this.container() });
  }

  //ng-content
  ngAfterContentInit() {
    console.log('$HomeComponent => content initialized');
  }

  // ngDoCheck(): void {
  //   console.log('$HomeComponent => checked');
  // }
  
  // // ng-content
  // ngAfterContentChecked(): void {
  //   console.log('$HomeComponent => content checked');
  // }
  
  // ngAfterViewChecked(): void {
  //   console.log('$HomeComponent => view checked');
  // }

  readMore(postId: number) {
    this._router.navigate(['posts', postId, 'details']);
  }
}
