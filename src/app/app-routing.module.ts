import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import {StopsComponent} from "./pages/stops/stops.component";

const routes: Routes = [
  { path: '', component:IntroComponent },
  { path: 'stops/:route_id', component:StopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
