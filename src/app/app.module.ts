import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { StopsComponent } from './pages/stops/stops.component';
import { PredictionsComponent } from './pages/predictions/predictions.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StopsComponent,
    PredictionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
