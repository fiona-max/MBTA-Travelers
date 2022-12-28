import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Predictions} from "../../model/predictions";

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  constructor(private http: HttpClient) { }

  getPredictions(route_id: string, stop_id: string, direction_id: string): Observable<Predictions> {
    return this.http.get<Predictions>(
      `https://api-v3.mbta.com/predictions?page%5Blimit%5D=3&sort=departure_time&filter%5Bdirection_id%5D=${direction_id}&filter%5Bstop%5D=${stop_id}&filter%5Broute%5D=${route_id}`
    );
  }
}
