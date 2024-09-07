import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsService } from '../../Service/order-details.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  FoodData:any;
  constructor(private FoodService:OrderDetailsService){

    this.FoodData = this.FoodService.FoodDetails;
  }


}
