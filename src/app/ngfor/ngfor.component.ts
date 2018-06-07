import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ]

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }   

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);

  }
  constructor() {


  }


}
