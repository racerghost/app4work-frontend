import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5005",
    });
  }

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
}

const apiService = new ApiService();

export default apiService;