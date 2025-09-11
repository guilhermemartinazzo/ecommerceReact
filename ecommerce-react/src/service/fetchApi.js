import api from "./api";

const fetchApi = async (route) => {
  try {
    const loginn = await login("guilherme@email.com", "senhaForte");
    const response = await api.get(route, {
      headers: { Authorization: loginn.data.token },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }
};

const login = async (email, pw) => {
  try {
    // guilherme@email.com
    // senhaForte
    const loginPayload = { email: email, senha: pw };
    return await api.post("/login", loginPayload);
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

export { fetchApi, login };
