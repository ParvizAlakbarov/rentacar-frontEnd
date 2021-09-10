import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailsService } from './../../services/car-details.service';
import { CarDetails } from 'src/app/moduls/carDetails';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetails:CarDetails[]=[];

  constructor(private carDetailsService:CarDetailsService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandName"])
        this.getCarDetailsByBrandName(params["brandName"]);
      
      else if(params["colorName"])
        this.getCarDetailsByColorName(params["colorName"]);
      
      else
        this.getCarDetails();
    })
  }

  getCarDetails(){
    this.carDetailsService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
    })
  }

  getCarDetailsByBrandName(brandName:string){
    this.carDetailsService.getCarDetailsByBrandName(brandName).subscribe(response=>{
      this.carDetails=response.data;
    })
  }

  getCarDetailsByColorName(colorName:string){
    this.carDetailsService.getCarDetailsByColorName(colorName).subscribe(response=>{
      this.carDetails=response.data;
    })
  }

}
