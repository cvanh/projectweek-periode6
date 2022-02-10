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

          <p>Prijs:{data.price}</p>
        </div>


        <div className="product_info">

          <h2 className="productInfo_titel">{data.name}</h2>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
