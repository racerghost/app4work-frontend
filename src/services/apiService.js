import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://app4work-backend.herokuapp.com",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      "Access-Control-Allow-Credentials": true,
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");
      
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  verify = () => {
    return this.api.get("/auth/verify");
  };

  loginUser = ({ email, password }) => {
    return this.api.post("/auth/loginUser", { email, password });
  };

  loginCompany = ({ email, password }) => {
    return this.api.post("/auth/loginCompany", { email, password });
  };

  signupUser = ({
    email,
    password,
    username,
    fname,
    surname,
    birth,
    gender,
    location,
    workArea,
    specificArea,
    salary,
  }) => {
    return this.api.post("/auth/signupUser", {
      email,
      password,
      username,
      fname,
      surname,
      birth,
      gender,
      location,
      workArea,
      specificArea,
      salary,
    });
  };

  signupCompany = ({
    email,
    password,
    username,
    name,
    location,
    workArea,
    size,
  }) => {
    return this.api.post("/auth/signupCompany", {
      email,
      password,
      username,
      name,
      location,
      workArea,
      size,
    });
  };

  addOffer = ({
    companyId,
    workArea,
    specificArea,
    salary,
    active,
    title,
    description,
  }) => {
    return this.api.post("/offer", {
      workArea,
      specificArea,
      salary,
      active,
      title,
      description,
    });
  };
  getOffersByCompany = (id) => {
    return this.api.get(`/offer/${id}`);
  };

  getOffersApplications = (id) => {
    return this.api.get(`/offer/applications/${id}`);
  };

  getOffers = () => {
    return this.api.get("/offer");
  };
  getOffersUsers = () => {
    return this.api.get("/offer/all");
  };

  getApplicationsByUser = () => {
    return this.api.get("/users/myapplications");
  };

  getUsers = () => {
    return this.api.get("/users");
  };

  getSingleUser = (id) => {
    return this.api.get(`/users/${id}`);
  };

  createUser = (body) => {
    return this.api.post("/users", body);
  };

  createCompany = (body) => {
    return this.api.post("/company", body);
  };

  createJobApplication = (offerId, companyId) => {
    return this.api.post(`/users/${offerId}/${companyId}`);
  };
}

const apiService = new ApiService();

export default apiService;