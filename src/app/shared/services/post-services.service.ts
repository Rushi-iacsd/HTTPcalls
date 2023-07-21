import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    allpostUrl : string = `${environment.baseUrl}/posts`
   constructor(private _http : HttpClient){ }


    getAllPosts() : Observable<Ipost[]> {
      return this._http.get<Array<Ipost>>(this.allpostUrl)
    }

    getPost(id:number) : Observable<Ipost>  {
      let singlePostUrl = `${this.allpostUrl}/${id}`;
    return  this._http.get<Ipost>(singlePostUrl)
    }


    deletePost(id:number) : Observable<any>{
      let deleteUrl   =  `${environment.baseUrl}/posts/${id}`;
      return this._http.delete<any>(deleteUrl)
    }

  

     createPost(post: Ipost) : Observable<Ipost>{
      return this._http.post<Ipost>(this.allpostUrl,post)
     }



    UpdatePost(post:Ipost) : Observable<any>{
     const updateUrl = `${environment.baseUrl}/posts/${post.id}`
     return this._http.patch<any>(updateUrl,post)    
    }
 


  }

