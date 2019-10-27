import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatSliderModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import { MatBasicAudioPlayerComponent } from './component/mat-basic-audio-player/mat-basic-audio-player.component';
import { AudioPlayerService } from './service/audio-player-service/audio-player.service';
import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';
import { MatAdvancedAudioPlayerComponent } from './component/mat-advanced-audio-player/mat-advanced-audio-player.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatTableModule
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
  imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule],
  exports: [MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent],
  providers: [AudioPlayerService]
})
export class NgxAudioPlayerModule {}
