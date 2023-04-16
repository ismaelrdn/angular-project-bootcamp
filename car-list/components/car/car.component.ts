import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  constructor(private router: Router) {}

  @Input() public carToShow?: CarI;
  @Output() public onRemoveCar = new EventEmitter<void>();

  ngOnInit(): void {
    console.log('Init product');
  }

  public removeCar() {
    this.onRemoveCar.emit();
  }

  public navigateToEditCar(id: string) {
    this.router.navigate(['edit-car', id])
  };

  public navigateToDetail(id: string) {
    this.router.navigate(['car-detail', id])
  };
}