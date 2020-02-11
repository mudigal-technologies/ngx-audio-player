import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatBasicAudioPlayerComponent } from './component/mat-basic-audio-player/mat-basic-audio-player.component';
import { AudioPlayerService } from './service/audio-player-service/audio-player.service';
import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';
import { MatAdvancedAudioPlayerComponent } from './component/mat-advanced-audio-player/mat-advanced-audio-player.component';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
    MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule],
  exports: [MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent],
  providers: [AudioPlayerService]
})
export class NgxAudioPlayerModule {
  constructor() {
  }
}
