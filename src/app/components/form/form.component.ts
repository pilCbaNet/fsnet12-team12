import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'app/models/login';
import { FormRegisterService } from 'app/servicios/formservice/formservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form:FormGroup;

  constructor(private formBuilder:FormBuilder, private myService:FormRegisterService, private router:Router) {
    this.form=this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password: ["", [Validators.required,Validators.maxLength(8),Validators.minLength(5) ]]
    })
   }

   get email()
   {
    return this.form.get("email");
   }

   get password()
   {
    return this.form.get("password")
   }

  ngOnInit(): void {
  }

  register()
  {
    if(this.form.valid)
    {
      let email:string=this.form.get('email')?.value;
      let password:string=this.form.get('password')?.value;

      let login:Login= new Login(email,password)

      this.myService.formRegister(login).subscribe(dataOk => {
         document.getElementById('submit')?.click(); 
        this.router.navigate(['form']);
      }
        );


    }
    else{

    }
  }

}
