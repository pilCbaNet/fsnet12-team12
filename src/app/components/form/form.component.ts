import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormRegisterService } from 'app/servicios/formservice/formservice';
import { Router } from '@angular/router';
import { Usuarios } from 'app/models/usuarios';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private myService: FormRegisterService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(5)],
      ],
      nombre: [''],
      apellido:[''],
      fechaNacimiento:[''],
      usuario1:[''],
      /* contraseña:[''], */
      telefono:[''],
      domicilio:[''],
      dni:[''],
      idCuenta:[''],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get apellido() {
    return this.form.get('apellido');
  }

  get fechaNacimiento() {
    return this.form.get('fechaNacimiento');
  }

  get usuario1() {
    return this.form.get('usuario1')
  }

  get telefono() {
    return this.form.get('telefono')
  }

  get domicilio() {
    return this.form.get('domicilio')
  }

  get dni() {
    return this.form.get('dni')
  }

  get idCuenta() {
    return this.form.get('idCuenta')
  }



  ngOnInit(): void {}

  register() {
    
    let nombre=this.form.get('nombre')?.value;
    let apellido=this.form.get('apellido')?.value;
    let fechaNacimiento=this.form.get('fechaNacimiento')?.value;
    let email= this.form.get('email')?.value;
    let usuario1=this.form.get('usuario1')?.value;
    let password=this.form.get('password')?.value;
    let telefono=this.form.get('telefono')?.value;
    let domicilio=this.form.get('domicilio')?.value;
    let dni=this.form.get('dni')?.value;
    let idCuenta=3;


      let usuarios: Usuarios = new Usuarios(nombre,apellido,fechaNacimiento,email,usuario1,password,telefono,domicilio,dni,idCuenta);  
      
      
    
      this.myService.formRegister(usuarios).subscribe( 
        (data) => {
      /*     document.getElementById('submit')?.click(); 
          this.router.navigate(['dashboard']);  */
          console.log(data);
        },
        (respuestaError) => {
          alert('Se ha producido un error');
        }
      );
    
  }
}
