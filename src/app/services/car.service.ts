import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../moduls/car';
import { listResponseModel } from '../moduls/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl ="https://localhost:44349/api/Cars/getall";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<listResponseModel<Car>>{
    return this.httpClient.get<listResponseModel<Car>>(this.apiUrl);
  }

}
