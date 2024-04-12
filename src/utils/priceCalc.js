function priceReducer(arr = []) {
  const price = arr.reduce((acc, curr) => acc + curr.price * curr?.quantity, 0);
  return price;
}

export default priceReducer;
