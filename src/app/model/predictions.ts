import {Data} from "./stops";

export interface Predictions {
  data: PredictionModel[]
}
export interface PredictionModel {
  attributes : Attributes
  id: string
  relationships : RelationShips
  type: string
}
export interface Attributes {
  arrival_time: string,
  departure_time: string,
  direction_id: number,
  schedule_relationship: null,
  status: null,
  stop_sequence: number
}
export interface RelationShips {
  route : Data
  stop: Data
  trip: Data
  vehicle: Data
}
