import { Component } from '@angular/core';
import { HeaderpagesComponent } from '../headerpages/headerpages.component';
import { ReservationFooterComponent } from '../reservation-footer/reservation-footer.component';
import { BooktablefooterComponent } from '../booktablefooter/booktablefooter.component';
import { GallerybodyComponent } from '../gallerybody/gallerybody.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [HeaderpagesComponent,BooktablefooterComponent,GallerybodyComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  page_name:string='Gallery'
}
