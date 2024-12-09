import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../../Components/menu/menu.component';
// import { AboutComponent } from '../../../Components/about/about.component';
// import { GalleryComponent } from '../../../Components/gallery/gallery.component';
// import { ReservationFooterComponent } from '../../../Components/reservation-footer/reservation-footer.component';
// import { ContactComponent } from '../../../Components/contact/contact.component';



@Component({
  selector: 'app-base',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterOutlet,MenuComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

}
