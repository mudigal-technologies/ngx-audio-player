import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatSliderModule, MatExpansionModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatMenuModule } from '@angular/material';
import { MatBasicAudioPlayerComponent } from './component/mat-basic-audio-player/mat-basic-audio-player.component';
import { AudioPlayerService } from './service/audio-player-service/audio-player.service';
import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';
import { MatAdvancedAudioPlayerComponent } from './component/mat-advanced-audio-player/mat-advanced-audio-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { MatDarkAudioPlayerComponent } from './component/mat-dark-audio-player/mat-dark-audio-player.component';

@NgModule({
  exports: [
    MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule, 
    MatSliderModule, MatExpansionModule, MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  declarations: [MatBasicAudioPlayerComponent, MatDarkAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule, MaterialModule],
  exports: [MatBasicAudioPlayerComponent, MatDarkAudioPlayerComponent, MatAdvancedAudioPlayerComponent],
  providers: [AudioPlayerService]
})
export class NgxAudioPlayerModule {
  constructor() {
    // Icons for User Favorite Page
    library.add(faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp);
  }
}