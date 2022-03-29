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

  user: UserModel = new UserModel;
  confirmPassword: string;
  typeUsers: string;

  constructor(
    private authService:AuthService,
    private router: Router
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

      alert("As senhas precisam ser iguais!");

    }else{

      this.authService.Register(this.user).subscribe((resp:UserModel) =>{

        this.user = resp;
        this.router.navigate(["/login"]);
        alert("Usuário cadastrado com sucesso!");
      });      

    }

  }

}
