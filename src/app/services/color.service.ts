import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../moduls/listResponseModel';
import { Color } from '../moduls/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl= "https://localhost:44349/api/Colors/getall";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<listResponseModel<Color>>{
    return this.httpClient.get<listResponseModel<Color>>(this.apiUrl);
  }
}
