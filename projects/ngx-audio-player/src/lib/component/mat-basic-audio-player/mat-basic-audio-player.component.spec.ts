import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicAudioPlayerComponent } from './mat-basic-audio-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule, MatSliderModule } from '@angular/material';
import { SecondsToMinutesPipe } from '../../pipe/seconds-to-minutes';
import { Component, Type } from '@angular/core';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { By, element } from 'protractor';

describe('MatBasicAudioPlayerComponent', () => {

  function createComponent<T>(componentType: Type<T>, extraDeclarations: Type<any>[] = []) {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, MatSliderModule, MatCardModule, NgxAudioPlayerModule],
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
      const fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';
      component.audioUrl = `${fmaBaseUrl}/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3`;
      fixture.detectChanges();
      element(By.css('button .play-track')).click();
      expect(By.css('.pause-track')).not.toBeNull();
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
      const playButton = By.css('.play-track');
      expect(playButton).toBeDefined();
    });

    it('should have time slider', () => {
        const positionSlider = fixture.nativeElement.querySelector('mat-slider');
        expect(positionSlider).toBeDefined();
    });
  });

  /** Test Basic Player */
  @Component({
    template: `<mat-basic-audio-player class="col-12 col-md-6"
    [audioUrl]="audioUrl" [title]="'Night Owl (by Broke For Free)'"
    [displayTitle]="" [displayVolumeControls]="true"></mat-basic-audio-player>`
  })

  class NgxBasicAudioPlayerApp {
    private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';
    audioUrl = `${this.fmaBaseUrl}/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3`;
  }

});
