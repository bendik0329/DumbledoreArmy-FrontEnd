import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = environment.name;
  photo = environment.photo;
  id = environment.id;

  logo: string;

  constructor(

    private router: Router

  ) { }

  ngOnInit(){

    if(environment.type == "grifinoria"){

      this.logo = "https://i.imgur.com/5uFQ5IY.png";

    }else if(environment.type == "sonserina"){

      this.logo = "https://i.imgur.com/xMnPvAV.png";

    }else if(environment.type == "lufa"){

      this.logo = "https://i.imgur.com/Z8SrHOg.png";

    }else if(environment.type == "corvinal"){

      this.logo = "https://i.imgur.com/oYTEkcG.png";

    }else{

      this.logo = "https://i.imgur.com/5uFQ5IY.png";

    }

    
  }

    logoff(){

    this.router.navigate(['/home'])
    environment.token = '';
    environment.name = '';
    environment.photo = '';
    environment.id =0;

  }

  

}
