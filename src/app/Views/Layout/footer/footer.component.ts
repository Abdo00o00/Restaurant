import { NgClass,  NgForOf } from '@angular/common';
import { Component , Input , Output ,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    
    NgForOf,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent{
  constructor() { }


  // get in touch
  getInTouch_Lis = [
    {span_text:'Silk St, Barbican, London E2Y, UK',},
    {span_text:'+39-055-123456',},
    {span_text:'booking&#64;webexample.com',},
  ];
  getInTouch_Icons = [
    {a_Aria_Label:"facebook",i_Class:"bi bi-facebook",},
    {a_Aria_Label:"twitter",i_Class:"bi bi-twitter",},
    {a_Aria_Label:"linkedin",i_Class:"bi bi-linkedin",},
    {a_Aria_Label:"instagram",i_Class:"bi bi-instagram",},
    {a_Aria_Label:"whatsapp",i_Class:"bi bi-whatsapp",},
  ];
  // food menu
  food_Menu_Lis=[
    {name:'White Castle'},
    {name:'Beef Sandwich'},
    {name:'Cherry Limeade'},
    {name:'Cherry Limeade'},
    {name:'Pumpkin Spice'}
  ];

  //
  workingHours_P=[
    {text:'Monday - Friday09:00 - 22:00',class:''},
    {text:'Saturday11:00 - 00:00',class:''},
    {text:'Sunday11:00 - 23:00', class:'mb-4'},
    {text:'* Happy hour17:00 - 21:00',class:''},
  ]



  // instagram images
  tr_Images_one = [
    
    {
      td_style:'padding: 5px;',
      div_class:' position-relative',
      a_herf:'https://www.instagram.com/abdo00o00/', 
      a_class:'w-100 h-100',
      image_src:'../../../../assets/images/asset 38.png',
      image_class:'w-100 h-100', 
      image_style:'',
      image_alt:'...',
    },
    {
      td_style:'padding: 5px;',
      div_class:' position-relative',
      a_herf:'https://www.instagram.com/abdo00o00/', 
      a_class:'w-100 h-100',
      image_src:'../../../../assets/images/asset 39.png',
      image_class:'w-100 h-100', 
      image_style:'',
      image_alt:'...',
    },
    {
      td_style:'padding: 5px;',
      div_class:' position-relative',
      a_herf:'https://www.instagram.com/abdo00o00/', 
      a_class:'w-100 h-100',
      image_src:'../../../../assets/images/asset 40.png',
      image_class:'w-100 h-100', 
      image_style:'',
      image_alt:'...',
    },
  ];
  
  tr_Images_Two = [
    
    {
      td_style:'padding: 5px;',
      div_class:' position-relative',
      a_herf:'https://www.instagram.com/abdo00o00/', 
      a_class:'w-100 h-100',
      image_src:'../../../../assets/images/asset 41.png',
      image_class:'w-100 h-100', 
      image_style:'',
      image_alt:'...',
    }, 
    {
      td_style:'padding: 5px;',
      div_class:' position-relative',
      a_herf:'https://www.instagram.com/abdo00o00/', 
      a_class:'w-100 h-100',
      image_src:'../../../../assets/images/asset 42.png',
      image_class:'w-100 h-100', 
      image_style:'',
      image_alt:'...',
    },
    {
      td_style:'padding: 5px;',
      div_class:' position-relative',
      a_herf:'https://www.instagram.com/abdo00o00/', 
      a_class:'w-100 h-100',
      image_src:'../../../../assets/images/asset 43.png',
      image_class:'w-100 h-100', 
      image_style:'',
      image_alt:'...',
    }, 
  ];
}
