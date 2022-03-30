import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor(

    private router: Router

  ) { }

  ngOnInit(){

    if(environment.token == ''){

      //alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home'])

    }

  }

}
