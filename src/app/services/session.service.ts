
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class SessionService {
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

   logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
    active() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    login(data) {
        localStorage.setItem('currentUser', JSON.stringify({name: data.email, email: data.password}));
    if (this.activatedRoute.snapshot.queryParams['returnUrl'] !="" && this.activatedRoute.snapshot.queryParams['returnUrl'] != "undefined"  && this.activatedRoute.snapshot.queryParams['returnUrl'] != null ) {
        this.router.navigate([this.activatedRoute.snapshot.queryParams['returnUrl']]);
    } else {
      this.router.navigate(['/']);
  }
}
}
