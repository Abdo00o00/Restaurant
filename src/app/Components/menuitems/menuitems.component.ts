import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menuitems',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './menuitems.component.html',
  styleUrl: './menuitems.component.css'
})
export class MenuitemsComponent {

  menu_items = [
    {img_src:'../../../assets/images/food-1.png', alt_text:'pizza', a_span_text:'Wild Mushroom Arancini',
      span_text:'$18.00', p_text:'Ricotta, goat cheese, beetroot and dateline.'},
    {img_src:'../../../assets/images/food-2.png', alt_text:'pizza', a_span_text:'Wild Mushroom Arancini',
      span_text:'$56.00', p_text:'Ricotta, goat cheese, beetroot and dateline.'},
    {img_src:'../../../assets/images/food-3.png', alt_text:'pizza', a_span_text:'Wild Mushroom Arancini',
      span_text:'$22.00', p_text:'Ricotta, goat cheese, beetroot and dateline.'},
    {img_src:'../../../assets/images/food-4.png', alt_text:'pizza', a_span_text:'Wild Mushroom Arancini',
      span_text:'$36.00', p_text:'Ricotta, goat cheese, beetroot and dateline.'},
    {img_src:'../../../assets/images/food-5.png', alt_text:'pizza', a_span_text:'Wild Mushroom Arancini',
      span_text:'$62.00', p_text:'Ricotta, goat cheese, beetroot and dateline.'},
    {img_src:'../../../assets/images/food-6.png', alt_text:'pizza', a_span_text:'Wild Mushroom Arancini',
      span_text:'$44.00', p_text:'Ricotta, goat cheese, beetroot and dateline.'},
    {img_src:'../../../assets/images/food-2.png', alt_text:'pizza', a_span_text:'Wild Mushroom Arancini',
      span_text:'$09.00', p_text:'Ricotta, goat cheese, beetroot and dateline.'},
    {img_src:'../../../assets/images/food-3.png', alt_text:'pizza', a_span_text:'Wild Mushroom Arancini',
      span_text:'$73.00', p_text:'Ricotta, goat cheese, beetroot and dateline.'}
  ]
}
