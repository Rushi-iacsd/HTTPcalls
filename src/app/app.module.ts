import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './shared/services/components/posts/posts.component';
import { PostComponent } from './shared/services/components/post/post.component';
import { CreatepostComponent } from './shared/services/components/createpost/createpost.component';
import { DashboardComponent } from './shared/services/components/dashboard/dashboard.component';
import { NavComponent } from './shared/services/components/nav/nav.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CreatepostComponent,
    DashboardComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
