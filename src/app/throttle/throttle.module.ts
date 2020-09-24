import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThrottlePageRoutingModule } from './throttle-routing.module';

import { ThrottlePage } from './throttle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThrottlePageRoutingModule
  ],
  declarations: [ThrottlePage]
})
export class ThrottlePageModule {}
