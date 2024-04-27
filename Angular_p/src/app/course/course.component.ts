import { Component } from '@angular/core';

@Component({
  selector: 'courses',
 template:`

  <h2>{{title}}</h2>
  <label>Product ID: <input type="text"><br>
  <label>Product Name: <input type="text"><br>
  <label>Product Description: <input type="text"><br>
  <button type="submit">Submit</button>
  <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
  </ul>
 `
})
export class CourseComponent {

  title ="List of courses"

  courses=["course1", "course2", "course3"];

}