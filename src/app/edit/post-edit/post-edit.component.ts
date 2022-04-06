import { ThemeService } from './../../service/theme.service';
import { ThemeModel } from './../../model/ThemeModel';
import { environment } from './../../../environments/environment.prod';
import { PostService } from './../../service/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostModel } from './../../model/PostModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postModel: PostModel = new PostModel();
  theme: ThemeModel = new ThemeModel();
  listTheme: ThemeModel[];
  idTheme: number;

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private themeService: ThemeService

  ) { }

  ngOnInit(){

    
    if (environment.token == '') {

      alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home'])

    }

    let id = this.route.snapshot.params['id'];
    this.findByIdPost(id);
    this.getAllTheme();

  }

  findByIdPost(id: number){

    this.postService.getByIdPost(id).subscribe((resp: PostModel) =>{

      this.postModel = resp;

    })

  }

  findByIdTheme(){

    this.themeService.GetByIdTheme(this.idTheme).subscribe((resp: ThemeModel) =>{

      this.theme = resp

    });

  }

  getAllTheme() {

    this.themeService.getAllTheme().subscribe((resp: ThemeModel[]) => {

      this.listTheme = resp;

    })

  }

  update(){

    this.theme.id = this.idTheme;
    this.postModel.theme =  this.theme;


    this.postService.put(this.postModel).subscribe((resp: PostModel) =>{

      this.postModel = resp;
      alert("Postagem atualizada com sucesso!");
      this.router.navigate(['/feed']);

    })

  }

}
