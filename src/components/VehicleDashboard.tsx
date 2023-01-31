import { Container } from '@mui/material'
import "../scss/Vehicle.scss";
import { useState,useEffect } from 'react'
import  VehicleCard  from './VehicleCard'
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
    <Container maxWidth="xl">
        <VehicleCard vehicles={vehicles} />
    </Container>
  )
}

export default VehicleDashboard