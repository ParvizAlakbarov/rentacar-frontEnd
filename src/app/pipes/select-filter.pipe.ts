import { Pipe, PipeTransform } from '@angular/core';
import { CarDetails } from './../moduls/carDetails';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

  transform(value: CarDetails[], brandIdInput:string,colorIdInput:string=""): CarDetails[] {
    if(brandIdInput.length===0&&colorIdInput.length===0){
      return value;
    }
    else if(brandIdInput.length===0 ){
      return value.filter((c:CarDetails)=>c.colorName===colorIdInput);
    }
    else if(colorIdInput.length===0){
      return value.filter((c:CarDetails)=>c.brandName===brandIdInput);
    }
    return value.filter((c:CarDetails)=>c.brandName===brandIdInput&&c.colorName===colorIdInput);
  }

}
