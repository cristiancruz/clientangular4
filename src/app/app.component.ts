import { SessionService } from './services/session.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sessionService: SessionService) {

    // localStorage.setItem('currentUser', JSON.stringify({name: 'Cristian', email: 'cristian@apto.mx'}));

  }
  logout() {
    this.sessionService.logout();
  }
}

