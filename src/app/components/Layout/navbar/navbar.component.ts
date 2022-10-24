import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Login } from 'app/models/login';
import { InicioSessionService } from 'app/servicios/inicio-session/inicio-session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  form!:FormGroup;
  constructor(private formBuilder:FormBuilder , private miServicioInicioSession:InicioSessionService, private router:Router) { 
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      pass:['', [Validators.required]]
    })

  }
  
  ngOnInit(): void {
  }

  login()
  {
    if(this.form.valid) 
    {
      let email:string= this.form.get("email")?.value;
      let password:string= this.form.get("pass")?.value;
      let login:Login= new Login(email,password);
      this.miServicioInicioSession.iniciar_session(login).subscribe(data => { 
        document.getElementById("modal-cerrar")?.click();
        alert("redirigiendo...")
        this.router.navigate(["form"])
      });
      
    }
    else
    {
      alert("INGRESE UN CAMPO VÁLIDO");
    }

  };

}
