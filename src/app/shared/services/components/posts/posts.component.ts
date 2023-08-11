import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../../post-services.service';
import { Ipost } from '../../models/post';
import { Observable, Subject, interval, takeUntil } from 'rxjs';
import { AuthInterceptorService } from '../../auth-interceptor.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit , OnDestroy{


  postArray : Array<Ipost> = [];
  // errorMsg : boolean = false

  postArray$ !: Observable<Ipost[]>;

 // unsubscribe$ : Subject<void> = new Subject<void>()
  constructor(private _postservice : PostService,
    private _authInterceptor : AuthInterceptorService) { }
  

  ngOnInit(): void {


  //  this.postArray$ = this._postservice.getAllPosts()
  //   this._postservice.getAllPosts()
  //   .subscribe(
  //     (res) => {
  //      this.postArray = res },
  //   // (err) => {console.log(`Something went wrong while fetching all Posts`)}
  //   )


  //   const interval$ = interval(1000)
  //   interval$
  //   .subscribe(console.log)
  //   interval$
  //   .subscribe(console.log)
  //   interval$
  //   .subscribe(console.log)
   }


  ngOnDestroy(): void{
    //  this.unsubscribe$.next()
    //  this.unsubscribe$.complete()
  
    this._authInterceptor.unsubscribeAll()
    }


  }

