# Angular Audio Player

A library for loading and playing audio using HTML 5 for Angular 7 or Angular 8.  
(https://vmudigal.github.io/ngx-audio-player/)

[![Travis-CI](https://travis-ci.com/vmudigal/ngx-audio-player.svg?branch=master)](https://travis-ci.com/vmudigal/ngx-audio-player.svg?branch=master) [![npm](https://img.shields.io/badge/demo-online-ed1c46.svg?colorB=orange)](https://vmudigal.github.io/ngx-audio-player/) [![npm version](https://img.shields.io/npm/v/ngx-audio-player.svg?colorB=red)](https://www.npmjs.com/package/ngx-audio-player) [![Downloads](https://img.shields.io/npm/dm/ngx-audio-player.svg?colorB=48C9B0)](https://www.npmjs.com/package/ngx-audio-player) [![licence](https://img.shields.io/npm/l/ngx-audio-player.svg?colorB=yellow)](https://www.npmjs.com/package/ngx-audio-player) [![Support](https://img.shields.io/badge/support-Angular%207%2B-blue.svg)](https://www.npmjs.com/package/ngx-audio-player/v/7.1.5) [![Support](https://img.shields.io/badge/support-Angular%208+-brown.svg)](https://www.npmjs.com/package/ngx-audio-player/v/8.0.1)

## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Versioning](#versioning)
- [Developer](#developer)
- [License](#license)

## Demo

### Basic Player 

A simple, clean, responsive player for playing single audio with or without title.

![alt tag](https://github.com/vmudigal/ngx-audio-player/blob/master/docs/images/basic-player.png?raw=true)

### Advanced Player 

A simple, clean, responsive player for playing multiple audios with playlist support.

![alt tag](https://github.com/vmudigal/ngx-audio-player/blob/master/docs/images/advanced-player.png?raw=true)

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

"@angular/material": "^8.0.0",
"@fortawesome/angular-fontawesome": "^0.4.0",
"@fortawesome/fontawesome-svg-core": "^1.2.19",
"@fortawesome/free-solid-svg-icons": "^5.9.0"  
   
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

```html
<mat-basic-audio-player [audioUrl]="msbapAudioUrl" [title]="msbapTitle" [autoPlay]="false" muted="muted"
    [displayTitle]="msbapDisplayTitle" [displayVolumeControls]="msaapDisplayVolumeControls" ></mat-basic-audio-player>
```
   
##### TS   

```ts
// Material Style Basic Audio Player Title and Audio URL
msbapTitle = 'Audio Title';
msbapAudioUrl = 'Link to audio URL';   
   
msbapDisplayTitle = false; 
msbapDisplayVolumeControls = true;  
```   

##### Properties   

| Name                                       | Description                                         | Type      | Default Value |
|--------------------------------------------|-----------------------------------------------------|-----------|---------------|
| @Input() title: string;                    | title to be displayed                               | optional  | none          |
| @Input() audioUrl: string;                 | url of the audio                                    | mandatory | none          |
| @Input() autoPlay: false;                  | true - if the audio needs to be played automaticlly | optional  | false         |
| @Input() displayTitle = false;             | true - if the audio title needs to be displayed     | optional  | false         |
| @Input() displayVolumeControls = true;     | false - if the volume controls needs to be hidden   | optional  | true          |
   

#### Material Style Advanced Audio Player   
   
##### HTML   

```html
<mat-advanced-audio-player [playlist]="msaapPlaylist" [displayTitle]="msaapDisplayTitle" [autoPlay]="false" 
    muted="muted" [displayPlaylist]="msaapDisplayPlayList" [pageSizeOptions]="pageSizeOptions" 
        [displayVolumeControls]="msaapDisplayVolumeControls" [expanded]="true"></mat-advanced-audio-player> 
```
   
##### TS   

```ts
import { Track } from 'ngx-audio-player';   
   
.   
.   

msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
   
// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Audio One Title',
    link: 'Link to Audio One URL'
  },
  {
    title: 'Audio Two Title',
    link: 'Link to Audio Two URL'
  },
  {
    title: 'Audio Three Title',
    link: 'Link to Audio Three URL'
  },
];
```   

##### Properties   

| Name                                       | Description                                         | Type      | Default Value |
|--------------------------------------------|-----------------------------------------------------|-----------|---------------|
| @Input() playlist: Track[];                | playlist containing array of title and link         | mandatory | None           |
| @Input() autoPlay: false;                  | true - if the audio needs to be played automaticlly | optional  | false          |
| @Input() displayTitle: true;               | false - if the audio title needs to be hidden       | optional  | true           |
| @Input() displayPlaylist: true;            | false - if the playlist needs to be hidden          | optional  | true           |
| @Input() pageSizeOptions = [10, 20, 30];   | number of items to be displayed in the playlist     | optional  | [10,20,30]     |
| @Input() expanded = true;                  | false - if the playlist needs to be minimized       | optional  | true           |
| @Input() displayVolumeControls = true;     | false - if the volume controls needs to be hidden   | optional  | true           |
   

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

#
# Donate

If you like my work you can buy me a :beer: or :pizza:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/mudigal)
