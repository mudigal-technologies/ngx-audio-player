import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Track } from '../../model/track.model';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player.component';
import { MatSlider } from '@angular/material/slider';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';

@Component({
    selector: 'mat-advanced-audio-player',
    templateUrl: './mat-advanced-audio-player.component.html',
    styleUrls: ['./mat-advanced-audio-player.component.css', './../base/base-audio-player.component.css']
})
export class MatAdvancedAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {


    audioPlayerService: AudioPlayerService;
    constructor() {
        super();
        this.audioPlayerService = new AudioPlayerService();
    }

    @Input()
    set playlist(playlist: Track[]) {
        this.audioPlayerService.setPlaylist(playlist);
    }

    @ViewChild(MatPaginator, { static: false }) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    displayedColumns: string[] = ['title', 'status'];
    dataSource = new MatTableDataSource<Track>();
    paginator: MatPaginator;

    timeLineDuration: MatSlider;

    tracks: Track[] = [];

    @Input() displayTitle = true;
    @Input() displayPlaylist = true;
    @Input() displayVolumeControls = true;
    @Input() pageSizeOptions = [10, 20, 30];
    @Input() expanded = true;
    @Input() autoPlay = false;

    private currentIndex = 0;

    currentTrack: Track;
    private previousTrack: Track;
    private nextTrack: Track;

    ngOnInit() {

        this.bindPlayerEvent();

        // Subscribe to playlist observer from AudioPlayerService and
        // update the playlist within MatAdvancedAudioPlayerComponent
        this.audioPlayerService.getPlaylist().subscribe(tracks => {
            if (tracks !== null && tracks !== []) {
                this.tracks = tracks;
                this.initialize();
            }
        });

    }

    initialize() {

        // populate indexs for the track and configure
        // material table data source and paginator
        this.setDataSourceAttributes();

        // auto play next track
        this.player.nativeElement.addEventListener('ended', () => {
            this.nextSong();
        });

        this.player.nativeElement.addEventListener('timeupdate', () => {
            this.audioPlayerService.setCurrentTime(this.player.nativeElement.currentTime);
        });

        this.player.nativeElement.currentTime = this.startOffset;
        this.updateCurrentSong();
        if (this.autoPlay) {
            super.play();
        }
    }

    setDataSourceAttributes() {
        let index = 1;
        if (this.tracks) {
            this.tracks.forEach((track: Track) => {
                track.index = index++;
            });
            this.dataSource = new MatTableDataSource<Track>(this.tracks);
            this.dataSource.paginator = this.paginator;
        }
    }

    nextSong(): void {
        if (this.displayPlaylist === true
            && (((this.currentIndex + 1) % this.paginator.pageSize) === 0
                || (this.currentIndex + 1) === this.paginator.length)) {
            if (this.paginator.hasNextPage()) {
                this.paginator.nextPage();
            } else if (!this.paginator.hasNextPage()) {
                this.paginator.firstPage();
            }
        }
        this.currentTime = 0;
        this.duration = 0.01;
        if ((this.currentIndex + 1) >= this.tracks.length) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        this.updateCurrentSong();
        this.play(this.nextTrack);
    }

    previousSong(): void {
        this.currentTime = 0;
        this.duration = 0.01;
        if (!this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
            if (this.displayPlaylist === true
                && (((this.currentIndex) % this.paginator.pageSize) === 0
                    || (this.currentIndex === 0))) {
                if (this.paginator.hasPreviousPage()) {
                    this.paginator.previousPage();
                } else if (!this.paginator.hasPreviousPage()) {
                    this.paginator.lastPage();
                }
            }
            if ((this.currentIndex - 1) < 0) {
                this.currentIndex = (this.tracks.length - 1);
            } else {
                this.currentIndex--;
            }
        } else {
            this.resetSong();
        }
        this.updateCurrentSong();
        this.play(this.previousTrack);
    }

    resetSong(): void {
        this.player.nativeElement.src = this.currentTrack.link;
    }

    selectTrack(index: number): void {
        this.currentIndex = index - 1;
        this.updateCurrentSong();
        this.play(this.currentTrack);
    }

    checkIfSongHasStartedSinceAtleastTwoSeconds(): boolean {
        return this.player.nativeElement.currentTime > 2;
    }

    updateCurrentSong(): void {
        this.currentTrack = this.tracks[this.currentIndex];
        this.previousTrack = ((this.currentIndex - 1) >= 0) ? this.tracks[this.currentIndex - 1] : this.tracks[this.tracks.length - 1];
        this.nextTrack = ((this.currentIndex + 1) >= this.tracks.length) ? this.tracks[0] : this.tracks[this.currentIndex + 1];

        this.audioPlayerService.setCurrentTrack(this.currentTrack);
    }

}
