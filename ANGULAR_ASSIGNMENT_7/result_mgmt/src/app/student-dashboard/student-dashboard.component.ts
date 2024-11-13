import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  findStudent=new FormGroup({
    rollno:new FormControl(''),
  })

  constructor(private formbuilder:FormBuilder, private api:ApiService, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  searchResult(){
    
    let rollno = this.findStudent.get('rollno')?.value
    this.api.find(rollno!)
  }
}
