import { Component } from '@angular/core';
import {RoutesModel} from "../../model/routes";
import {RoutesService} from "../../services/routes/routes.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
  routesArray!: RoutesModel;


  constructor(private routesService: RoutesService) { }

  ngOnInit(): void {
    this.getRoute()
  }

  getRoute(){
    this.routesService.getRoutes().subscribe(
      res => {
        this.routesArray = res
        console.log(res)
      }
    )
  }
}
