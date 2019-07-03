import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicAudioPlayerComponent } from './mat-basic-audio-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule, MatSliderModule } from '@angular/material';
import { SecondsToMinutesPipe } from '../../pipe/seconds-to-minutes';
import { Component, Type } from '@angular/core';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MatBasicAudioPlayerComponent', () => {

  function createComponent<T>(componentType: Type<T>, extraDeclarations: Type<any>[] = []) {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FontAwesomeModule, MatSliderModule, MatCardModule, NgxAudioPlayerModule],
      declarations: [componentType,  ...extraDeclarations],
    }).compileComponents();

    return TestBed.createComponent<T>(componentType);
  }

  let fixture: ComponentFixture<any>;

  describe('Component', () => {
    let component: MatBasicAudioPlayerComponent;
    
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe],
        imports: [FontAwesomeModule, MatSliderModule, MatCardModule]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(MatBasicAudioPlayerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should reset', () => {
      expect(component.resetSong).toBeTruthy();
    });

    it('should have play button', () => {
      component.audioUrl = "https://www.dropbox.com/s/2t968nilfzbxflv/Mechanical%20Sundariye.mp3?dl=1";
      fixture.detectChanges();
      const playButton = fixture.debugElement.query(By.css("button .play-track")).nativeElement;
      playButton.click();
      expect(fixture.debugElement.query(By.css(".pause-track"))).not.toBeNull;
    });

  });

  describe('Basic Audio Player', () => {
    let component: NgxBasicAudioPlayerApp;

    beforeEach(() => {
      fixture = createComponent(NgxBasicAudioPlayerApp);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have play button', () => {
      const playButton = fixture.debugElement.query(By.css(".play-track"));
      expect(playButton).toBeDefined();
    });

    it('should have time slider', () => {
        const positionSlider = fixture.nativeElement.querySelector('mat-slider');
        expect(positionSlider).toBeDefined();
    });
  });

  /** Test Basic Player */
  @Component({
    template: `<mat-basic-audio-player style="border: 4px solid grey;" [audioUrl]="'https://www.dropbox.com/s/2t968nilfzbxflv/Mechanical%20Sundariye.mp3?dl=1'" [title]="'Mechanical Sundariye'"></mat-basic-audio-player>`
  })
  class NgxBasicAudioPlayerApp {}

});