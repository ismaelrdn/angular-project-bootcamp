import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/core/services/car/car.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent {

  public car?: CarI;

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
