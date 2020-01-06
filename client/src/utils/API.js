import axios from "axios";

export default {
  
  getAuth: function(email,password) {
    console.log(email, password)
    return axios.get("/api/auth/" + email + "/" + password);
    // return axios.get("/api/auth/",{ email: email, password: password });
  },
  
  saveAuth: function(authData) {
    console.log("authData", authData)
    return axios.post("/api/auth", authData);
  }
};
