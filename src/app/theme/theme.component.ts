import { AlertsService } from './../service/alerts.service';
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
    private router: Router,
    private alerts: AlertsService

  ) { }

  ngOnInit(){

    if(environment.token == ''){

      this.alerts.showAlertInfo("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home'])

    }

    if(environment.type != 'adm'){

      this.alerts.showAlertDanger("Você precisa ser adm para acessar essa rota!")
      this.router.navigate(['/feed'])

    }

    this.findAllTheme()

  }

  registerTheme(){

    this.themeService.postTheme(this.theme).subscribe((resp:ThemeModel) => {

      this.theme = resp;
      this.alerts.showAlertSuccess("Tema cadastrado com sucesso!");
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
