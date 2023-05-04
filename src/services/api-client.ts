import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bda4499b4a734789aa525c9cc967dff7",
  },
});
