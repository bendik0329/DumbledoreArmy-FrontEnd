import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private html:HttpClient) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  Login(userLogin: UserLogin): Observable<UserLogin>{

    return this.html.post<UserLogin>('http://localhost:8080/user/login', userLogin);

  }

  Register(user:UserModel): Observable<UserModel>{

    return this.html.post<UserModel>('http://localhost:8080/user/register', user);

  }

  getByIdUser(id: number): Observable<UserModel>{

    return this.html.get<UserModel>(`http://localhost:8080/user/${id}`);

  }
  Logged(){

    let ok = false;

    if(environment.token != ''){

      ok = true;

    }

    return ok;

  }

}
