import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDarkAudioPlayerComponent } from './mat-dark-audio-player.component';

describe('MatDarkAudioPlayerComponent', () => {
  let component: MatDarkAudioPlayerComponent;
  let fixture: ComponentFixture<MatDarkAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDarkAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDarkAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
