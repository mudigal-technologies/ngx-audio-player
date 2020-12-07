import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {NavBarComponent, NavBarModule} from './nav-bar.component';


describe('NavBar', () => {
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavBarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    fixture.detectChanges();
  });

  // Note: Add tests as logic is added to navbar class.
});
