import { useLayoutEffect } from "react";
import axios from "axios";

function useNetworking() {
  useLayoutEffect(() => {
    axios.defaults.baseURL = process.env.BASE_URL;
  }, []);
}

export default useNetworking;
