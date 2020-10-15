import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Track } from '../../model/track.model';

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {

  // Dynamic update of playlist
  tracks: Track[] = [];
  playlistSubject$: BehaviorSubject<Track[]> =
    new BehaviorSubject<Track[]>(this.tracks);

  // Get the current track
  currentTrack: Track = null;
  currentTrackSubject$: BehaviorSubject<Track> =
    new BehaviorSubject<Track>(this.currentTrack);

  // Get the current time
  currentTime: any = null;
  currentTimeSubject$: BehaviorSubject<any> =
    new BehaviorSubject<any>(this.currentTime);

  setPlaylist(tracks: Track[]) {
    this.tracks = tracks;
    this.playlistSubject$.next(this.tracks);
  }

  getPlaylist(): Observable<Track[]> {
    return this.playlistSubject$.asObservable();
  }

  setCurrentTrack(currentTrack: Track) {
    this.currentTrack = currentTrack;
    this.currentTrackSubject$.next(this.currentTrack);
  }

  getCurrentTrack(): Observable<Track> {
    return this.currentTrackSubject$.asObservable();
  }

  setCurrentTime(currentTime: any) {
    this.currentTime = currentTime;
    this.currentTimeSubject$.next(this.currentTime);
  }

  getCurrentTime(): Observable<any> {
    return this.currentTimeSubject$.asObservable();
  }

}
