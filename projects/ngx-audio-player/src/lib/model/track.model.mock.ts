import { Track } from './track.model';

export const mockTrack1: Track = new Track();
mockTrack1.link = 'https://www.dropbox.com/s/q1qaf8vn2dv48nw/Punjab.mp3?dl=1';
mockTrack1.title = 'Punjab';

export const mockPlaylist: Track[] = [
    {
        title: 'Mechanical Sundariye',
        link: 'https://www.dropbox.com/s/2t968nilfzbxflv/Mechanical%20Sundariye.mp3?dl=1'
    },
    {
        title: 'Vishnu',
        link: 'https://www.dropbox.com/s/uxtnltcjk31k7nz/Vishnu.mp3?dl=1'
    },
    {
        title: 'Punjab',
        link: 'https://www.dropbox.com/s/q1qaf8vn2dv48nw/Punjab.mp3?dl=1'
    }
];