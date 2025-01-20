import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiUrl: string;
  readonly requestsOptions: any;
  readonly headers_object: any;
  private headers: HeadersInit;

  constructor() {
    this.apiUrl = environment.apiUrl;


    // Configurando os headers

    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
    this.headers.append('Access-Control-Allow-Origin', '*');
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      var token = sessionStorage.getItem('token') || {};
      this.headers_object = new HttpHeaders().set(
        'Authorization', 'Bearer ' + token
      );
    }
  }
}
