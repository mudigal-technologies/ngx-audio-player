import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Punjab';
  msbapAudioUrl = 'https://www.dropbox.com/s/q1qaf8vn2dv48nw/Punjab.mp3?dl=1';

  msbapDisplayTitle = false;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Mechanical Sundariye',
      link: 'https://www.dropbox.com/s/2t968nilfzbxflv/Mechanical%20Sundariye.mp3?dl=1'
    },
    {
      title: 'Vishnu',
      link: 'https://www.dropbox.com/s/uxtnltcjk31k7nz/Vishnu.mp3?dl=1'
    },
    {
      title: 'Naalo Chilipi Kala',
      link: 'http://sensongsmp3.co.in/mp3/2018/Lover%20(2018)/Naalo%20Chilipi%20Kala%20(Theme%20Song)%20-%20SenSongsMp3.Co.mp3'
    },
    {
      title: 'Punjab',
      link: 'https://www.dropbox.com/s/q1qaf8vn2dv48nw/Punjab.mp3?dl=1'
    },
  ];

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [2,4,6]

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
