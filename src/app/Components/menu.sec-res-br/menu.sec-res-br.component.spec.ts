import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSecResBrComponent } from './menu.sec-res-br.component';

describe('MenuSecResBrComponent', () => {
  let component: MenuSecResBrComponent;
  let fixture: ComponentFixture<MenuSecResBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSecResBrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSecResBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
