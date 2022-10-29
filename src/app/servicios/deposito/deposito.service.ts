import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deposito } from 'app/models/deposito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  constructor(private http:HttpClient) { }

  obtenerDatosCuenta(): Observable<any>
  {
    return this.http.get("http://localhost:3000/cuentas");
  }

  guardarDeposito(deposito:Deposito): Observable<any>
  {
    return this.http.post("http://localhost:3000/posts", deposito);
  }
}
