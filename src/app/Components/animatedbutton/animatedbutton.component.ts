import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animatedbutton',
  standalone: true,
  imports: [],
  templateUrl: './animatedbutton.component.html',
  styleUrl: './animatedbutton.component.css'
})
export class AnimatedbuttonComponent implements OnInit{
  constructor(){}
  @Input() button_text: any ;


  ngOnInit(): void {
  }
}
