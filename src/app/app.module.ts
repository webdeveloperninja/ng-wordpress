import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { PostsComponent } from './containers/posts/posts.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { PageContentComponent } from './containers/page-content/page-content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WordpressInputComponent } from './containers/wordpress-input/wordpress-input.component';
import { ContentComponent } from './components/content/content.component';
import { CreatedAtComponent } from './components/created-at/created-at.component';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, NavigationComponent, PageContentComponent, WordpressInputComponent, ContentComponent, CreatedAtComponent, AuthorsComponent],
  imports: [
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
