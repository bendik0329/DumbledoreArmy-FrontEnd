import { Observable } from 'rxjs';
import { ThemeModel } from './../model/ThemeModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(

    private http: HttpClient

  ) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  postTheme(theme: ThemeModel): Observable<ThemeModel> {

    return this.http.post<ThemeModel>('https://dumbledorearmy.herokuapp.com/theme', theme, this.token);

  }

  getAllTheme(): Observable<ThemeModel[]> {

    return this.http.get<ThemeModel[]>('https://dumbledorearmy.herokuapp.com/theme', this.token);

  }

  GetByIdTheme(id: number): Observable<ThemeModel>{

    return this.http.get<ThemeModel>(`https://dumbledorearmy.herokuapp.com/theme/${id}`, this.token);

  }

  getByNameTheme(name: string): Observable<ThemeModel[]>{

    return this.http.get<ThemeModel[]>(`https://dumbledorearmy.herokuapp.com/theme/name/${name}`, this.token);

  }

  putTheme(theme: ThemeModel): Observable<ThemeModel>{

    return this.http.put<ThemeModel>('https://dumbledorearmy.herokuapp.com/theme', theme, this.token);

  }

  deleteTheme(id: number){

    return this.http.delete(`https://dumbledorearmy.herokuapp.com/theme/${id}`, this.token);

  }

}
