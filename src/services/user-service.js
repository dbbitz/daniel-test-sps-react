import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Interceptor para adicionar o token em todas as requisições
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async list() {
    try {
      const response = await this.api.get("/user");
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Erro ao listar usuários");
    }
  }

  async get(id) {
    try {
      const response = await this.api.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Erro ao buscar usuário");
       
    }
  }

  async create(data) {
    try {
      const response = await this.api.post("/user", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Erro ao criar usuário");
    }
  }

  async delete(email) {
    try {
      const response = await this.api.delete(`/user?email=${email}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Erro ao deletar usuário");
    }
  }

  async update(email, data) {
    try {
      const response = await this.api.put(`/user?email=${email}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Erro ao atualizar usuário");
    }
  }

  async updatePartial(email, data) {
    try {
      const response = await this.api.patch(`/user?email=${email}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Erro ao atualizar parcialmente usuário");
    }
  }
}

export default UserService;
