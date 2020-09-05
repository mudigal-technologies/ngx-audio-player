import { Component, ViewChild } from '@angular/core';
import { Track } from 'ngx-audio-player/public_api';
import { MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent } from 'projects/ngx-audio-player/src/public_api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }
  private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';





  // Start of Basic Player Instance 1

  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle1 = 'In Love | A Himitsu feat. Nori';
  msbapAudioUrl1 = 'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0';

  msbapDisplayTitle1 = true;
  msbapDisplayVolumeControls1 = true;
  msbapDisablePositionSlider1 = false;

  // Optional Additional Examples 
  // - Logging Current Time

  @ViewChild("basic1", {static: false})
  basicPlayer1: MatBasicAudioPlayerComponent;

  basicPlayerCurrentTrack1: string;
  basicPlayerCurrentTime1: any;

  logCurrentTrackBasicPlayer1() {
    this.basicPlayerCurrentTrack1 = this.basicPlayer1.title;
  }

  logCurrentTimeBasicPlayer1() {
    this.basicPlayer1.audioPlayerService.getCurrentTime().subscribe(time => {
      this.basicPlayerCurrentTime1 = time;
    })
  }
  // End of Basic Player Instance 1





  // Start of Basic Player Instance 2

  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle2 = 'Cartoon – On & On (feat. Daniel Levi) [NCS Release]';
  msbapAudioUrl2 = 'https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0';

  msbapDisplayTitle2 = true;
  msbapDisplayVolumeControls2 = true;
  msbapDisablePositionSlider2 = false;

  // Optional Additional Examples 
  // - Logging Current Time

  @ViewChild("basic2", {static: false})
  basicPlayer2: MatBasicAudioPlayerComponent;

  basicPlayerCurrentTrack2: string;
  basicPlayerCurrentTime2: any;

  logCurrentTrackBasicPlayer2() {
    this.basicPlayerCurrentTrack2 = this.basicPlayer2.title;
  }

  logCurrentTimeBasicPlayer2() {
    this.basicPlayer2.audioPlayerService.getCurrentTime().subscribe(time => {
      this.basicPlayerCurrentTime2 = time;
    });
  }
  // End of Basic Player Instance 2





  // Material Style Advance Audio Player Playlist

  @ViewChild("advanced", {static: false})
  advancedPlayer: MatAdvancedAudioPlayerComponent;

  msaapPlaylist: Track[] = [
    {
      title: 'In Love | A Himitsu feat. Nori',
      link:
        'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0'
    },
    {
      title: 'Cartoon – On & On (feat. Daniel Levi) [NCS Release]',
      link:
        'https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0'
    }
  ];

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [2, 4, 6];

  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = false;

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

  onEnded(event) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.

    // example
    this.currentTrack = null;
  }

  logCurrentTrack() {
    this.advancedPlayer.audioPlayerService.getCurrentTrack().subscribe(track => {
      this.currentTrack = track;
    });
  }

  logCurrentTime() {
    this.advancedPlayer.audioPlayerService.getCurrentTime().subscribe(time => {
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
      this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
      this.counter = this.counter + 1;
    } else if (this.counter === 2) {
      this.msaapPlaylist3.map(track => {
        this.msaapPlaylist.push(track);
      });
      this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
      this.appendTracksToPlaylistDisable = true;
    }
  }





  // Start needed for demo purpose
  // Basic Player 1
  changeMsbapDisplayTitle1(event) {
    this.msbapDisplayTitle1 = event.checked;
  }

  changeMsbapDisplayVolumeControls1(event) {
    this.msbapDisplayVolumeControls1 = event.checked;
  }

  changeMsbapDisablePositionSlider1(event) {
    this.msbapDisablePositionSlider1 = event.checked;
  }

  // Basic Player 2
  changeMsbapDisplayTitle2(event) {
    this.msbapDisplayTitle2 = event.checked;
  }

  changeMsbapDisplayVolumeControls2(event) {
    this.msbapDisplayVolumeControls2 = event.checked;
  }

  changeMsbapDisablePositionSlider2(event) {
    this.msbapDisablePositionSlider2 = event.checked;
  }

  // Advanced Player
  changeMsaapDisplayTitle(event) {
    this.msaapDisplayTitle = event.checked;
  }

  changeMsaapDisplayPlayList(event) {
    this.msaapDisplayPlayList = event.checked;
  }

  changeMsaapDisplayVolumeControls(event) {
    this.msaapDisplayVolumeControls = event.checked;
  }

  changeMsaapDisablePositionSlider(event) {
    this.msaapDisablePositionSlider = event.checked;
  }
  // End needed for demo purpose
}
