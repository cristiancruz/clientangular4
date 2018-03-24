
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
    constructor(private router: Router) {

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
}
