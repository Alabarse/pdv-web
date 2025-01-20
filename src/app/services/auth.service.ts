import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(
    private httpClient: HttpClient
  ) {
    super()
  }


  autenticaUsuario(body: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}funcionario/auth`, body, {headers: new HttpHeaders({ 'Content-Type': 'application/json'})});
  }
}
