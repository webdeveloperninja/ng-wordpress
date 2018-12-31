import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { Post } from 'src/app/angular-wordpress/contracts/post';
import { PostsService } from 'src/app/angular-wordpress/services/posts.service';

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
