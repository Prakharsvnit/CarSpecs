import { Card, CardContent, Typography } from "@mui/material";
import "../scss/Vehicle.scss";
import { VehiclesCard } from "../types";

const VehicleCard = (props: VehiclesCard) => {
  const { vehicles } = props;

  return (
    <Card className="card-container" variant="outlined">
      {vehicles.map((vehicle) => (
        <CardContent className="card-content" key={vehicle.id}>
          <Typography align="center" sx={{ fontWeight: "bold" }} variant="h5" gutterBottom>
            Vehicle Info
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Make: {vehicle.make}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Color: {vehicle.color}
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom>
            Model: {vehicle.model}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Version: {vehicle.modelVersion}
          </Typography>
        </CardContent>
      ))}
    </Card>
  );
};

export default VehicleCard;
