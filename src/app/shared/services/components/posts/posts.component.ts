import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post-services.service';
import { Ipost } from '../../models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  postArray : Array<Ipost> = [];
  // errorMsg : boolean = false

  postArray$ !: Observable<Ipost[]>
  constructor(private _postservice : PostService) { }

  ngOnInit(): void {


   this.postArray$ = this._postservice.getAllPosts()
   


  //   this._postservice.getAllPosts()
  //   .subscribe(
  //     (res) => {
  //      this.postArray = res ;
  //     },
  //   (err) => {console.log(`Something went wrong while fetching all Posts`)}
  //   )
  // }


  }
}
