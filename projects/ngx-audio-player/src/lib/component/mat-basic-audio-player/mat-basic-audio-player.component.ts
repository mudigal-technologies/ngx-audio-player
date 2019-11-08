import { Component, OnInit, Input } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';

@Component({
    selector: 'mat-basic-audio-player',
    templateUrl: './mat-basic-audio-player.component.html',
    styleUrls: ['./mat-basic-audio-player.component.css']
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

    constructor() {
        super();
    }

    ngOnInit() {
        this.bindPlayerEvent();
        if (this.autoPlay) {
            super.play();
        }
    }

    resetSong(): void {
        this.player.nativeElement.src = this.audioUrl;
    }

}
