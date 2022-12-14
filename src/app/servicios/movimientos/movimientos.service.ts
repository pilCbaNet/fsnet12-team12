import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retiros } from 'app/models/retiros';

@Injectable({
  providedIn: 'root',
})
export class MovimientosService {
  constructor(private http: HttpClient) {}

  obtenerMovimientos(): Observable<any> {
    let user: any = localStorage.getItem('user');
    if (user != null) {
      let userData: any = JSON.parse(user);
      console.log('from movimientos service' + userData.idUsuario);
      let url = 'https://localhost:7225/api/operaciones/' + userData.idUsuario;
      console.log('url: ' + url);
      return this.http.get(url);
    }
    return this.http.get('https://localhost:7225/api/operaciones');
  }

  obtenerCuenta(): Observable<any> {
    let user: any = localStorage.getItem('user');
    if (user != null) {
      let userData: any = JSON.parse(user);
      console.log('from movimientos service' + userData.idCuenta);
      let url = 'https://localhost:7225/api/cuentas/' + userData.idCuenta;
      console.log('url: ' + url);
      return this.http.get(url);
    }
    return this.http.get('https://localhost:7225/api/cuentas/');
  }

  guardarRetiro(retiro: Retiros): Observable<any> {
    console.log('guarderRetiro service');
    console.log(retiro);
    return this.http.post(
      'https://localhost:7225/api/operaciones/retiro',
      retiro
    );
  }
}
