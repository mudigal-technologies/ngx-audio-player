import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicAudioPlayerComponent } from './mat-basic-audio-player.component';

describe('MatBasicAudioPlayerComponent', () => {
  let component: MatBasicAudioPlayerComponent;
  let fixture: ComponentFixture<MatBasicAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatBasicAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBasicAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
