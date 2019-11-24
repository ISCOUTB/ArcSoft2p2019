import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //API='https://utb.alvarhito.repl.co/';
  //API = 'https://API.jesus132.repl.co';
 API='https://aonobird.aztrarok.repl.co/';

  constructor(
    private http: HttpClient
  ) {}

  getAllTasks() {
    const path = this.API;
    return this.http.get<Task>(path);
    // this.getAllTasks1()
    
    // let myH = new Headers();
    // myH.set('no-cors','*');

    // const myini: RequestInit= {
    //   method:'GET',
    //   headers: myH
    // };
    //let Resq = new Request('https://utb.alvarhito.repl.co/', myini);
    // fetch(this.API,myini).then(response => response.json()).then(json =>{
    //   console.log(json);
    // }) 

    
    //Para las API manejar como [] investigar sobre la interfaz
    //return this.http.get<Task[]>(path);

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
