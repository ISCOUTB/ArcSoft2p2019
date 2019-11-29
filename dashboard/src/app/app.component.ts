import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Redd:String="";
  title = 'Dash2';
  Dat={
    labels: [],
    datasets: [{
      data: [],
      label: 'Energia',
      backgroundColor: '#0673d821',//NbColorHelper.hexToRgbA(colors.primary, 0.3),
      borderColor: '#3366ff'
    },
    ],
  };

  constructor(
    private taskService: TaskService
    ) {}

  ngOnInit(){
    this.Grafica1(this.Dat)
}

Grafica1(D){
  let LinerChart = new Chart('myChart1', {
      type: 'line',
      data: D
  });

}

IonRed(R){
  this.Redd = R
  console.log(R)
}

getAllTasks(usr, red) {
  // console.log(this.Dat.labels[0]);
  // console.log("-----------this.Dat.labels[0]");
  this.taskService.getAllTasks(usr, red)
  .subscribe(tasks => {
    // console.log(this.Dat.labels);
    // console.log("-----------labels");
      // this.Dat.datasets[0].data.push(tasks[0].efficiency);
      // this.Dat.labels.push(tasks[1].date);
      console.log(tasks);

      
  });


}


}