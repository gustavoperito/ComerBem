import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestauranteProvider {

  constructor(public http: HttpClient) {}

  getRestaurantes() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    return this.http.get("http://comerbem-cloud.umbler.net/restaurantes", {headers: headers});
  }
}
