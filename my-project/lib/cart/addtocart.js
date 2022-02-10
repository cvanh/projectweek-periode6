function AddToCart(product) {
  console.log(product);
  let cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const data = {
    id: product.id,
    name: product.name,
  };
  cart.push(data);
  localStorage.setItem("cart", JSON.stringify(cart));
}
module.exports = AddToCart;