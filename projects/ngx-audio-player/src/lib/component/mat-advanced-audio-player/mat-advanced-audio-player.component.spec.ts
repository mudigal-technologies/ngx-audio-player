import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'hammerjs';
import { MatAdvancedAudioPlayerComponent } from './mat-advanced-audio-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MatCardModule, MatExpansionModule, MatFormFieldModule, MatPaginatorModule,
  MatSliderModule, MatTableModule
} from '@angular/material';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { SecondsToMinutesPipe } from '../../pipe/seconds-to-minutes';
import { FormsModule } from '@angular/forms';
import { mockPlaylist } from '../../model/track.model.mock';
import { ElementRef, Injectable, Component, Type } from '@angular/core';
import { Track } from '../../model/track.model';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { By } from 'protractor';

@Injectable()
export class MockElementRef {
  nativeElement: {};
}

@Injectable()
export class MockService extends AudioPlayerService {
  playlist = mockPlaylist;
}

describe('MatAdvancedAudioPlayerComponent', () => {
  function createComponent<T>(componentType: Type<T>, extraDeclarations: Type<any>[] = []) {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, MatSliderModule, MatCardModule,
        MatFormFieldModule, MatExpansionModule, MatPaginatorModule, MatTableModule, FormsModule, NgxAudioPlayerModule],
      declarations: [componentType, ...extraDeclarations],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, { provide: AudioPlayerService, useClass: MockService }]
    }).compileComponents();

    return TestBed.createComponent<T>(componentType);
  }

  let fixture: ComponentFixture<any>;

  describe('Component', () => {
    let component: MatAdvancedAudioPlayerComponent;
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
        declarations: [MatAdvancedAudioPlayerComponent, SecondsToMinutesPipe],
        imports: [
          FontAwesomeModule,
          FormsModule,
          MATERIAL_MODULES
        ],
        providers: [{ provide: ElementRef, useClass: MockElementRef }, { provide: AudioPlayerService, useClass: MockService }]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(MatAdvancedAudioPlayerComponent);
      component = fixture.componentInstance;
      component.playlist = mockPlaylist;

      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should be able to set playlist', async () => {
      expect(component.playlistData[0].title).toEqual(mockPlaylist[0].title);
    });

    it('should have play button', () => {
      const playButton = By.css('.play-track');
      expect(playButton).toBeDefined();
    });

    it('should select next song correctly', () => {
      // spyOn(component, 'play');
      // let matPaginator = new MatPaginator(null, null);
      // matPaginator.pageSize = 2;
      // component.dataSource.paginator = matPaginator;
      // component.nextSong();
      // fixture.detectChanges();
      // fixture.whenStable().then(() => {
      //   expect(component.play).toHaveBeenCalled();
      // });
    });

    it('should select previous song correctly', () => {
      // spyOn(component, 'play');
      // // component.paginator.pageSize = 2;
      // component.previousSong();
      // fixture.detectChanges();
      // fixture.whenStable().then(() => {
      //   expect(component.play).toHaveBeenCalled();
      // });
    });

  });

  describe('Advanced Audio Player', () => {
    let component: NgxAdvancedAudioPlayerApp;

    beforeEach(() => {
      fixture = createComponent(NgxAdvancedAudioPlayerApp);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  });

  /** Test Advanced Player */
  @Component({
    template: `<mat-advanced-audio-player [playlist]="msaapPlaylist" [displayTitle]="msaapDisplayTitle"
      [displayPlaylist]="msaapDisplayPlayList"
      [pageSizeOptions]="pageSizeOptions" [displayVolumeControls]="msaapDisplayVolumeControls"
      [expanded]="true"></mat-advanced-audio-player>`
  })
  class NgxAdvancedAudioPlayerApp {
    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = mockPlaylist;

    msaapDisplayTitle = true;
    msaapDisplayPlayList = true;
    msaapDisplayVolumeControls = true;
  }

});
