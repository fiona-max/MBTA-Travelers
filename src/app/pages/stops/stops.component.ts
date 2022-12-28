import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Stops} from "../../model/stops";
import {StopsService} from "../../services/stops/stops.service";
import {RoutesService} from "../../services/routes/routes.service";
import {RouteModel, RoutesModel} from "../../model/routes";

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent {
  route_ID : string = ""
  stopsObject! : Stops
  direction_names: string[] = []
  route!: RouteModel

  constructor(private activatedRoute: ActivatedRoute, private stopsService: StopsService, private routesService: RoutesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.route_ID = params['route_id'];
    });
    this.getStops()
    this.getRoute()
  }

  getStops(){
    this.stopsService.getStops(this.route_ID).subscribe(
      res => {
        this.stopsObject = res
        console.log(res)
      }
    )
  }
  getRoute(){
    this.routesService.getRoute(this.route_ID).subscribe(
      res => {
        this.route = res
        this.direction_names = res.data.attributes.direction_names
        console.log(this.direction_names)
      }
    )
  }
}
