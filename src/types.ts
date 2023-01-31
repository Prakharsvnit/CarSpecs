export interface VehiclesInterface {
  id: number;
  make: string;
  model: string;
  modelVersion: string;
  color: string;
  weight: null;
  registrationNumber: string;
  numberOfDoors: number;
  constructionDate: string;
  bodyType: string;
  gearBox: string;
}

export type Vehicles = VehiclesInterface[] | VehiclesInterface 