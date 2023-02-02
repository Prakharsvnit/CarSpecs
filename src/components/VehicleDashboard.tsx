import { useCallback } from "react";
import { Container, Pagination } from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";
import VehicleCard from "./VehicleCard";
import VehicleCategoryFilter from "./VehicleCategoryFilter";
import VehicleApicall from "../VehicleApiCall";
import { baseURL } from "../constants";
import { Vehicles } from "../types";

const VehicleDashboard = () => {
  const [vehicles, setVehicles] = useState<Vehicles[]>([]);
  const [page, setPage] = useState<number>(1);
  const [vehicleCategory, setVehicleCategory] = useState<string | null>("")

  const fetchCategory = (vehicleCategory:string | null) => {
    setVehicleCategory(vehicleCategory)
  }

  //type for onChange event is given here https://mui.com/material-ui/api/pagination/
  const handlePageChange = (event:ChangeEvent<unknown>,page:number) => {
    setPage(page);
    };

  const fetchCategoryVehicles = useCallback(async() =>  {
    const queryParams = `MakeCategory=${vehicleCategory}`
    const response = await VehicleApicall(baseURL, queryParams)
    setVehicles(response.data)
  },[vehicleCategory])
  
  const fetchPaginationVehicles = useCallback(async() => {
    const queryParams = `PageNumber=${page}`
    const response = await VehicleApicall(baseURL,queryParams)
    setVehicles(response.data)
  },[page])

  useEffect(() => {
    fetchPaginationVehicles();
  },[fetchPaginationVehicles])

  useEffect(() => {
    fetchCategoryVehicles();
  },[fetchCategoryVehicles])

  return (
    <>
      <Container maxWidth="xl">
        <VehicleCategoryFilter fetchCategory={fetchCategory}/>
        <VehicleCard vehicles={vehicles} />
        <Pagination sx={{justifyContent:'center',alignItems:'center',display:'flex'}} page={page} count={10} boundaryCount={10} color="primary" size="large" defaultPage={1} onChange={handlePageChange} />
      </Container>
    </>
  );
};

export default VehicleDashboard;
