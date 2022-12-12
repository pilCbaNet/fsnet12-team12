import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Usuarios } from 'app/models/usuarios';



@Injectable({
    providedIn: 'root'
})
export class FormRegisterService {

    constructor (private http:HttpClient) { }

    formRegister(usuarios:Usuarios):Observable<any>
    {
        console.log(usuarios)
        return this.http.post<any>('https://localhost:7225/api/usuarios',usuarios);
    }

}