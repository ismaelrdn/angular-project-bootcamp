import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/core/services/car/car.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent {

  public car?: CarI

  constructor(
    private activatedRoute: ActivatedRoute,
    private carsService: CarService
  ) {
    this.activatedRoute.params.subscribe((params)=> {
      const carId = params['id'];
      this.carsService.getCarById(carId).subscribe((car) => {
        this.car = car
      })
    })
  }

}
