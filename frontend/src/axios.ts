import axios from "axios";

axios.defaults.baseURL = "https://jaybee-haven.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
