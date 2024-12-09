import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headerpages',
  standalone: true,
  imports: [],
  templateUrl: './headerpages.component.html',
  styleUrl: './headerpages.component.css'
})
export class HeaderpagesComponent implements OnInit {
  constructor() { }
  @Input() page_name: any 

  ngOnInit(): void {
  }

}
