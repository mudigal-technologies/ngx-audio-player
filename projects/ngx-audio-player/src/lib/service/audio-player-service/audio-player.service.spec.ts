import { TestBed } from '@angular/core/testing';

import { AudioPlayerService } from './audio-player.service';
import { mockPlaylist } from '../../model/track.model.mock';

describe('AudioPlayerService', () => {
  let service: AudioPlayerService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [AudioPlayerService]
  }).compileComponents());

  beforeEach(() => {
    service = TestBed.get(AudioPlayerService);
    service.setPlaylist(mockPlaylist);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set playlist correctly', () => {
    expect(service.playlist.length).toEqual(3);
  });

  it('should set song\'s index correctly', () => {
    expect(service.getIndexSong()).toEqual(0);
  });

  it('should get playlist correctly', () => {
    expect(service.getPlaylist()[0].title).toEqual(mockPlaylist[0].title);
  });

  it('should select next song correctly', () => {
    service.nextSong();
    expect(service.indexSong).toEqual(1);
    service.nextSong();
    expect(service.indexSong).toEqual(2);
    service.nextSong();
    expect(service.indexSong).toEqual(0);
    service.nextSong();
    expect(service.indexSong).toEqual(1);
  });

  it('should select previous song correctly', () => {
    service.previousSong();
    expect(service.indexSong).toEqual(2);
    service.previousSong();
    expect(service.indexSong).toEqual(1);
    service.previousSong();
    expect(service.indexSong).toEqual(0);
    service.previousSong();
    expect(service.indexSong).toEqual(2);
  });

  it('should select track correctly', () => {
    service.selectATrack(2);
    expect(service.indexSong).toEqual(1);
  });

  it('should reset playlist correctly', () => {
    service.resetPlaylist();
    expect(service.indexSong).toEqual(0);
  });

});
