import axios from "axios";

const axiosInstance = axios.create({
  //for local server firebase function
  // baseURL: "http://127.0.0.1:5001/clone-f442e/us-central1/api",
  // deployed version of amazon server in render.com
  baseURL: "https://amazon-backend-mx0l.onrender.com/",
});
export { axiosInstance };
