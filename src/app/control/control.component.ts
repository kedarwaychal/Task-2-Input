import { Component } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {

  name!: string;
  age!: number;
  contactMethod!: string;
  phoneNumber!: string;
  email!: string;

  // onChangeContactMethod() {
  //   // Reset phone number and email when changing contact method
  //   this.phoneNumber = '';
  //   this.email = '';
  //   console.log(this.contactMethod)
  // }



}
