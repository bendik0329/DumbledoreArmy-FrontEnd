import { Observable, retry } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../model/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(

    private http: HttpClient

  ) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  getAllPost(): Observable<PostModel[]> {

    return this.http.get<PostModel[]>("http://localhost:8080/post", this.token);

  }

  getByIdPost(id: number): Observable<PostModel>{

    return this.http.get<PostModel>(`http://localhost:8080/post/${id}`, this.token);

  }

  getByTitlePost(title: string): Observable<PostModel[]>{

    return this.http.get<PostModel[]>(`http://localhost:8080/post/title/${title}`, this.token)

  }

  post(post: PostModel): Observable<PostModel> {

    return this.http.post<PostModel>("http://localhost:8080/post", post, this.token);

  }

  put(post: PostModel): Observable<PostModel>{

    return this.http.put<PostModel>('http://localhost:8080/post', post, this.token);

  }

  deletePost(id: number){

    return this.http.delete(`http://localhost:8080/post/${id}`, this.token);

  }

}
