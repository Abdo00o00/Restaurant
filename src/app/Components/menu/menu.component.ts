import { Component } from '@angular/core';
import { HeaderpagesComponent } from '../headerpages/headerpages.component';
import { BooktablefooterComponent } from '../booktablefooter/booktablefooter.component';
import { MenuitemsComponent } from '../menuitems/menuitems.component';
import { MenuSecResBrComponent } from '../menu.sec-res-br/menu.sec-res-br.component';
import { MenuBlogpostsComponent } from '../menu-blogposts/menu-blogposts.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuBlogpostsComponent,HeaderpagesComponent,BooktablefooterComponent,MenuitemsComponent,MenuSecResBrComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  page_name:string='Menu'

}
