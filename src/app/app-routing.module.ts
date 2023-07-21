import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/services/components/dashboard/dashboard.component';
import { PostsComponent } from './shared/services/components/posts/posts.component';
import { CreatepostComponent } from './shared/services/components/createpost/createpost.component';
import { PostComponent } from './shared/services/components/post/post.component';

const routes: Routes = [

{path : '',  component : DashboardComponent},
{path : 'posts' , component : PostsComponent},
{path : 'posts/:id' , component : PostComponent},
{path : 'posts/:id/edit' , component : CreatepostComponent},
{path : 'createpost' , component : CreatepostComponent},
{path : 'createpost/:id' , component : CreatepostComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
