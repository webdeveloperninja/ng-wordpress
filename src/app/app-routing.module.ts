import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageContentComponent } from './containers/page-content/page-content.component';
import { WordpressInputComponent } from './containers/wordpress-input/wordpress-input.component';
import { PostsComponent } from './containers/posts/posts.component';

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
        path: 'posts',
        component: PostsComponent
      },
      {
        path: ':slug',
        component: PageContentComponent
      },
      {
        path: '**',
        redirectTo: 'posts'
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
