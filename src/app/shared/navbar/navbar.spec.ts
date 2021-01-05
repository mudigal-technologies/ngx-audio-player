import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavBar, NavBarModule} from './navbar';


describe('NavBar', () => {
  let fixture: ComponentFixture<NavBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavBarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBar);
    fixture.detectChanges();
  });

  // Note: Add tests as logic is added to navbar class.
});
