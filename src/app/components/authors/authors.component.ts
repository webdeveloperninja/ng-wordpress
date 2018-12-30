import { Component, Input } from '@angular/core';
import { PostAuthor } from 'src/app/contracts/author';

@Component({
  selector: 'wp-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent {
  @Input() authors: PostAuthor[];
}
