import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  users : Object;

  constructor(private data: DataService) {
    // Use data to reference
  }

  // Angular Lifecycle hook that runs when the component is started
  ngOnInit() {

    // Call the Data Service's getUsers() function
    console.log('Getting users');
    this.data.getUsers().subscribe((data) => {
      console.log('users received');
      this.users = data;
      console.log(data);
    });
  }

  serviceCall() {
    this.data.secondClick();
  }

  // HTTP Client

}
