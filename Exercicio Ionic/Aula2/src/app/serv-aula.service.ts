import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ServAulaService {

  constructor() { }
}
async getPosts(){
  let resp = await this.http.get('http://jsonplaceholder.typicode.com/post').toPromise(); return resp;
}
