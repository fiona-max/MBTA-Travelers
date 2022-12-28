import { Component } from '@angular/core';
import {RoutesService} from "../../services/routes/routes.service";
import {RoutesModel} from "../../model/routes";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
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
