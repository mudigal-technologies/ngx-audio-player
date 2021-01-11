import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {FooterComponent, FooterModule} from './footer.component';
// import {DocsAppTestingModule} from '../../testing/testing-module';


describe('Footer', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      // imports: [FooterModule, DocsAppTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
  });

  it('should have a link to angular.io', () => {
    const link = fixture.nativeElement.querySelector('.docs-footer-logo a');
    const href = link.getAttribute('href');
    const text = link.textContent;
    expect(href).toContain('angular.io');
    expect(text).toContain('Learn Angular');
  });
});
