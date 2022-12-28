import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StopsService} from "../../services/stops/stops.service";
import {RoutesService} from "../../services/routes/routes.service";
import {PredictionsService} from "../../services/predictions/predictions.service";

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent {
  route_id : string = ''
  direction_id : string = ''
  stop_id: string = ''
  prediction!: any;
  currentDate = new Date()
  constructor(private activatedRoute: ActivatedRoute, private stopsService: StopsService, private routesService: RoutesService,
             private predictionsService: PredictionsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.route_id = params['route_id'];
      this.stop_id = params['stop_id'];
      this.direction_id = params['direction_id'];
    });
    this.getPredictions()
  }

  getPredictions(){
    this.predictionsService.getPredictions(this.route_id, this.stop_id, this.direction_id).subscribe(
      res => {
        if (res.data.length !== 0){
          // @ts-ignore
          this.prediction = res.data.filter( (prediction) => {
            let date = prediction.attributes.departure_time.split('T');
            const test = [date[0], ...date[1].split("-")];
            // @ts-ignore
            let dat = new Date(test[0].split("-")[0],(test[0].split("-")[1]-1), test[0].split("-")[2], test[1].split(":")[0],test[1].split(":")[1], test[1].split(":")[2] );
            if(dat > new Date()){
              return({...prediction, departure_time: dat });
            }
          });
        }
      }
    )
  }
}
