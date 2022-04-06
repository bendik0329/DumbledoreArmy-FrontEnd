import { PostService } from './../../service/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostModel } from './../../model/PostModel';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  postModel: PostModel = new PostModel();
  idPost: number;

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService

  ) { }

  ngOnInit(){

    
    if (environment.token == '') {

      alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home'])

    }

    this.idPost = this.route.snapshot.params['id'];
    this.findByIdPost(this.idPost);

  }

  findByIdPost(id: number){

    this.postService.getByIdPost(id).subscribe((resp: PostModel) =>{

      this.postModel = resp;

    })

  }

  delete(){

    this.postService.deletePost(this.idPost).subscribe(()=>{

      alert("Postagem apagada com Sucesso!");
      this.router.navigate(['/feed']);

    });

  }

}
