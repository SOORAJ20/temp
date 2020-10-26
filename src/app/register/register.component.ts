import { Component, ViewContainerRef,ComponentFactoryResolver, OnInit } from '@angular/core';
import{ FormControl, FormGroup } from '@angular/forms'
import { from } from 'rxjs';
import {RstoService} from '../rsto.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean=false;

  register=new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
    password: new FormControl(' ')
  })

  constructor(private resto: RstoService,
     private vcr: ViewContainerRef, 
     private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  collection(){
    console.warn(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((result)=>{
        console.warn(result);
        this.alert=true;
        this.register.reset({});
    
        });
        
      }
  closeAlert(){
    this.alert=false;
  }

  async loadLogin(){
    this.vcr.clear();
    const {LoginComponent}=await import('../login/login.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(LoginComponent))
  }
}
