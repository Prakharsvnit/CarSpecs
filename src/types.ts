export interface Vehicles {
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

export interface VehiclesCard {
  vehicles: Vehicles[]
}

export interface fetchCategory {
  (vehicleCategory: string) : void;
}