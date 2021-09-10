import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { RentalDetailsComponent } from './components/rental-details/rental-details.component';


const routes: Routes = [
  {path:"", pathMatch:"full",component:CarDetailsComponent},
  {path:"cars",component:CarDetailsComponent},
  {path:"cars/brands/:brandName",component:CarDetailsComponent},
  {path:"cars/colors/:colorName",component:CarDetailsComponent},
  {path:"rentals",component:RentalDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
