import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from '../../model/track.model';

@Injectable()
export class AudioPlayerService {

  playlist: Track[] = [];

  indexSong = 0;
  currentTrack: BehaviorSubject<{}> = new BehaviorSubject(this.playlist[this.indexSong]);
  currentTime = 0;
  duration = 0;

  constructor() {

  }

  init(): void {
    this.updateCurrentSong();
  }

  nextSong(): void {
    if ((this.indexSong + 1) >= this.playlist.length) {
      this.indexSong = 0;
    } else {
      this.indexSong++;
    }
    this.updateCurrentSong();
  }

  previousSong(): void {
    if ((this.indexSong - 1) < 0) {
      this.indexSong = (this.playlist.length - 1);
    } else {
      this.indexSong--;
    }
    this.updateCurrentSong();
  }

  resetPlaylist(): void {
    this.indexSong = 0;
    this.updateCurrentSong();
  }

  selectATrack(index: number): void {
    this.indexSong = index - 1;
    this.updateCurrentSong();
  }

  updateCurrentSong(): void {
    const current = this.playlist[this.indexSong];
    const previous = ((this.indexSong - 1) >= 0) ? this.playlist[this.indexSong - 1] : this.playlist[this.playlist.length - 1];
    const next = ((this.indexSong + 1) >= this.playlist.length) ? this.playlist[0] : this.playlist[this.indexSong + 1];

    this.currentTrack.next([
      previous,
      current,
      next
    ]);
  }

  getSubjectCurrentTrack(): BehaviorSubject<{}> {
    return this.currentTrack;
  }

  getPlaylist(): Track[] {
    return this.playlist;
  }

  setPlaylist(playlist: Track[]) {
    this.playlist = playlist;
  }

  getIndexSong() {
    return this.indexSong;
  }
}
