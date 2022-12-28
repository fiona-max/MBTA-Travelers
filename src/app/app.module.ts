import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StopsComponent } from './pages/stops/stops.component';
import { PredictionsComponent } from './pages/predictions/predictions.component';
import { RoutesComponent } from './pages/routes/routes.component';
import {IntroComponent} from "./component/intro/intro.component";


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StopsComponent,
    PredictionsComponent,
    RoutesComponent
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
