import { Component, Input } from '@angular/core';
import { Author } from 'projects/ng-wordpress/src/lib/contracts/author';

@Component({
  selector: 'wp-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent {
  @Input() authors: Author[];
}
