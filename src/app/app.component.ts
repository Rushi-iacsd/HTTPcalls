import { Component, OnInit } from '@angular/core';
import { PostService } from './shared/services/post-services.service';
import { Ipost } from './shared/services/models/post';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Http';

  posts : Array<Ipost> = [];
constructor(private _postService : PostService,
  private _loaderservice : LoaderService){}


  isLoading !: boolean;

  ngOnInit(): void {

   this._loaderservice.loadingStatus
     .subscribe(res => {
      console.log(res)
        this.isLoading = res;
        console.log(this.isLoading)
     })





  // this._postService.getAllPosts()
  // .subscribe(
  //   (res: any) => {
  //     console.log(res)
  //     this.posts = res;
  //   }
  // )
    
  }







}
