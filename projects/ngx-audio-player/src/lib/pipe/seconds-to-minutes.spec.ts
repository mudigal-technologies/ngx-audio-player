
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

});
