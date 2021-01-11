import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'hammerjs';
import { AudioPlayerComponent } from './ngx-audio-player.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { SecondsToMinutesPipe } from '../../pipe/seconds-to-minutes';
import { FormsModule } from '@angular/forms';
import { mockPlaylist } from '../../model/track.model.mock';
import { ElementRef, Injectable, Component, Type } from '@angular/core';
import { Track } from '../../model/track.model';
import { MatIconModule } from '@angular/material/icon';
import { NgxAudioPlayerModule } from '../../ngx-audio-player.module';
import { By } from '@angular/platform-browser';

@Injectable()
export class MockElementRef {
  nativeElement: {};
}

@Injectable()
export class MockService extends AudioPlayerService {
  playlist = mockPlaylist;
}

describe('AudioPlayerComponent', () => {
  function createComponent<T>(componentType: Type<T>, extraDeclarations: Type<any>[] = []) {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatSliderModule, MatCardModule, MatFormFieldModule, MatExpansionModule,
        MatPaginatorModule, MatTableModule, FormsModule, NgxAudioPlayerModule],
      declarations: [componentType, ...extraDeclarations],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, { provide: AudioPlayerService, useClass: MockService }]
    }).compileComponents();

    return TestBed.createComponent<T>(componentType);
  }

  let component: AudioPlayerComponent;
  let fixture: ComponentFixture<any>;

  describe('Component', () => {
    beforeEach((() => {
      const MATERIAL_MODULES = [
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSliderModule,
        MatTableModule
      ];

      TestBed.configureTestingModule({
        declarations: [AudioPlayerComponent, SecondsToMinutesPipe],
        imports: [
          MatIconModule,
          FormsModule,
          MATERIAL_MODULES
        ],
        providers: [{ provide: ElementRef, useClass: MockElementRef }, { provide: AudioPlayerService, useClass: MockService }]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AudioPlayerComponent);
      component = fixture.componentInstance;
      component.playlist = mockPlaylist;

      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have play button', () => {
      const playButton = By.css('.play-track');
      expect(playButton).toBeDefined();
    });

    it('should select next song correctly', () => {
      component.nextSong();
      expect(component.currentIndex).toEqual(1);
      component.nextSong();
      expect(component.currentIndex).toEqual(2);
      component.nextSong();
      expect(component.currentIndex).toEqual(3);
      component.nextSong();
      expect(component.currentIndex).toEqual(0);
    });

    it('should select previous song correctly', () => {
      component.previousSong();
      expect(component.currentIndex).toEqual(3);
      component.previousSong();
      expect(component.currentIndex).toEqual(2);
      component.previousSong();
      expect(component.currentIndex).toEqual(1);
      component.previousSong();
      expect(component.currentIndex).toEqual(0);
    });

    it('should select track correctly', () => {
      component.selectTrack(2);
      expect(component.currentIndex).toEqual(1);
    });

  });

  describe('Advanced Audio Player', () => {
    beforeEach(() => {
      fixture = createComponent(AngularAudioPlayerApp);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  });

  /** Test Ngx Player */
  @Component({
    template: ``
  })
  class AngularAudioPlayerApp {
    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = mockPlaylist;

    msaapDisplayTitle = true;
    msaapDisplayPlayList = true;
    pageSizeOptions = [2, 4, 6];

    msaapDisablePositionSlider = false;
    msaapDisplayVolumeControls = true;
  }

});
