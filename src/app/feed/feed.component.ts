import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(

    private router: Router

  ) { }

  ngOnInit() {

    if(environment.token == ''){

      //alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home'])

    }

  }

}
