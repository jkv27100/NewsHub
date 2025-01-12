import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

class DataService {
  static get(path = "") {
    return client({
      method: "GET",
      url: path,
    });
  }

  static post(
    path = "",
    data = {},
    optionalHeader = {},
    responseType = "json"
  ) {
    return client({
      method: "POST",
      url: path,
      data,
      headers: { ...optionalHeader },
      responseType,
    });
  }

  static patch(path = "", data = {}) {
    return client({
      method: "PATCH",
      url: path,
      data: JSON.stringify(data),
    });
  }

  static put(path = "", data = {}) {
    return client({
      method: "PUT",
      url: path,
      data: JSON.stringify(data),
    });
  }

  static delete(path = "", data = {}) {
    return client({
      method: "DELETE",
      url: path,
      data: JSON.stringify(data),
    });
  }
}

export default DataService;
