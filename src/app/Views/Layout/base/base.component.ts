import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { BooktablefooterComponent } from '../../../Components/booktablefooter/booktablefooter.component';
// import { ReservationFooterComponent } from '../../../Components/reservation-footer/reservation-footer.component';
// import { ContactComponent } from '../../../Components/contact/contact.component';



@Component({
  selector: 'app-base',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterOutlet,BooktablefooterComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

}
