
A library for loading and playing audio using HTML 5 for Angular 7/8/9/10/11/12.  
(https://mudigal-technologies.github.io/ngx-audio-player/)


[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg?colorB=orange)](https://mudigal-technologies.github.io/ngx-audio-player/) [![npm version](https://img.shields.io/npm/v/ngx-audio-player.svg?colorB=red)](https://www.npmjs.com/package/ngx-audio-player) [![Downloads](https://img.shields.io/npm/dm/ngx-audio-player.svg?colorB=48C9B0)](https://www.npmjs.com/package/ngx-audio-player) [![licence](https://img.shields.io/npm/l/ngx-audio-player.svg?colorB=yellow)](https://www.npmjs.com/package/ngx-audio-player) [![Support](https://img.shields.io/badge/support-Angular%207%2B-blue.svg)](https://www.npmjs.com/package/ngx-audio-player/v/7.2.0) [![Support](https://img.shields.io/badge/support-Angular%208+-brown.svg)](https://www.npmjs.com/package/ngx-audio-player/v/8.1.4) [![Support](https://img.shields.io/badge/support-Angular%209+-black.svg)](https://www.npmjs.com/package/ngx-audio-player/v/9.2.3) [![Support](https://img.shields.io/badge/support-Angular%2010+-teal.svg)](https://www.npmjs.com/package/ngx-audio-player/v/10.1.4) [![Support](https://img.shields.io/badge/support-Angular%2011+-grey.svg)](https://www.npmjs.com/package/ngx-audio-player/v/11.0.4) [![Support](https://img.shields.io/badge/support-Angular%2012+-indigo.svg)](https://www.npmjs.com/package/ngx-audio-player/v/12.0.0)

## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Versioning](#versioning)
- [Contributors](#contributors)
- [License](#license)

## Demo

A simple, clean, responsive player for playing multiple audios with playlist support.

![alt tag](https://github.com/mudigal-technologies/ngx-audio-player/blob/master/docs/images/advanced-player.png?raw=true)

[Working Demo](https://mudigal-technologies.github.io/ngx-audio-player/)

## Installation

`ngx-audio-player` is available via [npm](https://www.npmjs.com/package/ngx-audio-player) and [yarn](https://yarnpkg.com/en/package/ngx-audio-player)

Using npm:
```bash
$ npm install ngx-audio-player --save
```

Using yarn:
```bash
$ yarn add ngx-audio-player
```

## Getting Started

NgxAudioPlayerModule needs Angular Material.   
Make sure you have installed below dependencies with same or higher version than mentioned.   
   
"@angular/core": "^12.0.0"   
"@angular/common": "^12.0.0"   
"@angular/material": "^12.0.0"   
"rxjs": "^6.6.0"  
   
Import `NgxAudioPlayerModule` in the root module(`AppModule`):   
   
```typescript   
// Import library module
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  imports: [
    // ...
    NgxAudioPlayerModule
  ]
})
export class AppModule { }
```
   
### Usage 

#### Simple Audio Player
   
##### HTML   

```html
<ngx-audio-player [autoPlay]="false" muted="muted"
    
  [playlist]="mssapPlaylist"
  [disablePositionSlider]="mssapDisablePositionSlider"
  [displayRepeatControls]="mssapDisplayRepeatControls"
  [displayVolumeControls]="mssapDisplayVolumeControls"
  [displayVolumeSlider]="mssapDisplayVolumeSlider"

  [displayTitle]="mssapDisplayTitle"
  
  (trackEnded)="onEnded($event)">

</ngx-audio-player> 
```
   
##### TS   

```ts
import { Track } from 'ngx-audio-player';   
   
.   
.   

mssapDisplayTitle = true;
mssapDisablePositionSlider = true;
mssapDisplayRepeatControls = true;
mssapDisplayVolumeControls = true;
mssapDisplayVolumeSlider = false;
   
// Material Style Simple Audio Player
mssapPlaylist: Track[] = [
  {
    title: 'Audio Title',
    link: 'Link to Audio URL',
    artist: 'Audio Artist',
    duration: 'Audio Duration in seconds'
  }
];

// For Streaming Audio From URL 
// set mediaType = 'stream' 
mssapPlaylist: Track[] = [
  {
    title: 'Audio Title',
    link: 'Link to Streaming URL',
    mediaType: 'stream'
  }
];
```  

#### Advanced Audio Player
   
##### HTML   

```html
<ngx-audio-player [autoPlay]="false" muted="muted"

    [playlist]="msaapPlaylist"
    [disablePositionSlider]="msaapDisablePositionSlider"
    [displayRepeatControls]="msaapDisplayRepeatControls"
    [displayVolumeControls]="msaapDisplayVolumeControls"
    [displayVolumeSlider]="msaapDisplayVolumeSlider"
    
    [displayTitle]="msaapDisplayTitle"

    [displayPlaylist]="msaapDisplayPlayList"
    [pageSizeOptions]="msaapPageSizeOptions"

    [tableHeader]="msaapTableHeader"
    [titleHeader]="msaapTitleHeader"
    [artistHeader]="msaapArtistHeader"
    [durationHeader]="msaapDurationHeader"

    [displayArtist]="msaapDisplayArtist"
    [displayDuration]="msaapDisplayDuration"
    [expanded]="true"

    (trackPlaying)="onTrackPlaying($event)"
    (trackPaused)="onTrackPaused($event)"
    (trackEnded)="onEnded($event)"
    (nextTrackRequested)="onNextTrackRequested($event)"
    (previousTrackRequested)="onPreviousTrackRequested($event)"
    (trackSelected)="onTrackSelected($event)">

</ngx-audio-player>
```
   
##### TS   

```ts
import { Track } from 'ngx-audio-player';   
   
.   
.   

// Main Player Controls
msaapDisplayPlayList = true;
msaapDisablePositionSlider = true;
msaapDisplayRepeatControls = true;
msaapDisplayVolumeControls = true;
msaapDisplayVolumeSlider = false;

// Title Marquee
msaapDisplayTitle = true;

// Playlist Controls
msaapPageSizeOptions = [2,4,6];
msaapDisplayArtist = false;
msaapDisplayDuration = false;

// For Localisation
msaapTableHeader = 'My Playlist';
msaapTitleHeader = 'My Title';
msaapArtistHeader = 'My Artist';
msaapDurationHeader = 'My Duration';


// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
    {
        title: 'Audio One Title',
        link: 'Link to Audio One URL',
        artist: 'Artist',
        duration: 'Duration'
    },
    {
        title: 'Audio Two Title',
        link: 'Link to Audio Two URL',
        artist: 'Artist',
        duration: 'Duration'
    },
    {
        title: 'Audio Three Title',
        link: 'Link to Audio Three URL',
        artist: 'Artist',
        duration: 'Duration'
    },
];

// Callback Events

onTrackPlaying(event) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.
}


onTrackPaused(event) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.
}

onEnded(event) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.
}

onNextTrackRequested(event) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.
}


onPreviousTrackRequested(event) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.
}

onTrackSelected(event) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.
}
```   

##### Properties   

| Name                                                            | Description                                         | Type      | 
|-----------------------------------------------------------------|-----------------------------------------------------|-----------|
| @Input() playlist: Track[];                                     | playlist containing array of title and link         | mandatory |
| @Input() autoPlay: false;                                       | true - if the audio needs to be played automaticlly | optional  |
|  Player Controls                                                                                                                  |
| @Input() startOffset = 0;                                       | offset from start of audio file in seconds          | optional  |
| @Input() endOffset = 0;                                         | offset from end of audio file in seconds            | optional  |
| @Input() disablePositionSlider = false;                         | true - if the position slider needs to be disabled  | optional  |
| @Input() displayRepeatControls = true;                          | false - if the repeat controls needs to be hidden   | optional  |
| @Input() repeat: "all" | "one" | "none" = 'all';                | repeat all or one or none                           | optional  |
| @Input() displayVolumeControls = true;                          | false - if the volume controls needs to be hidden   | optional  |
| @Input() displayVolumeSlider = true;                            | true - if the volume slider should be shown         | optional  |
|  Title Marquee Control                                                                                                            |
| @Input() displayTitle: true;                                    | false - if the audio title needs to be hidden       | optional  |
|  Playlist Controls                                                                                                                |
| @Input() displayPlaylist: true;                                 | false - if the playlist needs to be hidden          | optional  |
| @Input() pageSizeOptions = [10, 20, 30];                        | number of items to be displayed in the playlist     | optional  |
| @Input() expanded = true;                                       | false - if the playlist needs to be minimized       | optional  |
| @Input() displayArtist = false;                                 | true - if the artist data is to be shown            | optional  |
| @Input() displayDuration = false;                               | true - if the track duration is to be shown         | optional  |
|  Localisation Controls                                                                                                            |
| @Input() tableHeader = 'Playlist';                              | localised string                                    | optional  |
| @Input() titleHeader = 'Title';                                 | localised string                                    | optional  |
| @Input() artistHeader = 'Artist';                               | localised string                                    | optional  |
| @Input() durationHeader = 'Duration';                           | localised string                                    | optional  |
|  Callback Events                                                                                                                  |
| @Output() trackPlaying: EventEmitter<EventResponse>             | triggers when the track starts playing              | optional  |
| @Output() trackPaused: EventEmitter<EventResponse>              | Callback method that triggers once the track ends   | optional  |
| @Output() trackEnded: EventEmitter<EventResponse>               | Callback method that triggers once the track ends   | optional  |
| @Output() nextTrackRequested: EventEmitter<EventResponse>       | Callback method that triggers once the track ends   | optional  |
| @Output() previousTrackRequested: EventEmitter<EventResponse>   | Callback method that triggers once the track ends   | optional  |
| @Output() trackSelected: EventEmitter<EventResponse>            | Callback method that triggers once the track ends   | optional  |
 

## Versioning

ngx-audio-player will be maintained under the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Contributors ✨   

Thanks goes to these wonderful people:   

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->   

<table align="center">
    <tr>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/EdricChan03" target="_blank">
                <img alt="" src="https://avatars.githubusercontent.com/u/20047125?v=4" width="100px;" />
                <br /><sub><b>Edric Chan</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=EdricChan03"
                title="Code">💻</a>
        </td>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RokiFoki" target="_blank">
                <img alt="" src="https://avatars3.githubusercontent.com/u/9476596?v=4" width="100px;" />
                <br /><sub><b>RokiFoki</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=RokiFoki"
                title="Code">💻</a>
        </td>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ewwwgiddings" target="_blank">
                <img alt="" src="https://avatars.githubusercontent.com/u/26286559?v=4" width="100px;" />
                <br /><sub><b>ewwwgiddings</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=ewwwgiddings"
                title="Documentation">📖</a>
        </td>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/cicsolutions">
                <img alt="" src="https://avatars1.githubusercontent.com/u/5200361?v=4" width="100px;" />
                <br /><sub><b>Caleb Crosby</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=cicsolutions"
                title="Code">💻
            </a>
        </td>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/6utt3rfly">
                <img alt="" src="https://avatars1.githubusercontent.com/u/17912877?v=4" width="100px;" />
                <br /><sub><b>Shelly</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=6utt3rfly"
                title="Code">💻
            </a>
        </td>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Urinprobe">
                <img alt="" src="https://avatars1.githubusercontent.com/u/22059384?v=4" width="100px;" />
                <br /><sub><b>Simon Reinsch</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=Urinprobe"
                title="Code">💻
            </a>
        </td>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AnwarTuha">
                <img alt="" src="https://avatars.githubusercontent.com/u/28872106?v=4" width="100px;" />
                <br /><sub><b>AnwarTuha</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=AnwarTuha"
                title="Code">💻
            </a>
        </td>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bogdanbaghiu">
                <img alt="" src="https://avatars.githubusercontent.com/u/37840937?v=4" width="100px;" />
                <br /><sub><b>Bogdan Baghiu</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=bogdanbaghiu"
                title="Code">💻
            </a>
        </td>
        <td align="center">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/kareemjeiroudi">
                <img alt="" src="https://avatars.githubusercontent.com/u/39561669?v=4" width="100px;" />
                <br /><sub><b>Kareem Jeiroudi</b></sub>
            </a><br />
            <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/mudigal-technologies/ngx-audio-player/commits?author=kareemjeiroudi"
                title="Code">💻
            </a>
        </td>
    </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Misc


## License

##### The MIT License (MIT)

## Donate

If you like my work you can buy me a :beer: or :pizza:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/mudigal)
