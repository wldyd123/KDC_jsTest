const API_ENDPOINT = "http://localhost:4001";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  fetchCatDetail: (id) => {
    return fetch(`${API_ENDPOINT}/api/cat/${id}`).then((res) => res.json());
  },
};
