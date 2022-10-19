import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'app/models/login';

@Injectable({
  providedIn: 'root'
})
export class InicioSessionService {

  constructor(private http:HttpClient) { }


  iniciar_session(login:Login):Observable<any>
  {
    return this.http.post('http://localhost:3000/users',login)
  }

}
