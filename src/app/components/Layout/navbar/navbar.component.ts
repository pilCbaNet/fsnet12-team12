import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  form!:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
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
      alert("INICIA SESION");
      document.getElementById("modal-cerrar")?.click();
    }
    else
    {
      alert("INGRESE UN CAMPOS");
    }

  };

}
