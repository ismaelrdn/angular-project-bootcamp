import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list.component';
import { CarComponent } from './components/car/car.component';
import { FormsModule } from '@angular/forms';
import { CarListRoutingModule } from './car-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CarListComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarListRoutingModule,
    SharedModule
  ]
})
export class CarListModule { }
