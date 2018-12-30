import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wp-created-at',
  templateUrl: './created-at.component.html'
})
export class CreatedAtComponent {
  @Input() date: Date;
}
