import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5dcc24fc28e97ed99c5574901edd41a7aae79a5f2ebedabcfd95bdc12464b1bb"
  }
});
