import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostcreatorServiceService {

  constructor(private httpClient: HttpClient) {

   }

  userList: User[] = [];  

  getLoginInfo(email :string):Observable<any[]>{
    const url = `https://jsonplaceholder.typicode.com/users?email=${email}`;
    console.log("url "+url);
    return this.httpClient.get<any[]>(url);
  }

  getPostComments(id : number) : Observable<any[]>{
    const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    return this.httpClient.get<any[]>(url);
  }

  getclickeduserPosts(id: number) : Observable<any[]>{
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    return this.httpClient.get<any[]>(url);
  }


  saveLoggedInUser(user : User){
    this.userList.push(user);
  }

  getLoggedInUser():User[]{
    return this.userList;
  }

  getCurrentUserPosts(): Observable<any[]>{
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${this.userList[0].id}`;
    return this.httpClient.get<any[]>(url);
  }

  getAllUserPosts() : Observable<any[]>{
    const url ='https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.get<any[]>(url);
  }

}
