import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
//import { HTTP } from '@ionic-native/http/ngx';3193755763
import { Chart } from 'chart.js';
//import * as echarts from 'echarts';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Range:number;
  Ty:any="line"

  Type:any=["line", "bar", "pie", "doughnut"];
  Red:any=["Instagram", "Youtube", "Twitter","Reddit"];
  Redd:String="dd";

  Data={
    labels: ['January', 'March', 'February', 'April', 'May', 'June', 'July'],
    datasets: [{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Energia',
      backgroundColor: '#0C093C'//NbColorHelper.hexToRgbA(colors.primary, 0.3),
      //borderColor: colors.primary,
    }, {
      data: [28, 48, 40, 19, 86],
      label: 'Voltaje',
      backgroundColor: '#59057b'//NbColorHelper.hexToRgbA(colors.danger, 0.3),
      //borderColor: colors.danger,
    }, {
      data: [18, 48, 77, 9, 100, 27, 40],
      label: 'Series 0',
      backgroundColor:'#d56073'//NbColorHelper.hexToRgbA(colors.info, 0.3),
      //borderColor: colors.info,
    },
    ],
  };
  Dat={
    labels: [],
    datasets: [{
      data: [],
      label: 'Datos',
      backgroundColor: '#0673d821',//NbColorHelper.hexToRgbA(colors.primary, 0.3),
      borderColor: '#3366ff'
    },
    ],
  };
  
  constructor(
    private taskService: TaskService
     //private http: HTTP
    ) {}

  
  ngOnInit(){
     this.Grafica1(this.Dat);
     //this.Grafica2();
     console.log("hola type 0 es:", this.Type[0]);
    
}


 Grafica1(D){
  let LinerChart = new Chart('myChart1', {
      type: this.Ty,
      data: D
  });

}
IonRed(R){
  this.Redd = R
  console.log(R)
}

Grafica2(){
    let LinerChart = new Chart('myChart2', {
        type: 'doughnut',
        data: this.Data/*{
            labels: this.Labels,
            datasets: [{
                label:'this.Labels',
                data: this.Data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }*/
    });

}
Cargar(){
    //myChart.setData(this.Labels);
     let random:number = Math.floor(Math.random() * 75);
     let aux = this.Data.datasets[0].data;
     let auxobj = this.Data;

     for (let i in aux) {
         if (i != '0')
         {
          this.Data.datasets[0].data.push(aux[i])
             //console.log("i:"+i);
         }else
         {
          this.Data.datasets[0].data=[]
                   }
    }
    this.Data.datasets[0].data.push(random);
    // console.log(this.Data);
    // console.log(auxobj);
    this.Data.datasets.push(
      {
        data: [20, 48, 30, 22, 94, 27, 50],
        label: 'Series 1',
        backgroundColor:'#2c2828'//NbColorHelper.hexToRgbA(colors.info, 0.3),
        //borderColor: colors.info,
      });
    console.log("------------------");
    console.log(this.Data.datasets[0].data[0]);
    console.log(this.Data.datasets[0].data);
    

    this.Grafica2()
}

getAllTasks(usr, red) {
  // console.log(this.Dat.labels[0]);
  // console.log("-----------this.Dat.labels[0]");
  this.taskService.getAllTasks(usr, red)
  .subscribe(tasks => {
    // console.log(this.Dat.labels);
    // console.log("-----------labels");
    // console.log(this.Dat.datasets[0].data);
    // console.log("-----------data");
    console.log(tasks[0].length);
    console.log("-----------task[]");
    if(this.Dat.labels.length >= this.Range){
      let aux = this.Dat.datasets[0].data;
      let auxlabel = this.Dat.labels;
      for (let i in aux) {
        if (i != "0" && Number(i) > (auxlabel.length - this.Range))
        {
          console.log("i:"+i);
          console.log(typeof(i));
          this.Dat.datasets[0].data.push(aux[i]);
          this.Dat.labels.push(auxlabel[i]);
            //console.log("i:"+i);
        }else
          {
          this.Dat.datasets[0].data = [];
          this.Dat.labels = [];
          }
        }
      }
      // for (let i in tasks.length) {
      // }
      this.Dat.datasets[0].data.push(tasks.efficiency);
      this.Dat.labels.push(tasks.date);
      
  });
  // setTimeout(() => 
  //    {
  //      this.getAllTasks();
  //      this.Grafica1(this.Dat);
  //     },1000);//1000ms = 1 seg
}
IonRange(event:any){
  console.log(event.detail.value);
  this.Range=event.detail.value;
}

IonSelc(event:any){
  console.log(this.Type[0]);
  console.log(event.detail.value);
  this.Ty=event.detail.value;
}

getTask() {
  this.taskService.getTask('2')
  .subscribe(task => {
    console.log(task);
  });
}




}
