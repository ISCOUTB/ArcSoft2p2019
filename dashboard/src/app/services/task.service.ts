import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

 API='http://arcsoft2p2019.jairoe.co:8080/api/Datos?Usuario=';
//  API=`http://arcsoft2p2019.jairoe.co:8080/api/Datos?Usuario=${u}&RedSocial=${r}`;
 API2='https://API.jesus132.repl'

  constructor(
    private http: HttpClient
  ) {}

  getAllTasks(u, r) {
    console.log(u)
    console.log(r)
    let A = this.API + u + '&RedSocial=' + r
    let I2 = this.API2 + '.co'
    console.log(`-------u------${u}-------------------------`)
    console.log(A)
    console.log(I2)
    const path = I2;
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