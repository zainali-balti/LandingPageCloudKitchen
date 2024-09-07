import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsService } from '../../Service/order-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent implements OnInit{

  getId:any;
  getMenuData:any;

  constructor(private parem:ActivatedRoute , private FoodService:OrderDetailsService){}
  ngOnInit(): void {
    this.getId = this.parem.snapshot.paramMap.get('id');
    if(this.getId){
      this.getMenuData = this.FoodService.FoodDetails.filter((value)=>{
        return value.id == this.getId;
      });
    }
  }

}
