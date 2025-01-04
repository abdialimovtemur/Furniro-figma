/** @format */

import axios from "axios";


const baseUrl = import.meta.env.VITE_BASE_URL;

export const useAxios = () => {
  async function getData(path) {
    return await axios.get(`${baseUrl}/${path}`).then(res=>res.data);
  }
  return { getData };
};
