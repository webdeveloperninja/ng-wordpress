import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { tap, switchMap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wp-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  gap = '1em';
  wordpressUrl: string;

  pages$ = this.route.params.pipe(
    switchMap((params: any) => {
      this.wordpressUrl = params.wordpressUrl;

      return this._pagesService.get(this.wordpressUrl);
    })
  );

  constructor(private readonly _pagesService: PagesService, private readonly route: ActivatedRoute) {}

  ngOnInit() {}
}
