import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RstoService } from '../rsto.service'


@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert: boolean = false;

  editResto = new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
    address: new FormControl(' ')
  })

  constructor(private router: ActivatedRoute, private resto: RstoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((data) => {
      console.warn(data)
      this.editResto = new FormGroup({
        name: new FormControl(data['name']),
        email: new FormControl(data['email']),
        address: new FormControl(data['address'])
      })
      //console.warn(data['name']);

    })

  }

  collection() {
    console.warn(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((data)=>{
      console.warn(data);
      this.alert=true;
    });
  }
  closeAlert(){
    this.alert=false;
  }

}
