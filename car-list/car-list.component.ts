import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car/car.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  public cars?: CarI[];
  public inputValue: string = '';

  constructor(
    private carsService: CarService
  ) {}

  public ngOnInit(): void {
      this.getCars()
      };
  
 
  public removeCar(id: string) {
    this.carsService.deleteCar(id).subscribe(() => {
      this.getCars()
    })
  }

  private getCars () {
    this.carsService.getCars().subscribe((cars: CarI[]) => {
      this.cars = cars;
    });
}

}
