import {Links} from "./routes";

export interface Stops {
  data : StopsObject[]
}

export interface StopsObject {
  attributes : Attributes
  id : string
  links: Links
  relationships: Relationships
  parent_station: Parent_station
  zone: Zone
  type: string
}
export interface Attributes {
  address: string,
  at_street: null,
  description: null,
  latitude: number,
  location_type: number,
  longitude: number,
  municipality: string,
  name: string,
  on_street: null,
  platform_code: null,
  platform_name: null,
  vehicle_type: null,
  wheelchair_boarding: number
}
export interface Relationships {
  facilities: Facilities
}
export interface Facilities {
  links : StopsLinks
}
export interface StopsLinks {
  related: string
}
export interface Parent_station {
  data : null
}
export interface Zone {
  data : Data
}
export interface Data {
  id : string
  type: string
}
