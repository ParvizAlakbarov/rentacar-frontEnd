import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailsService } from './../../services/car-details.service';
import { CarDetails } from 'src/app/moduls/carDetails';
import { ActivatedRoute } from '@angular/router';
import { Color } from './../../moduls/color';
import { Brand } from 'src/app/moduls/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carDetails: CarDetails[] = [];
  colors: Color[] = [];
  brands: Brand[] = [];
  colorTempName:string="";
  brandTempName:string="";

  constructor(
    private carDetailsService: CarDetailsService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandName'])
        this.getCarDetailsByBrandName(params['brandName']);
      else if (params['colorName'])
        this.getCarDetailsByColorName(params['colorName']);
      else this.getCarDetails();

      this.getBrands();
      this.getColors();
    });
  }

  getCarDetails() {
    this.carDetailsService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }

  getCarDetailsByBrandName(brandName: string) {
    this.carDetailsService
      .getCarDetailsByBrandName(brandName)
      .subscribe((response) => {
        this.carDetails = response.data;
      });
  }

  getCarDetailsByColorName(colorName: string) {
    this.carDetailsService
      .getCarDetailsByColorName(colorName)
      .subscribe((response) => {
        this.carDetails = response.data;
      });
  }

  clearFilter(){
    this.colorTempName="";
    this.brandTempName="";
    this.getCarDetails();
  }

  selectBrand(event:any){
    this.brandTempName = event.target.value;
  }
  selectColor(event:any){
    this.colorTempName = event.target.value;
  }
}
