import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'app/models/login';
import { InicioSessionService } from 'app/servicios/inicio-session/inicio-session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private miServicioInicioSession: InicioSessionService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  refreshPage() {
    window.location.reload();
  }

  login() {
    if (this.form.valid) {
      let email: string = this.form.get('email')?.value;
      let password: string = this.form.get('pass')?.value;
      let login: Login = new Login(email, password);
      console.log(login);
      this.miServicioInicioSession.iniciar_session(login).subscribe((data) => {
        localStorage.clear();
        //this.refreshPage();
        localStorage.setItem('user', JSON.stringify(data));

        let usuario: any = localStorage.getItem('user');
        console.log(usuario);

        document.getElementById('modal-cerrar')?.click();
        if (data != null) {
          alert('ingresando...');
          this.form.reset();
          this.router.navigate(['dashboard']);
        } else {
          this.form.reset();
        }
        console.log(data);
      });
    } else {
      alert('Por favor ingrese un usuario y contraseña valido.');
      this.router.navigate(['home']);
      this.form.reset();
    }
  }
}
