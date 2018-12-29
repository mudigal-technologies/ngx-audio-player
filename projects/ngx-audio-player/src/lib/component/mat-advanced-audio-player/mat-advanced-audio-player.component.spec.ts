import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAdvancedAudioPlayerComponent } from './mat-advanced-audio-player.component';

describe('MatAdvancedAudioPlayerComponent', () => {
  let component: MatAdvancedAudioPlayerComponent;
  let fixture: ComponentFixture<MatAdvancedAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAdvancedAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAdvancedAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
