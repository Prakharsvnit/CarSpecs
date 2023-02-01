import { TextField, Autocomplete } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { VehicleCategories} from "../constants";
import { OptionType } from "../types";
import { useState } from "react";

const VehicleCategoryFilter = () => {
  const [vehicleCategory, setVehicleCategory] = useState("");
  
  const handleChange = (event: React.ChangeEvent<{}>, value: OptionType | null) => {
    if (value) {
      setVehicleCategory(value.Category);
    } else {
      setVehicleCategory('');
    }
  };
  return (
<Autocomplete
      sx={{ width: 300 }}
      options={VehicleCategories}
      getOptionLabel={(option) => option.Category}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          value={vehicleCategory}
          margin="normal"
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.Category, inputValue, {
          insideWords: true,
        });
        const parts = parse(option.Category, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span key={index}>{part.text}</span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
};

export default VehicleCategoryFilter;
