import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StopsComponent} from "./pages/stops/stops.component";
import {PredictionsComponent} from "./pages/predictions/predictions.component";
import {RoutesComponent} from "./pages/routes/routes.component";

const routes: Routes = [
  { path: '', component:RoutesComponent },
  { path: 'stops/:route_id', component:StopsComponent },
  { path: 'predictions/:stop_id/:route_id/:direction_id', component:PredictionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
