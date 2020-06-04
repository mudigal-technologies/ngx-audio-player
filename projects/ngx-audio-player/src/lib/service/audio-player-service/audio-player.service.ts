import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from '../../model/track.model';

@Injectable()
export class AudioPlayerService {

  playlist: Track[] = [];

  indexSong = 0;
  currentTrack: BehaviorSubject<Track[]> = new BehaviorSubject([]);
  currentTime = 0;
  duration = 0;

  constructor() {

  }

  init(): void {
    this.updateCurrentSong();
  }

  nextSong(): Track {
    if ((this.indexSong + 1) >= this.playlist.length) {
      this.indexSong = 0;
    } else {
      this.indexSong++;
    }
    return this.updateCurrentSong();
  }

  previousSong(): Track {
    if ((this.indexSong - 1) < 0) {
      this.indexSong = (this.playlist.length - 1);
    } else {
      this.indexSong--;
    }
    return this.updateCurrentSong();
  }

  resetPlaylist(): void {
    this.indexSong = 0;
    this.updateCurrentSong();
  }

  selectATrack(index: number): Track {
    this.indexSong = index - 1;
    return this.updateCurrentSong();
  }

  updateCurrentSong(): Track {
    const current = this.playlist[this.indexSong];
    const previous = ((this.indexSong - 1) >= 0) ? this.playlist[this.indexSong - 1] : this.playlist[this.playlist.length - 1];
    const next = ((this.indexSong + 1) >= this.playlist.length) ? this.playlist[0] : this.playlist[this.indexSong + 1];

    this.currentTrack.next([
      previous,
      current,
      next
    ]);

    return current;
  }

  getSubjectCurrentTrack(): BehaviorSubject<Track[]> {
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
