import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../moduls/rental';
import { listResponseModel } from '../moduls/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44349/api/Rentals/getall";

  constructor(private httpClient : HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>>{
    return this.httpClient.get<listResponseModel<Rental>>(this.apiUrl);
  }
}
