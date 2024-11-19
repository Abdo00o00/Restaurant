import { NgClass, NgComponentOutlet, NgFor } from '@angular/common';
import { Component , } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule,
    // NgClass,
    // NgComponentOutlet,
    RouterLink,
    NgFor,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  nav_itemes = [
    {name:"Home", link:"/home", a_class:"nav-link active", li_class:"nav-item", a_ariaCurrent:"page"},
    {name:"Menu", link:"/menu", a_class:"nav-link", li_class:"nav-item"},
    {name:"Blog", link:"/blog", a_class:"nav-link", li_class:"nav-item"},
    {name:"Contact", link:"/contact", a_class:"nav-link", li_class:"nav-item"},

  ]
}
