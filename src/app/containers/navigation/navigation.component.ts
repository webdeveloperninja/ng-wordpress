import { Component } from '@angular/core';
import { PagesService } from 'src/app/angular-wordpress/services/pages.service';

@Component({
  selector: 'wp-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  pages$ = this._pagesService.get$();

  constructor(private readonly _pagesService: PagesService) {}
}
