import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/moduls/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  currentColor:Color;
  isAllSelected:boolean=false;
  filterText = "";

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
    this.isAllSelected=false;
  }
  
  setAllColorClass(isAll:boolean){
    this.isAllSelected=isAll;
  }

  getCurrentColorClass(color:Color){
    if(color==this.currentColor && !this.isAllSelected)
      return "list-group-item list-group-item-primary";
    
    else
      return "list-group-item";
  }
  getAllColorClass(){
    if(this.isAllSelected)
      return "list-group-item list-group-item-primary";
    
    else
      return "list-group-item";
  }
}
