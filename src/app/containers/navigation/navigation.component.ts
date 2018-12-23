import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'wp-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  gap = '1em';
  pages$ = this._pagesService.get();

  constructor(private readonly _pagesService: PagesService) {}

  ngOnInit() {}
}
