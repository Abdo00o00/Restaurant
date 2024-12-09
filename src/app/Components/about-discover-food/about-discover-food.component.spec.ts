import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDiscoverFoodComponent } from './about-discover-food.component';

describe('AboutDiscoverFoodComponent', () => {
  let component: AboutDiscoverFoodComponent;
  let fixture: ComponentFixture<AboutDiscoverFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDiscoverFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutDiscoverFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
