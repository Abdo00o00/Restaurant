import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AnimatedbuttonComponent } from '../animatedbutton/animatedbutton.component';
@Component({
  selector: 'app-menu-sec-res-br',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    AnimatedbuttonComponent
  ],
  templateUrl: './menu.sec-res-br.component.html',
  styleUrls: ['./menu.sec-res-br.component.css']
})
export class MenuSecResBrComponent {

  button_text:any = 'submit'
}

