import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatIconModule, MatRadioModule, MatCheckboxModule, MatSlideToggleModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { GettingStartedComponent } from './gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'guide/getting-started', component: GettingStartedComponent, data: { title: 'Getting Started' } },
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, GettingStartedComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, FontAwesomeModule,
    MatCardModule, MatToolbarModule, MatIconModule, MatRadioModule, MatCheckboxModule, MatSlideToggleModule,
    BrowserAnimationsModule, ShareButtonsModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn);
  }
}
