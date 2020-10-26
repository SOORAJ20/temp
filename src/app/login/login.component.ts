import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup } from '@angular/forms'
import {RstoService} from '../rsto.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean=false;
  email:string;
  password:string;
  login=new FormGroup({
    email: new FormControl(' '),
    password: new FormControl(' ')
  })

  constructor(private resto:RstoService) { }
  users:any=[];

  ngOnInit(): void {
  }

  get f() { return this.login.controls; }

 /* this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/

  collection(){
    //console.warn(this.login.value)
    if(this.resto.findUser(this.f.email.value, this.f.password.value)){
      this.resto.loginUser(this.f.email.value, this.f.password.value).subscribe((data)=>{
        console.warn(data)
        this.alert=true;
        this.login.reset({});
    });
    }
    
  }
  closeAlert(){
    this.alert=false;
  }

}
