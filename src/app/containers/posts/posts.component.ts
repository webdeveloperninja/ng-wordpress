import { Component } from '@angular/core';
import { PostsService } from 'projects/ng-wordpress/src/lib/services/posts.service';

@Component({
  selector: 'wp-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  posts$ = this._postsService.get$();

  constructor(private readonly _postsService: PostsService) {
    console.log('constructor');
  }
}
