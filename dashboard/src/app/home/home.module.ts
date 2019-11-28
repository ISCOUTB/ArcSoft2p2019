import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import {HTTP} from '@ionic-native/http/ngx';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // HTTP,
    //HttpClientModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  //  providers: [HTTP],
  declarations: [HomePage]
})
export class HomePageModule {}
