import axios from "axios";

axios.defaults.baseURL = "https://jaybee-haven.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
