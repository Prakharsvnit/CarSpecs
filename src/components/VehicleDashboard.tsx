import { useState,useEffect } from 'react'
import VehicleApicall from "../VehicleApiCall"
import {baseURL} from "../constants"
import {Vehicles} from "../types"

const VehicleDashboard = () => {

    const [vehicles, setVehicles] = useState<Vehicles[]>([])
    
    const fetchVehicles = async () => {
        const response = await VehicleApicall(baseURL, "");
        setVehicles(response.data);
      };
      
      useEffect(() => {
        fetchVehicles();
      }, []);
    
  return (
    <></>
  )
}

export default VehicleDashboard