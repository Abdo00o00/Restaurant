import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-discover-food',
  standalone: true,
  imports: [ NgForOf],
  templateUrl: './about-discover-food.component.html',
  styleUrl: './about-discover-food.component.css'
})
export class AboutDiscoverFoodComponent {

  descover_itemes = [
    {img_src:"../../../assets/images/discover-food__item-1.jpg", alt_text:"pizza", a_text:"Quality Chees", 
      p_text:"Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus"},
    
    {img_src:"../../../assets/images/discover-food__item-2.jpg", alt_text:"shawarma", a_text:"Crunchi French Fry", 
      p_text:"Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus"},
    
    {img_src:"../../../assets/images/discover-food__item-3.jpg", alt_text:"steak", a_text:"100% Halal Meat", 
      p_text:"Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus"},
  ]
}
