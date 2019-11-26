import { Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  constructor() {
  }

  person = {
    firstName: '',
    surname: '',
  };

  onSubmit(){
    console.log(this.person, '<---form');

    // Here you can make a call (POST etc)
  }
}
