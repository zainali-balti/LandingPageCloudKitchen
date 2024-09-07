import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderDetailsService } from '../../Service/order-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  FoodData:any;

  constructor(private FoodService:OrderDetailsService){

  }
  ngOnInit(): void {
    this.FoodData = this.FoodService.FoodDetails;
    
  }

}
