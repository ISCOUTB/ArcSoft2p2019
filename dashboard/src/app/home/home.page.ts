import { Component } from '@angular/core';
import { Chart } from 'chart.js';
//npm install chart.js --save

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

  constructor() {}

  ngOnInit(){
    //http.get('https://api.github.com/users/codigofacilito/repos')
    this.Grafica();
}

Grafica(){
  let LinerChart = new Chart('myChart', {
      type: 'line',
      data: this.Data
    });

  }

  Cargar(){
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
    console.log(this.Data.datasets[0].data);
    console.log(this.Data.datasets[0].data.length);

    this.Grafica()
}


}
