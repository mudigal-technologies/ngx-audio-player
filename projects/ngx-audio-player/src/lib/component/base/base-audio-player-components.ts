import { ViewChild, ElementRef, Input } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { Track } from '../../model/track.model';

export class BaseAudioPlayerFunctions {

    @ViewChild('audioPlayer', {static: true}) player: ElementRef;
    timeLineDuration: MatSlider;

    loaderDisplay = false;
    isPlaying = false;
    currentTime = 0;
    volume = 0.1;
    duration = 0.01;
    
    private _startOffset = 0;
    @Input()
    set startOffset(seconds: number) {
        this._startOffset = seconds;
        this.player.nativeElement.currentTime = seconds;
    }
    get startOffset(): number {
        return this._startOffset;
    }

    @Input()
    public endOffset = 0;
    
    currTimePosChanged(event) {
        this.player.nativeElement.currentTime = event.value;
    }

    bindPlayerEvent(): void {
        this.player.nativeElement.addEventListener('playing', () => {
            this.isPlaying = true;
            this.duration = Math.floor(this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('pause', () => {
            this.isPlaying = false;
        });
        this.player.nativeElement.addEventListener('timeupdate', () => {
            this.currentTime = Math.floor(this.player.nativeElement.currentTime);
            if (this.currentTime >= this.duration - this.endOffset) {
                this.player.nativeElement.pause();
            }
        });
        this.player.nativeElement.addEventListener('volume', () => {
            this.volume = Math.floor(this.player.nativeElement.volume);
        });
        this.player.nativeElement.addEventListener('loadstart', () => {
            this.loaderDisplay = true;
        });
        this.player.nativeElement.addEventListener('loadeddata', () => {
            this.loaderDisplay = false;
            this.duration = Math.floor(this.player.nativeElement.duration);
        });
    }

    playBtnHandler(): void {
        if (this.loaderDisplay) {
            return;
        }
        if (this.player.nativeElement.paused) {
            if (this.currentTime >= this.duration - this.endOffset) {
                this.player.nativeElement.currentTime = this.startOffset;
            } else {
                this.player.nativeElement.currentTime = this.currentTime;
            }               
                
            this.player.nativeElement.play();            
        } else {
            this.currentTime = this.player.nativeElement.currentTime;
            this.player.nativeElement.pause();
        }
    }

    play(track?: Track): void {
        setTimeout(() => {
            if (track) {
                this.startOffset = track.startOffset || 0;
                this.endOffset = track.endOffset || 0;
            }
            
            setTimeout(() => {
                this.player.nativeElement.play();
            }, 50);
        }, 0);
    }

    toggleVolume() {
        if (this.volume === 0) {
            this.setVolume(1.0);
        } else {
            this.setVolume(0);
        }
    }

    private setVolume(vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    }

}
