import axios from "axios";

export default {
  
  getAuth: function(email,password) {
    console.log("i am inside the api.js file",email, password)
    // return axios.get("/api/auth/", {params: {email:email,  password:password}});
    // return axios.get("/api/auth/",{ email: email, password: password });
     return axios.get("/api/auth/" + email + "/" + password  );

  },
  
  saveAuth: function(authData) {
    console.log("authData", authData)
    return axios.post("/api/auth", authData);
  }
};
