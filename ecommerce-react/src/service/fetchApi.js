import api from "./api";

const fetchApi = async (route) => {
  try {
    const headerWithAuth = await getHeadersWithAuth();
    const response = await api.get(route, headerWithAuth);
    console.log("Dados da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }
};

const getHeadersWithAuth = async () => {
  try {
    const loginPayload = { email: "guilherme@email.com", senha: "senhaForte" };
    const loginResponse = await api.post("/login", loginPayload);
    const headers = { headers: { Authorization: loginResponse.data.token } };
    return headers;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

export default fetchApi;
