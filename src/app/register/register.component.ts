import { AlertsService } from './../service/alerts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel();
  confirmPassword: string;
  typeUsers: string;

  constructor(
    private authService:AuthService,
    private router: Router,
    private alerts: AlertsService

    ) { }

  ngOnInit(){

    window.scroll(0,0);

  }

  confirmePassword(event:any){

    this.confirmPassword = event.target.value;

  }

  typeUser(event:any){

    this.typeUsers = event.target.value;

  }

  register(){

    this.user.type = this.typeUsers;

    if(this.user.password != this.confirmPassword){

      this.alerts.showAlertDanger("As senhas precisam ser iguais!");

    }else{

      this.authService.Register(this.user).subscribe((resp:UserModel) =>{

        this.user = resp;
        this.router.navigate(["/login"]);
        this.alerts.showAlertSuccess("Usuário cadastrado com sucesso!");
      });      

    }

  }

}


