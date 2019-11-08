import { Track } from './track.model';

const fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';
export const mockTrack1: Track = new Track();
mockTrack1.link = `${fmaBaseUrl}/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3`;
mockTrack1.title = 'Night Owl (by Broke For Free)';

export const mockPlaylist: Track[] = [
  {
    title: '1400 (by Yung Kartz)',
    link: `${fmaBaseUrl}/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3`
  },
  {
    title: 'Epic Song (by BoxCat Games)',
    link: `${fmaBaseUrl}/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3`
  },
  {
    title: 'Hachiko (The Faithful Dog) (by The Kyoto)',
    link: `${fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`
  },
  {
    title: 'Starling (by Podington Bear)',
    link: `${fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`
  },
];
