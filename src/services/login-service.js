import axios from "axios";

class LoginService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async login(email, password) {
    try {
      const response = await this.api.post("/auth/login", { email, password });

      // Armazena o token no localStorage
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
      }

      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao fazer login: ${error.response?.data?.error || error.message}`
      );
    }
  }

  async verifyToken() {
    try {
      const response = await this.api.get("/auth/verify");
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao verificar token: ${
          error.response?.data?.error || error.message
        }`
      );
    }
  }

  logout() {
    localStorage.removeItem("token");
  }
}

export default LoginService;
