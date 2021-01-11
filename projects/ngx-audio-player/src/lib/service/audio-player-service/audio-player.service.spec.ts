import { TestBed } from '@angular/core/testing';

import { AudioPlayerService } from './audio-player.service';
import { mockPlaylist } from '../../model/track.model.mock';

describe('AudioPlayerService', () => {
  const service: AudioPlayerService = new AudioPlayerService();

  beforeEach(() => TestBed.configureTestingModule({
    providers: [AudioPlayerService]
  }).compileComponents());

  beforeEach(() => {
    service.setPlaylist(mockPlaylist);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set playlist correctly', () => {
    expect(service.getPlaylist().subscribe(playlist => {
      return playlist.length === 3;
    }));
  });

  it('should get playlist correctly', () => {
    expect(service.getPlaylist().subscribe((playlist) => {
      return playlist[0].title === (mockPlaylist[0].title);
    }));

  });
});
