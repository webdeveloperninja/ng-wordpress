import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageContentComponent } from './containers/page-content/page-content.component';
import { WordpressInputComponent } from './containers/wordpress-input/wordpress-input.component';

const routes: Routes = [
  {
    path: 'site/:wordpressUrl',
    component: AppComponent,
    children: [
      {
        path: '',
        component: PageContentComponent
      },
      {
        path: ':slug',
        component: PageContentComponent
      },
      {
        path: '**',
        component: WordpressInputComponent
      }
    ]
  },
  {
    path: '**',
    component: WordpressInputComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
