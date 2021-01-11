import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MatCardModule,
        MatPseudoCheckboxModule,
        NgxAudioPlayerModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to click on player controls - display title', waitForAsync(() => {
    const input = fixture.debugElement.query(
      By.css('.ngx-player-display-title .mat-checkbox-input')
    ).nativeElement;
    expect(input.checked).toBeTruthy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeFalsy();
  }));

  it('should be able to click on advanced player controls - display playlist', waitForAsync(() => {
    const input = fixture.debugElement.query(
      By.css('.mat-advanced-player-display-playlist .mat-checkbox-input')
    ).nativeElement;
    expect(input.checked).toBeTruthy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeFalsy();
  }));
});
