import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FillerPageRoutingModule } from './filler-routing.module';

import { FillerPage } from './filler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FillerPageRoutingModule
  ],
  declarations: [FillerPage]
})
export class FillerPageModule {}
