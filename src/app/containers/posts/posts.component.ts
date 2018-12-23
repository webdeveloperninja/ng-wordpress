import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'wp-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  posts$ = this._postsService.get().pipe(tap(p => console.log(p)));

  constructor(private readonly _postsService: PostsService) {}
}
