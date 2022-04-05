import { AuthService } from './../service/auth.service';
import { UserModel } from './../model/UserModel';
import { ThemeModel } from './../model/ThemeModel';
import { ThemeService } from './../service/theme.service';
import { PostModel } from './../model/PostModel';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postModel: PostModel = new PostModel();
  listPost: PostModel[];

  theme: ThemeModel = new ThemeModel();
  listTheme: ThemeModel[];
  idTheme: number;

  user: UserModel = new UserModel();
  idUser = environment.id;

  constructor(

    private router: Router,
    private postService: PostService,
    private themeService: ThemeService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    window.scroll(0,0);

    if (environment.token == '') {

      alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home'])

    }

    this.getAllTheme();
    this.getAllPost();

  }

  getAllTheme() {

    this.themeService.getAllTheme().subscribe((resp: ThemeModel[]) => {

      this.listTheme = resp;

    })

  }

  findByIdTheme() {

    this.themeService.GetByIdTheme(this.idTheme).subscribe((resp: ThemeModel) => {

      this.theme = resp;

    })

  }

  getAllPost() {

    this.postService.getAllPost().subscribe((resp: PostModel[]) => {

      this.listPost = resp;

    })

  }

  findByIdUser() {

    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) => {

      this.user = resp

    })

  }

  post() {

    this.theme.id = this.idTheme;
    this.postModel.theme = this.theme;

    this.user.id = this.idUser;
    this.postModel.user = this.user;

    this.postService.post(this.postModel).subscribe((resp: PostModel) => {

      this.postModel = resp;
      alert("Postagem realizada com sucesso!");
      this.postModel = new PostModel();

      this.getAllPost();

    })

  }

}
