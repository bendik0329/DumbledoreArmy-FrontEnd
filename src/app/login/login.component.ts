import { AlertsService } from './../service/alerts.service';
import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(

    private authService: AuthService,
    private router: Router,
    private alerts: AlertsService

  ) { }

  ngOnInit() {

    window.scroll(0,0);

  }

  login(){

    this.authService.Login(this.userLogin).subscribe((resp: UserLogin) => {

      this.userLogin = resp;

      environment.token = this.userLogin.token;
      environment.name = this.userLogin.name;
      environment.photo = this.userLogin.photo;
      environment.id = this.userLogin.id;
      environment.type = this.userLogin.type;

      this.router.navigate(["/feed"]);

    }, error => {if(error.status == 500 || error.status == 401){

      this.alerts.showAlertDanger("Usuário ou senha estão incorretos!");

    }
  })

  }

}
