import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RstoService {
  url="http://localhost:3000/restaurants"
  rootUrl="http://localhost:3000/"

  userlist:any=[];
  userexist:boolean=false;

  constructor( private http:HttpClient) {}
    getList(){
     return  this.http.get(this.url)
    }
    saveResto(data){
      //console.warn("service ",data)
      return this.http.post(this.url,data);
    }

    deleteResto(id){
      return this.http.delete(`${this.url}/${id}`);
    }
    getCurrentResto(id){
      return this.http.get(`${this.url}/${id}`);

    }

    updateResto(id,data){
      return this.http.put(`${this.url}/${id}`,data);

    }
    registerUser(data){
      return this.http.post(this.rootUrl+"users",data)
    }

    findUser(username: string, password: string){
       this.http.get(this.rootUrl+"users").subscribe((data)=>{
        this.userlist=data;
        for(let i=0;i<this.userlist.length;i++){
          if(this.userlist[i].email==username && this.userlist[i].password==password){
            this.userexist=true;
          }
        }
      
    });
    return this.userexist;

    }
    loginUser(username: string, password: string){

      this.userexist=false;
      return this.http.put(`${this.rootUrl+"auth"}/${"1"}`,{username,password});

    }
    
}
