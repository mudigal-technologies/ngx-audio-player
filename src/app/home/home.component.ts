import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Mechanical Sundariye';
  msbapAudioUrl = 'https://funksyou.com/fileDownload/Songs/128/30306.mp3';

  msbapDisplayTitle = false;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Naalo Chilipi Kala',
      link: 'http://sensongsmp3.co.in/mp3/2018/Lover%20(2018)/Naalo%20Chilipi%20Kala%20(Theme%20Song)%20-%20SenSongsMp3.Co.mp3'
    },
    {
      title: 'Rakshassi',
      link: 'https://funksyou.com/fileDownload/Songs/128/30307.mp3'
    },
    {
      title: 'Mechanical Sundariye',
      link: 'https://funksyou.com/fileDownload/Songs/128/30306.mp3'
    },
  ];

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;

  constructor() { }

  changeMsbapDisplayTitle(event) {
    this.msbapDisplayTitle = event.checked;
  }

  changeMsaapDisplayTitle(event) {
    this.msaapDisplayTitle = event.checked;
  }

  changeMsaapDisplayPlayList(event) {
    this.msaapDisplayPlayList = event.checked;
  }

}
