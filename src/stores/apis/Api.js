import axios from "axios";
import { API_ROOT } from "../Constant";
import { setResultSearch, setListSubject } from "../reducers/Subject";

export const getSubjectApi = async (id, dispatch) => {
  try {
    const res = await axios.get(`${API_ROOT}/api/search/major/${id}`);
    if (res.status === 200 && res.data) {
      dispatch(setListSubject(res.data));
      return res.data;
    }
    console.error(`Unexpected response status: ${res.status}`);
    return false;
  } catch (error) {
    console.error("Error fetching subject by ID:", error.message || error);
    return false;
  }
};

export const SearchSubjectApi = async (name, dispatch) => {
  try {
    const res = await axios.get(`${API_ROOT}/api/search/keyword/${name}`);
    if (res.status === 200 && res.data) {
      dispatch(setResultSearch(res.data));
      return res.data;
    }
    console.error(`Unexpected response status: ${res.status}`);
    return false;
  } catch (error) {
    console.error("Error fetching subject by code:", error.message || error);
    return false;
  }
};
