import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCarRoutingModule } from './create-car-routing.module';
import { CreateCarComponent } from './create-car.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateCarComponent
  ],
  imports: [
    CommonModule,
    CreateCarRoutingModule,
    SharedModule
  ]
})
export class CreateCarModule { }
