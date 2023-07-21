import { Component, OnInit } from '@angular/core';
import { PostService } from './shared/services/post-services.service';
import { Ipost } from './shared/services/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Http';

  posts : Array<Ipost> = [];
constructor(private _postService : PostService){

}

  ngOnInit(): void {
  this._postService.getAllPosts()
  .subscribe(
    (res: any) => {
      console.log(res)
      this.posts = res;
    }
  )
    
  }







}
