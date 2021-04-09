import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MyComponentModule } from '../my-component/my-component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ScrollingModule,
    MyComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
