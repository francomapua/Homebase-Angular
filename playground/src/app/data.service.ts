import { Injectable } from '@angular/core';

// Imported from app.module.ts
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Custom Http Method
  getUsers() {
    console.log('getting users via http');
    return this.http.get('https://reqres.in/api/users');
  }

  // Method that is called from the front end
  secondClick() {
    return alert('second clicks');
  }
}
