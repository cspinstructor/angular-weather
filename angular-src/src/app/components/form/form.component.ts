import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  address: String;

  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    console.log(this.address);
    const searchaddr = {
      address: this.address
    }
  }
}
