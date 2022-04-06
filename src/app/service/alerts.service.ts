import { AlertComponent } from './../alert/alert.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(

    private bsModalService: BsModalService,

  ) { }

    private showAlert(message: string, type: string){

      const bsModalRef: BsModalRef = this.bsModalService.show(AlertComponent);
      bsModalRef.content.type = type;
      bsModalRef.content.message = message;
    }

    showAlertDanger(message: string){

      this.showAlert(message, 'danger');

    }

    showAlertSuccess(message: string){

      this.showAlert(message, 'success');

    }

    showAlertInfo(message: string){

      this.showAlert(message, 'info');

    }

}
