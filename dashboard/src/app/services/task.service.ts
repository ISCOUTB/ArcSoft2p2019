import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomePage } from'../home/home.page';
import { Task } from './../interfaces/task';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

 API='https://aonobird.aztrarok.';

  constructor(
    private http: HttpClient
  ) {}

  getAllTasks(u, r) {
    console.log(u)
    console.log(r)
    this.API = this.API + u + r
    console.log("--------------------------------------")
    const path = this.API;
    return this.http.get<Task>(path);
}

getTask(id: string) {
  const path = `${this.API}/${id}`;
  return this.http.get<Task>(path);
}

  async getAllTasks1() {
    try {
      let f=await fetch('https://SQLite.jesus132.repl.co');
      let rF=await f.json();
      console.log(rF);
    } catch (error) {
      console.log("Error: "+error); 
    }
    
  }
}
