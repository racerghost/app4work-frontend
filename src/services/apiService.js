import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5005",
    });
  }

  login = ({email, password}) => {
    return this.api.post("/auth/login", { email,password });
  }

  getUsers = () => {
    return this.api.get("/users");
  };

  getSingleUser = (id) => {
    return this.api.get(`/users/${id}`);
  };

  createUser = (body) => {
    return this.api.post("/users", body);
  };
}

const apiService = new ApiService();

export default apiService;