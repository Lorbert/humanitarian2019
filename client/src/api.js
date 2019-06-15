import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:8000/api/v1/instagram_posts"
  // withCredentials: true
});

const errHandler = err => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  //   isLoggedIn() {
  //     return localStorage.getItem('user') != null
  //   },

  getInfos() {
    return service
      .get("/")
      .then(res => {
        return res.data;
      })
      .catch(errHandler);
  }

  // personal applicated misson

  // addPicture(file) {
  //   const formData = new FormData()
  //   formData.append("picture", file)
  //   return service
  //     .post('/endpoint/to/add/a/picture', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then(res => res.data)
  //     .catch(errHandler)
  // },
};
