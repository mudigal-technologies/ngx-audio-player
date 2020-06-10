import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player/public_api';
import { AudioPlayerService } from 'projects/ngx-audio-player/src/public_api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private audioPlayerService: AudioPlayerService) {}
  private fmaBaseUrl =
    'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';

  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'In Love | A Himitsu feat. Nori';
  msbapAudioUrl = `https://audiograb.com/songs/nori-in-love-chill-royalty-free-music-xiMvrlfD.mp3`;

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'In Love | A Himitsu feat. Nori',
      link:
        'https://audiograb.com/songs/nori-in-love-chill-royalty-free-music-xiMvrlfD.mp3'
    },
    {
      title: 'Cartoon – On & On (feat. Daniel Levi) [NCS Release]',
      link:
        'https://audiograb.com/songs/daniel-levi-chill-royalty-free-music-m5BTrEAILs.mp3'
    }
  ];

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [2, 4, 6];

  msaapDisplayVolumeControls = true;

  // Advanced Features

  msaapPlaylist2: Track[] = [
    {
      title: '1400 (by Yung Kartz)',
      link: `${this.fmaBaseUrl}/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3`
    },
    {
      title: 'Epic Song (by BoxCat Games)',
      link: `${this.fmaBaseUrl}/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3`
    }
  ];

  msaapPlaylist3: Track[] = [
    {
      title: 'Hachiko (The Faithful Dog) (by The Kyoto)',
      link: `${this.fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`
    },
    {
      title: 'Starling (by Podington Bear)',
      link: `${this.fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`
    }
  ];

  currentTrack: Track = null;
  currentTime: any;

  appendTracksToPlaylistDisable = false;

  counter = 1;

  changeMsbapDisplayTitle(event) {
    this.msbapDisplayTitle = event.checked;
  }

  changeMsbapDisplayVolumeControls(event) {
    this.msbapDisplayVolumeControls = event.checked;
  }

  changeMsaapDisplayTitle(event) {
    this.msaapDisplayTitle = event.checked;
  }

  changeMsaapDisplayPlayList(event) {
    this.msaapDisplayPlayList = event.checked;
  }

  changeMsaapDisplayVolumeControls(event) {
    this.msaapDisplayVolumeControls = event.checked;
  }

  onEnded(event) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.

    // example
    this.currentTrack = null;
  }

  logCurrentTrack() {
    this.audioPlayerService.getCurrentTrack().subscribe(track => {
      this.currentTrack = track;
    });
  }

  logCurrentTime() {
    this.audioPlayerService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
    });
  }

  consoleLogCurrentData() {
    // logCurrentTrack();
    // logCurrentTime();
    // Make sure to subscribe (by calling above methods)
    // before getting the data
    console.log(this.currentTrack.title + ' : ' + this.currentTime);
  }

  appendTracksToPlaylist() {
    if (this.counter === 1) {
      this.msaapPlaylist2.map(track => {
        this.msaapPlaylist.push(track);
      });
      this.audioPlayerService.setPlaylist(this.msaapPlaylist);
      this.counter = this.counter + 1;
    } else if (this.counter === 2) {
      this.msaapPlaylist3.map(track => {
        this.msaapPlaylist.push(track);
      });
      this.audioPlayerService.setPlaylist(this.msaapPlaylist);
      this.appendTracksToPlaylistDisable = true;
    }
  }
}
