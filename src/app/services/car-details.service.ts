import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from './../moduls/listResponseModel';
import { CarDetails } from './../moduls/carDetails';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  apiUrl="https://localhost:44349/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<listResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "Cars/getcardetails";
    return this.httpClient.get<listResponseModel<CarDetails>>(newPath);
  }

  getCarDetailsByBrandName(brandName:string):Observable<listResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "Cars/getcardetailsbybrandname?brandName=" + brandName;
    return this.httpClient.get<listResponseModel<CarDetails>>(newPath);
  }
  
  getCarDetailsByColorName(colorName:string):Observable<listResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "Cars/getcardetailsbycolorname?colorName=" + colorName;
    return this.httpClient.get<listResponseModel<CarDetails>>(newPath);
  }
}
