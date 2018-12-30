import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'wp-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  gap = '1em';
  wordpressUrl: string;

  pages$ = this.route.params.pipe(
    mergeMap((params: any) => {
      this.wordpressUrl = params.wordpressUrl;

      return this._pagesService.get(this.wordpressUrl);
    })
  );

  constructor(private readonly _pagesService: PagesService, private readonly route: ActivatedRoute) {}
}
