import { Component } from '@angular/core';
import { ReservationFooterComponent } from '../reservation-footer/reservation-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReservationFooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
