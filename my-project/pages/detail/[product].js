import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/header";
const cookie = require("cookie-cutter");

function Detail({ data }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <h1>details</h1>
      <button
        onClick={() => router.back()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        go back
      </button>
      <button
        onClick={() => AddToCart(data)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        add to cart
      </button>
      {data.images.map((image) => {
        return (
          <Image
            width="200px"
            height="200px"
            alt="alt"
            key={image.alt}
            src={image.src}
          />
        );
      })}
      <p>{data.name}</p>
    </>
  );
}

function AddToCart(product) {
  console.log(product);
  let cart = JSON.parse(localStorage.getItem("cart") ?? "[]")
  const data = {
    "id": product.id,
    "name": product.name
  }
  cart.push(data)
  localStorage.setItem("cart",JSON.stringify(cart))
}

Detail.getInitialProps = async ({ query }) => {
  const res = await fetch(
    (process.env.NODE_ENV === "production"
      ? "http://webshop.imaretarded.dev"
      : "http://localhost:3000") + `/api/products/view/${query.product}`
  );
  const data = await res.json();
  console.log(data);
  return { data };
};

export default Detail;
