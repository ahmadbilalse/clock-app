import axios from "axios";
import { useEffect, useState } from "react";

const useGeoInfo = () => {
  const [geoData, setGeoData] = useState();

  const fetchGeo = async () => {
    const result = await axios('https://ipwhois.app/json/');
    setGeoData(result.data);
  }

  useEffect(() => {
    fetchGeo();
  }, [])

  return geoData;
}

export default useGeoInfo;