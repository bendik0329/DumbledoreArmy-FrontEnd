import { AlertsService } from './../../service/alerts.service';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from './../../service/theme.service';
import { ThemeModel } from './../../model/ThemeModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent implements OnInit {

  theme: ThemeModel = new ThemeModel();

  constructor(

    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService

  ) { }

  ngOnInit(){

    if(environment.token == ''){

      this.alerts.showAlertInfo("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home']);

    }

    let id = this.route.snapshot.params['id'];
    this.findByIdTheme(id);
  }

  findByIdTheme(id: number){

    this.themeService.GetByIdTheme(id).subscribe((resp: ThemeModel) => {

        this.theme = resp;

    })

  }

  updateTheme(){

    this.themeService.putTheme(this.theme).subscribe((resp: ThemeModel) =>{

      this.theme = resp;
      this.alerts.showAlertSuccess("Tema atualizado com sucesso!");
      this.router.navigate(["/theme"]);

    })

  }

}
