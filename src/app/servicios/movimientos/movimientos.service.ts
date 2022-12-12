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
      let url = 'http://localhost:7225/api/operaciones/' + userData.idUsuario;
      console.log('url: ' + url);
      return this.http.get(url);
    }
    return this.http.get('http://localhost:7225/api/operaciones');
  }

  guardarRetiro(retiro: Retiros): Observable<any> {
    return this.http.post('http://localhost:3000/movements', retiro);
  }
}
