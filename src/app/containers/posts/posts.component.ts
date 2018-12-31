import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { tap, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'wp-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  wordpressUrl: string;

  posts$ = this.route.params.pipe(
    mergeMap((params: Params) => {
      this.wordpressUrl = params.wordpressUrl;

      return this._postsService.get(this.wordpressUrl);
    })
  );

  constructor(private readonly _postsService: PostsService, private readonly route: ActivatedRoute) {}
}
