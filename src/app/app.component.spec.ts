import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material';
import { ShareButtonsModule } from '@ngx-share/buttons';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule, MatToolbarModule, ShareButtonsModule
      ],
      providers: []
    }).compileComponents();
  }));
  it('should create the ngx-audio-player-demo', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have title as 'ngx-audio-player-demo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngx-audio-player-demo');
  }));
});
