import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';

@Component({
  selector: 'mat-dark-audio-player',
  templateUrl: './mat-dark-audio-player.component.html',
  styleUrls: ['./mat-dark-audio-player.component.css']
})
export class MatDarkAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {
  @Input()
  title: string;

  @Input()
  audioUrl: string;

  @Input()
  displayTitle = false;

  @Input()
  displayVolumeControls = true;

  constructor() {
    super();
  }

  ngOnInit() {
    this.bindPlayerEvent();
  }

  resetSong(): void {
    this.player.nativeElement.src = this.audioUrl;
}

}
