import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../post-services.service';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  postid !: number;
  postObject !: Ipost;
  constructor(private _route : ActivatedRoute,
    private _postservice : PostService) { }

  ngOnInit(): void {
  
   this.postid = +this._route.snapshot
   .params['id']
      this._postservice.getPost(this.postid)
      .subscribe(
        (res) => {
          this.postObject = res;
        }
      )

  }

  onDelete(id:number){

    this._postservice.deletePost(id)
    .subscribe(
      (res => {
        console.log(res)
      }),
      (err) => {console.log(`Something went wrong while fetching all Posts`)}
    )
  }
}
