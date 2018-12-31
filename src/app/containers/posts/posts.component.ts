import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { tap, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/contracts/post';

@Component({
  selector: 'wp-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  posts$ = this.route.params.pipe(mergeMap(this.getPosts.bind(this)));

  constructor(private readonly _postsService: PostsService, private readonly route: ActivatedRoute) {}

  private getPosts(params: Params): Observable<Post[]> {
    const wordpressUrl = params.wordpressUrl;

    return this._postsService.get(wordpressUrl);
  }
}
