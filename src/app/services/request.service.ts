import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {
    public url: string;

    constructor(private _httpC: HttpClient) {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    getArticulos() {
        return this._httpC.get(this.url);
    }
}
