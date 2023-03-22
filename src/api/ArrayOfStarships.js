import { useEffect, useState } from "react";
import axios from "axios";
import { APIEndpoints } from "./APIEndpoints";

export default function ArrayOfStarships() {
  const [starshipArray, setStarshipArray] = useState();

  const getStarshipsData = async () => {
    const response = await axios
      .get(APIEndpoints.starshipsList)
      .then((res) => res.data.results);
    setStarshipArray(response);
  };

  useEffect(() => {
    getStarshipsData();
  }, []);

  return starshipArray;
}
