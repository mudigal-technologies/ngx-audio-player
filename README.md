# Angular Audio Player

A library for loading playing audio using HTML 5 audio specifically for Angular 7. (https://vmudigal.github.io/ngx-audio-player/)

## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Versioning](#versioning)
- [Developer](#developer)
- [License](#license)

## Demo

[Working Demo](https://vmudigal.github.io/ngx-audio-player/)

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

NgxAudioPlayerModule needs Angular Material and FontAwesome 5+.   
Make sure you have installed below dependencies with same or higher version than mentioned.   

"@angular/material": "^7.2.0"   
"@fortawesome/angular-fontawesome": "^0.3.0"   
"@fortawesome/fontawesome-svg-core": "^1.2.12"   
"@fortawesome/free-solid-svg-icons": "^5.6.3"   
   
Import `NgxAudioPlayerModule` in  in the root module(`AppModule`):   
   
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

#### Material Style Basic Audio Player   
   
##### HTML   
#
```html
<mat-basic-audio-player [audioUrl]="msbapAudioUrl" [title]="msbapTitle" [displayTitle]="msbapDisplayTitle"></mat-basic-audio-player>
```
   
##### TS   
#
```ts
// Material Style Basic Audio Player Title and Audio URL
msbapTitle = 'Mechanical Sundariye';
msbapAudioUrl = 'https://funksyou.com/fileDownload/Songs/128/30306.mp3';   
   
msbapDisplayTitle = false;   
```
##### Properties   
#
#
| Name                           | Description                                     | Type      | Default Value |
|--------------------------------|-------------------------------------------------|-----------|------------|
| @Input() title: string;        | title to be displayed                           | optional  | none       |
| @Input() audioUrl: string;     | url of the audio                                | mandatory | none       |
| @Input() displayTitle = false; | true - if the audio title needs to be displayed | optional  | false      |
   
#
#### Material Style Advanced Audio Player   
   
##### HTML   
#
```html
<mat-advanced-audio-player [playlist]="msaapPlaylist" [displayTitle]="msaapDisplayTitle" [displayPlaylist]="msaapDisplayPlayList"></mat-advanced-audio-player>   
```
   
##### TS   
#
```ts
import { Track } from 'ngx-audio-player';   
   
.   
.   

msaapDisplayTitle = true;
msaapDisplayPlayList = true;
   
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
```   
##### Properties   
#
#
| Name                            | Description                                   | Type      | Default Value |
|---------------------------------|-----------------------------------------------|-----------|-------------|
| @Input() playlist: Track[];     | playlist containing array of title and link   | mandatory | None        |
| @Input() displayTitle: true;    | false - if the audio title needs to be hidden | optional  | true        |
| @Input() displayPlaylist: true; | false - if the playlist needs to be hidden    | optional  | true        |
   
#
## Versioning

ngx-audio-player will be maintained under the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Developer

##### [Vijayendra Mudigal](mailto:vijayendrap@gmail.com)
- [Profile](http://vijayendra.mudigal.com)
- [GitHub](https://github.com/vmudigal)
- [Linkedin](https://www.linkedin.com/in/vijayendra)

## License

##### The MIT License (MIT)