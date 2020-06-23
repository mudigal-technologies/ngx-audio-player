import { Component, OnInit, Input } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player.component';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';

@Component({
    selector: 'mat-basic-audio-player',
    templateUrl: './mat-basic-audio-player.component.html',
    styleUrls: ['./mat-basic-audio-player.component.css', './../base/base-audio-player.component.css']
})
export class MatBasicAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {

    @Input()
    title: string;

    @Input()
    audioUrl: string;

    @Input()
    displayTitle = false;

    @Input()
    autoPlay = false;

    @Input()
    displayVolumeControls = true;

    audioPlayerService: AudioPlayerService;

    constructor() {
        super();
        this.audioPlayerService = new AudioPlayerService();
    }

    ngOnInit() {
        this.bindPlayerEvent();

        this.player.nativeElement.addEventListener('timeupdate', () => {
            this.audioPlayerService.setCurrentTime(this.player.nativeElement.currentTime);
        });

        if (this.autoPlay) {
            super.play();
        }
    }

    resetSong(): void {
        this.player.nativeElement.src = this.audioUrl;
    }

}
