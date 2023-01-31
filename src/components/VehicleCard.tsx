import { Card, CardContent, Typography } from "@mui/material";
import "../scss/VehicleCard.scss"

const VehicleCard = () => {
  return (
  
    <Card className="card-container" variant="outlined">
      <CardContent className="card-content">
      <Typography align="center" variant="h5" gutterBottom>
          Vehicle Info
        </Typography>
        <Typography  variant="h6" component="h2"  gutterBottom>
          Make:
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Color:
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Model
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Version:
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
