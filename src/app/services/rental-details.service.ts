import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from './../moduls/listResponseModel';
import { RentalDetails } from './../moduls/rentalDetails';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailsService {

  apiUrl="https://localhost:44349/api/Rentals/getRentalDetail";


  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<listResponseModel<RentalDetails>>{
    return this.httpClient.get<listResponseModel<RentalDetails>>(this.apiUrl);
  }
}
