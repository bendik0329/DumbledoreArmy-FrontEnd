import { environment } from 'src/environments/environment.prod';
import { ThemeService } from './../../service/theme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemeModel } from './../../model/ThemeModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-delete',
  templateUrl: './theme-delete.component.html',
  styleUrls: ['./theme-delete.component.css']
})
export class ThemeDeleteComponent implements OnInit {

  theme: ThemeModel = new ThemeModel();
  idTheme: number;
  
  constructor(

    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    if(environment.token == ''){

      alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home']);

    }

    this.idTheme = this.route.snapshot.params['id'];
    this.findByIdTheme(this.idTheme);

  }

  findByIdTheme(id: number){

    this.themeService.GetByIdTheme(id).subscribe((resp: ThemeModel) =>{

      this.theme = resp;

    })

  }

  delete(){

    this.themeService.deleteTheme(this.idTheme).subscribe(()=>{

      alert("Tema apagado com sucesso!");
      this.router.navigate(['/theme']);

    });

  }

}
