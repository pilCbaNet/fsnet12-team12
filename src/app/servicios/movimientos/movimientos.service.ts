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
    return this.http.get('http://localhost:3000/movements');
  }
  guardarRetiro(retiro: Retiros): Observable<any> {
    return this.http.post('http://localhost:3000/movements', retiro);
  }
}