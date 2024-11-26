import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktablefooterComponent } from './booktablefooter.component';

describe('BooktablefooterComponent', () => {
  let component: BooktablefooterComponent;
  let fixture: ComponentFixture<BooktablefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooktablefooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooktablefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
