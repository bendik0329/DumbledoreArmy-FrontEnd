import { ThemeModel } from './../model/ThemeModel';
import { ThemeService } from './../service/theme.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: ThemeModel = new ThemeModel;
  listTheme: ThemeModel[];

  constructor(

    private themeService: ThemeService,
    private router: Router

  ) { }

  ngOnInit(){

    if(environment.token == ''){

      alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home'])

    }

    this.findAllTheme()

  }

  registerTheme(){

    this.themeService.postTheme(this.theme).subscribe((resp:ThemeModel) => {

      this.theme = resp;
      alert("Tema cadastrado com sucesso!");
      this.findAllTheme();
      this.theme = new ThemeModel;

    })

  }

  findAllTheme(){

    this.themeService.getAllTheme().subscribe((resp:ThemeModel[]) =>{

      this.listTheme = resp

    })

  }

}
