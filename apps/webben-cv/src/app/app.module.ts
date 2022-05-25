import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionItemComponent } from './section-item/section-item.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './duration.pipe';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { TimelineComponent } from './cv-page/timeline/timeline.component';
import { NameState } from './app.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SectionItemComponent,
    FilterPipe,
    DurationPipe,
    HeaderComponent,
    CvPageComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([NameState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule.forRoot([
      { path: '**', component: CvPageComponent },
      { path: 'cv', component: CvPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
