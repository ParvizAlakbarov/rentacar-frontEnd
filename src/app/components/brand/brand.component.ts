import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/moduls/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand:Brand;
  isAllSelected:boolean=false;
  filterText = "";

  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
    this.isAllSelected=false;
  }

  setAllBrands(isAll:boolean){
    this.isAllSelected=isAll;
  }
  

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand && !this.isAllSelected)
      return "list-group-item list-group-item-primary";
    
    else
      return "list-group-item";
  }

  getAllBrandClass(){
    if(this.isAllSelected)
      return "list-group-item list-group-item-primary";
    
    else
      return "list-group-item";
  }

}
