import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../moduls/brand';
import { listResponseModel } from '../moduls/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl ="https://localhost:44349/api/Brands/getall";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<listResponseModel<Brand>>{
    return this.httpClient.get<listResponseModel<Brand>>(this.apiUrl);
  }

}
