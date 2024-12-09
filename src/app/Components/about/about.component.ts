import { Component } from '@angular/core';
import { BooktablefooterComponent } from '../booktablefooter/booktablefooter.component';
import { GallerybodyComponent } from '../gallerybody/gallerybody.component';
import { HeaderpagesComponent } from '../headerpages/headerpages.component';
import { AboutbodyComponent } from '../aboutbody/aboutbody.component';
import { AboutDiscoverFoodComponent } from '../about-discover-food/about-discover-food.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BooktablefooterComponent,GallerybodyComponent,HeaderpagesComponent,AboutbodyComponent,AboutDiscoverFoodComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  page_name:string='About'
}
