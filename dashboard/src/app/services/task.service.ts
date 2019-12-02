import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

 API='http://arcsoft2p2019.jairoe.co:8080/api/Datos?Usuario=';
//API=`http://arcsoft2p2019.jairoe.co:8080/api/Datos?Usuario=${u}&RedSocial=${r}`;

  constructor(
    private http: HttpClient
  ) {}

  getAllTasks(u, r) {
    let A = this.API + u + '&RedSocial=' + r
    console.log(`-------u------${u}-------------------------`)
    const path = A;
    return this.http.get<Task>(path);
}

}
