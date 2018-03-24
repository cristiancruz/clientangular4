import { MessageToastViewService } from './../../services/messagetoas.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 user;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, public messageToastViewService: MessageToastViewService) {
      this.user = {
        'email': '',
        'password': '****'
      };
  }
  login() {
    // tslint:disable-next-line:quotemark
    if (this.user.email !== "" && this.user.email !== null && this.user.password !== "" && this.user.password !== null) {
      console.log('enviar datos');
    } else {
      this.messageToastViewService.showMessageWarning('Aviso', 'Completa todos los campos.');
    }

  }

}


