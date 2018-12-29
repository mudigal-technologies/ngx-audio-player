import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { MatSlider, MatPaginator, MatTableDataSource } from '@angular/material';
import { Track } from '../../model/track.model';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';

@Component({
    selector: 'mat-advanced-audio-player',
    templateUrl: './mat-advanced-audio-player.component.html',
    styleUrls: ['./mat-advanced-audio-player.component.css']
})
export class MatAdvancedAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {

    displayedColumns: string[] = ['title', 'status'];
    timeLineDuration: MatSlider;

    dataSource = new MatTableDataSource<Track>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Input() 
    playlist: Track[];

    @Input() 
    displayTitle: true;

    @Input() 
    displayPlaylist: true;

    playlistTrack: any;

    constructor(private playlistService: AudioPlayerService) {
        super();
    }

  ngOnInit() {
        let index = 1;
        this.playlist.forEach(data=> {
            data.index = index++;
        });
        this.dataSource = new MatTableDataSource<Track>(this.playlist);
        
        this.dataSource.paginator = this.paginator;
        
        this.bindPlayerEvent();
        this.playlistService.setPlaylist(this.playlist);
        this.playlistService.getSubjectCurrentTrack().subscribe((playlistTrack) => {
            this.playlistTrack = playlistTrack;
        });
        this.player.nativeElement.currentTime = 0;
        this.playlistService.init();
    }

    nextSong(): void {
        if (((this.playlistService.indexSong + 1) % this.paginator.pageSize) === 0 ||
        (this.playlistService.indexSong + 1) === this.paginator.length) {
            if (this.paginator.hasNextPage()) {
                this.paginator.nextPage();
            } else if (!this.paginator.hasNextPage()) {
                this.paginator.firstPage();
            }
        }
        this.currentTime = 0;
        this.duration = 0.01;
        this.playlistService.nextSong();
        this.play();
    };

    previousSong(): void {
        this.currentTime = 0;
        this.duration = 0.01;
        if (!this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
            if (((this.playlistService.indexSong) % this.paginator.pageSize) === 0 ||
            (this.playlistService.indexSong) === 0) {
                if (this.paginator.hasPreviousPage()) {
                    this.paginator.previousPage();
                } else if (!this.paginator.hasPreviousPage()) {
                    this.paginator.lastPage();
                }
            }
            this.playlistService.previousSong();
        } else {
            this.resetSong();
        }
        this.play();
    };

    resetSong(): void {
        this.player.nativeElement.src = this.playlistTrack[1].link;
    };

    selectTrack(index: number): void {
        console.log('selectTrack(index: number): void: ' + index);
        this.playlistService.selectATrack(index);
        setTimeout(() => {
            this.player.nativeElement.play();
        }, 0);
    };

    checkIfSongHasStartedSinceAtleastTwoSeconds(): boolean {
        return this.player.nativeElement.currentTime > 2;
    };
}