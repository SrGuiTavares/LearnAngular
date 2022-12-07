import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

    protected urlString = "https://localhost:7115/";

    getAllCars(): Observable<Car[]> {
      return this.http
      .get<Car[]>(this.urlString + "Car/GetAll");
    }
   
}
