
import { TestBed } from '@angular/core/testing';
import { SecondsToMinutesPipe } from './seconds-to-minutes';

describe('Pipe: Default', () => {
    let pipe: SecondsToMinutesPipe;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        pipe = new SecondsToMinutesPipe();
    });

    it('should transform 125 as 02:05', () => {
        expect(pipe.transform(125)).toBe('02:05');
    });

    it('should transform 3983 as 01:06:23', () => {
        expect(pipe.transform(3983)).toBe('01:06:23');
    });

    it('should transform 279 as 04:39', () => {
        expect(pipe.transform(279)).toBe('04:39');
    });

    it('should transform 227 as 03:47', () => {
        expect(pipe.transform(227)).toBe('03:47');
    });

});
