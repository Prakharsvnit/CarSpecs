import { TextField, Autocomplete } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { VehicleCategories} from "../constants";
import { useState } from "react";

const VehicleCategoryFilter = ({fetchCategory}: {fetchCategory: (vehicleCategory: string) => void}) => {

  const [vehicleCategory,setVehicleCategory] = useState<string>('')

  const handleChange = (event: React.SyntheticEvent<Element,Event>, value: {Category : string} | null) => {
    if (value) {
      setVehicleCategory(value.Category)
      fetchCategory(value.Category)
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
