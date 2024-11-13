import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="http://localhost:3000/posts"

  private msgSource = new BehaviorSubject({}); 
  
  current = this.msgSource.asObservable();

  constructor(private http:HttpClient) { }

  postTeacher(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getTeacher(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateTeacher(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteTeacher(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  find(data:string){
    return this.http.get(`${this.url}?rollno=${data}`)
    .subscribe((res) =>{ 
      this.msgSource.next(res); 
    })
}
}
