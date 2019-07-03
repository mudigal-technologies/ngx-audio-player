import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';
import { MatMenuTrigger, MatMenu, MenuPositionX } from '@angular/material';

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
    displayVolumeControls = true;
    
    constructor() {
        super();
    }

    ngOnInit() {
        this.bindPlayerEvent();
    }

    resetSong(): void {
        this.player.nativeElement.src = this.audioUrl;
    };

}