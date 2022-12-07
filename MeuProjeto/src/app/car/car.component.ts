import { Component, OnInit } from '@angular/core';
import { Car } from '../service/car';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: []
})

export class CarComponent  implements OnInit {

  constructor(private carService: CarService) { }

  public cars?: Car[];

  ngOnInit(): void {
    this.carService.getAllCars()
      .subscribe(
        cars => {
          this.cars = cars;
          console.log(cars);
        },
        error => console.log(error)
      );
  }

}
