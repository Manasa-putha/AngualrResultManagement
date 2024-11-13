import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss']
})
export class StudentResultComponent implements OnInit {

  s:any = Subscription;
  l: any = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.s = this.api.current.subscribe((result)=>{
      this.l=result;
      
    });
  }

}
