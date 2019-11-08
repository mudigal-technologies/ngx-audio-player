import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatCheckboxModule } from '@angular/material';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [BrowserAnimationsModule, RouterTestingModule, MatCardModule, MatCheckboxModule, NgxAudioPlayerModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be able to click on basic player controls - display title', async(() => {
    const input = fixture.debugElement.query(By.css('.mat-basic-player-display-title .mat-checkbox-input')).nativeElement;
    expect(input.checked).toBeFalsy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeTruthy();
  }));

  it('should be able to click on advanced player controls - display title', async(() => {
    const input = fixture.debugElement.query(By.css('.mat-advanced-player-display-title .mat-checkbox-input')).nativeElement;
    expect(input.checked).toBeTruthy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeFalsy();
  }));

  it('should be able to click on advanced player controls - display playlist', async(() => {
    const input = fixture.debugElement.query(By.css('.mat-advanced-player-display-playlist .mat-checkbox-input')).nativeElement;
    expect(input.checked).toBeTruthy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeFalsy();
  }));

});
