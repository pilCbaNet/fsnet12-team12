import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deposito } from 'app/models/deposito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepositoService {
  constructor(private http: HttpClient) {}

  obtenerDatosCuenta(): Observable<any> {
    return this.http.get('http://localhost:3000/cuentas');
  }

  guardarDeposito(deposito: Deposito): Observable<any> {
    console.log('Deposito service:');
    console.log(deposito);

    return this.http.post(
      'https://localhost:7225/api/operaciones/deposito',
      deposito
    );
  }
}
