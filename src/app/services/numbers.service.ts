import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class PlacesService {

  routeMain = '';
  routeFull = '';

  constructor(private apiService: ApiService, public http: HttpClient, private router: Router) {

    this.routeMain = apiService.routeMain;

  }

  public findPlace(id): Observable<any> {
    this.routeFull = this.routeMain + 'places/' + id;
    return this.http.get(this.routeFull);
  }

  public getPlaces(): Observable<any> {
    this.routeFull = this.routeMain + 'places';
    return this.http.get(this.routeFull);
  }

  public savePlace(data): Observable<any> {
    this.routeFull = this.routeMain + 'places/create';
    // tslint:disable-next-line:prefer-const
    // let json = JSON.stringify(data);
    // console.log(json);
    // const params = 'json=' + json;
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.routeFull, data, {headers: headers});
  }
  public updatePlace(data) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.routeFull = this.routeMain + 'places/' + data.id;
    return this.http.put(this.routeFull, data, {headers: headers});
  }
  public deletePlace(id): Observable<any> {
     this.routeFull = this.routeMain + 'places/' + id;
    return this.http.delete(this.routeFull);
  }

}
