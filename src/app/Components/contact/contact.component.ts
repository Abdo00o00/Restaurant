import { Component } from '@angular/core';
import { BooktablefooterComponent } from "../booktablefooter/booktablefooter.component";
import { HeaderpagesComponent } from '../headerpages/headerpages.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BooktablefooterComponent,HeaderpagesComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  page_name:string='Contact'
  
  
}
