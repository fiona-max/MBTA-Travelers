import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stops} from "../../model/stops";
import {Observable} from "rxjs";
import {RoutesModel} from "../../model/routes";

@Injectable({
  providedIn: 'root'
})
export class StopsService {

  constructor(private http: HttpClient) { }

  getStops(routeId: string): Observable<Stops>{
    return this.http.get<Stops>(
      `https://api-v3.mbta.com/stops?filter%5Broute%5D=${routeId}`
    );
  }
}
