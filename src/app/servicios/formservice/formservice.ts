import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Login } from 'app/models/login';

@Injectable({
    providedIn: 'root'
})
export class FormRegisterService {

    constructor (private http:HttpClient) { }

    formRegister(login:Login):Observable<any>
    {
        return this.http.post('http://localhost:3000/posts',login);
    }

}