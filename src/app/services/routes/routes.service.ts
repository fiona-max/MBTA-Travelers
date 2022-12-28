import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RouteModel, RoutesModel} from "../../model/routes";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http: HttpClient) { }

  getRoutes(): Observable<RoutesModel> {
    return this.http.get<RoutesModel>(
      `https://api-v3.mbta.com/routes?sort=-direction_destinations&filter%5Btype%5D=0%2C1`
    );
  }
  getRoute(route_id: string): Observable<RouteModel> {
    return this.http.get<RouteModel>(
      `https://api-v3.mbta.com/routes/${route_id}`
    )
  }
}
