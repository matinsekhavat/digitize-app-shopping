import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://digitize-api.liara.run/",
});

async function getProduct({ queryKey }) {
  const selectedCategory = queryKey[1];

  const res = await instanceAxios.get(`${selectedCategory}`);

  return res.data;
}

async function getSingleProduct({ queryKey }) {
  const selectedCategory = queryKey[1];
  const selectedId = queryKey[2];

  const res = await instanceAxios.get(`${selectedCategory}/${selectedId}`);

  return res.data;
}

export { getProduct, getSingleProduct };
