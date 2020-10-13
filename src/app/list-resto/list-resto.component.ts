import { Component, OnInit } from '@angular/core';
import {RstoService} from '../rsto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})

export class ListRestoComponent implements OnInit {

  constructor(private rsto:RstoService) { }
  collection:any=[];
  ngOnInit(): void {
    this.rsto.getList().subscribe((result)=>{
      console.warn(result);
      this.collection=result;

    });
  }
  deleteResto(item){
    this.collection.splice(item-1,1)
    this.rsto.deleteResto(item).subscribe((data)=>{
      console.warn("result",data);

    })
  }

}
