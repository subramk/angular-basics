import { Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  constructor() { }

  public courses = [1,2,3]; 

  task = {
      title: "Review Applications",
      assignee : {
        name: "John Doe",
        age: '24'
      }
  };


  public log(x){
    console.log(x);
  }

  public submit(f){
    console.log(f);
  }

  

}
