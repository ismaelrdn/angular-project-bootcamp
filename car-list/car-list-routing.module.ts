import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: CarListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarListRoutingModule { }
