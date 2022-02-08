import Header from "../../components/header";
import GetCart from "../../lib/cart/GetCart";
import { useEffect } from "react";

function Checkout({ data }) {
    useEffect(() => {
        // Perform localStorage action
        console.log(GetCart(localStorage))
      }, [])
      
    return (
        <>
            <Header />
            <div id="container_checkout">

                <div className="inner_container_links">
                    <h2 className="titel_overzicht">Winkelwagen</h2>
                </div>
                <form id="form_checkout">
                    <input type="text" placeholder="naam" name="name" id="" />
                    <input type="text" placeholder="achternaam" name="surname" id="" />
                    <input type="text" placeholder="E-mail" name="email" id="" />
                    <input type="text" placeholder="postcode" name="zip-code" id="" />
                    <input type="text" placeholder="stad" name="city" id="" />
                    <input type="text" placeholder="straat" name="street" id="" />
                    <input type="number" placeholder="huisnummer" name="number" id="" />
                </form>
            </div>
        </>
    );
}



//   Detail.getInitialProps = async ({ query }) => {
//     const res = await fetch(
//       (process.env.NODE_ENV === "production" ?
//         "http://webshop.imaretarded.dev" : "http://localhost:3000") + `/api/products/view/${query.product}`
//     )
//     const data = await res.json();
//     console.log(data)
//     return { data };
//   };

export default Checkout;