import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerybodyComponent } from './gallerybody.component';

describe('GallerybodyComponent', () => {
  let component: GallerybodyComponent;
  let fixture: ComponentFixture<GallerybodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerybodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallerybodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
