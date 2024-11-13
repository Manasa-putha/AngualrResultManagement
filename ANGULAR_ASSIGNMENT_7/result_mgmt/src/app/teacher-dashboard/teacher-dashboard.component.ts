import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { TeacherModel } from './teacher-dashboard.model';
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  formValue!:FormGroup;
  teacherModelObj:TeacherModel=new TeacherModel();
  teacherData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private formbuilder:FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      rollno:[''],
      name:[''],
      dateofbirth:[''],
      score:[''],

    })
    this.getAllTeacher();
  }
  clickAddStudent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postTeacherDetails(){
    this.teacherModelObj.rollno=this.formValue.value.rollno;
    this.teacherModelObj.name=this.formValue.value.name;
    this.teacherModelObj.dateofbirth=this.formValue.value.dateofbirth;
    this.teacherModelObj.score=this.formValue.value.score;

    this.api.postTeacher(this.teacherModelObj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("Teacher added student data successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllTeacher();

    },
    err =>{ 
          alert(" Something went wrong")
    })
  }
  getAllTeacher(){
    this.api.getTeacher()
    .subscribe(res=>{
      this.teacherData=res;
    })
  }
  deleteteacher(row:any){
    this.api.deleteTeacher(row.id)
    .subscribe(res=>{
      alert("student Data deleted");
      this.getAllTeacher();
    })
  }
  onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.teacherModelObj.id=row.id;
    this.formValue.controls['rollno'].setValue(row.rollno);
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['dateofbirth'].setValue(row.dateofbirth);
    this.formValue.controls['score'].setValue(row.score);

  }
  updatestudentDetails(){
    this.teacherModelObj.rollno=this.formValue.value.rollno;
    this.teacherModelObj.name=this.formValue.value.name;
    this.teacherModelObj.dateofbirth=this.formValue.value.dateofbirth;
    this.teacherModelObj.score=this.formValue.value.score;
    this.api.updateTeacher(this.teacherModelObj,this.teacherModelObj.id)
    .subscribe(res=>{
      alert("updated successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllTeacher();
      
    })
  }

}
