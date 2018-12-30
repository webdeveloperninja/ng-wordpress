import { Component, Input } from '@angular/core';

@Component({
  selector: 'wp-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
  @Input() content: string;
}
