import axios from "axios";

const VehicalApiCall = async (endpoint: string, queryParams?: string) => {
  let url = endpoint;
  if (queryParams) {
    url = url + queryParams;
  }

  const response = await axios.get(url);
  return response;
};

export default VehicalApiCall;

