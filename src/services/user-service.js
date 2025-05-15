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
      throw new Error(
        `Erro ao listar usuários: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  }

  async get(id) {
    try {
      const response = await this.api.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao buscar usuário: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  }

  async create(data) {
    try {
      const response = await this.api.post("/user", data);
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao criar usuário: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  }

  async delete(email) {
    try {
      const response = await this.api.delete(`/user?email=${email}`);
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao deletar usuário: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  }

  async update(email, data) {
    try {
      const response = await this.api.put(`/user?email=${email}`, data);
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao atualizar usuário: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  }

  async updatePartial(email, data) {
    try {
      const response = await this.api.patch(`/user?email=${email}`, data);
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao atualizar parcialmente usuário: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  }
}

export default UserService;
