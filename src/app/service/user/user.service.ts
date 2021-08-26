import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();
  
  constructor(private http: HttpClient) { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }


  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/posts/",data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  getUser() {
    return this.http.get<any>("http://localhost:3000/posts/")
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  deleteUser(id: number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  updateUser(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

}
