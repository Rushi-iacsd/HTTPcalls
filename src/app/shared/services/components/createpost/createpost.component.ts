import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { PostService } from '../../post-services.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {

  postid !: number;

  postForm !: FormGroup;

  constructor(private _route : ActivatedRoute,
    private fb : FormBuilder,
    private _postservice : PostService,
    private _router : Router ){ }


  ngOnInit(): void {
    this.createPostForm();
    this._route.params
    .subscribe((params : Params)  => {
      this.postid =  +params['id']


      if(this.postid){
      this._postservice.getPost(this.postid)
       .subscribe( (res) => {
           console.log(res);
           this.postForm.patchValue(res);
          })
      }
    })
    console.log(Math.ceil(Math.random() * 10))

  }


   createPostForm(){
    this.postForm = this.fb.group({
      title : new FormControl('', [Validators.required]),
      body : new FormControl('', [Validators.required]),
     })
   }

   onPostCreate(){
    if(this.postForm.valid){
      console.log(`post created`, this.postForm.value)

       let postObject = {
         userid : Math.ceil(Math.random() * 10),
            ...this.postForm.value
        }
        this._postservice.createPost(postObject)
        .subscribe(
          res => {
          console.log(res);
          
          this._router.navigate(['/posts'])
            },
          err => console.log(err)
        )
    }
   }


   onUpdatePost() {
    let postObject = {
      ...this.postForm.value,
      id : this.postid,
    }

    console.log(this.postForm.value)
    console.log(postObject);
   
    this._postservice.UpdatePost(postObject)
    .subscribe(
      (res) => {
        console.log(res);
       this._router.navigate(['/posts']) },
      (err) => console.log(err)
    )
  
  }

}
