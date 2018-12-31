import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { ContentComponent } from './components/content/content.component';
import { CreatedAtComponent } from './components/created-at/created-at.component';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { PageContentComponent } from './containers/page-content/page-content.component';
import { PostsComponent } from './containers/posts/posts.component';
import { ThemeModule } from './theme/theme.module';
import { AngularWordpressModule } from './angular-wordpress/angular-wordpress.module';

const wordpressConfig: any = { baseUrl: 'http://localhost:8080/test/WordPress/' };

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavigationComponent,
    PageContentComponent,
    ContentComponent,
    CreatedAtComponent,
    AuthorsComponent
  ],
  imports: [
    AngularWordpressModule.forRoot(wordpressConfig),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ThemeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
