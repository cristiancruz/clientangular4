import { MessageToastViewService } from './../../services/messagetoas.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from './../../services/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 user;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, public messageToastViewService: MessageToastViewService, private sessionService: SessionService) {
      this.user = {
        'email': '',
        'password': '****'
      };
  }
  login() {
    // tslint:disable-next-line:quotemark
    if (this.user.email !== "" && this.user.email !== null && this.user.password !== "" && this.user.password !== null) {
    if(this.user.email =="test@test.com" && this.user.password == "test"){
        this.sessionService.login(this.user);
    }else{
        this.messageToastViewService.showMessageWarning('Aviso', 'Datos incorrectos');
    }
    } else {
      this.messageToastViewService.showMessageWarning('Aviso', 'Completa todos los campos.');
    }

  }

}
