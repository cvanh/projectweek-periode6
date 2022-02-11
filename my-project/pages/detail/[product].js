import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/header";
import BetterFetch from "../../lib/BetterFetch";
import AddToCart from "../../lib/cart/addtocart";



// const cookie = require("cookie-cutter");

function Detail({ data }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <h1 className="detail_titel">Informatie over product</h1>

      <div id="detail_container">


        <div className="image_container">
          {data.images.map((image) => {
            return (
              <Image
                width="400px"
                height="400px"
                alt="alt"
                key={image.alt}
                src={image.src}
              />
            );
          })}

          <p>Prijs: €{data.price}</p>
          <p>{data.stock_status}</p>
        </div>


        <div className="product_info">

          <h2 className="productInfo_titel">{data.name}</h2>

          <p>{data.description}</p>
          <button onClick={() => AddToCart(data)} className="addToCartBTN bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add to cart</button>
        </div>


      </div>
    </>
  );
}

Detail.getInitialProps = async ({ query }) => {
  const data = await BetterFetch(`/api/products/view/${query.product}`)
  return { data };
};

export default Detail;
