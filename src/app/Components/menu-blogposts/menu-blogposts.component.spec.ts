import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBlogpostsComponent } from './menu-blogposts.component';

describe('MenuBlogpostsComponent', () => {
  let component: MenuBlogpostsComponent;
  let fixture: ComponentFixture<MenuBlogpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBlogpostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBlogpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
