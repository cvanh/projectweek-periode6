import Header from "../../components/header";
import GetCart from "../../lib/cart/GetCart";
import { useState, useEffect } from "react";

function Checkout() {
    const [content, setCartsContent] = useState(0);
    useEffect(() => {
        function GetCartContents() {
            const CartContents = GetCart(localStorage)
            setCartsContent(CartContents)
        }
        GetCartContents()
    }, [])
    return (
        <>
            <Header />
            <div id="container_checkout">
                <div className="inner_container_links">
                    <h2 className="titel_overzicht">Winkelwagen</h2>

                    <div className="cartContainer">
                        {content && content.map(products => (<div className="productInCart">{products.name} <br></br>Price: {products.price} </div>))
                        
                        }
                        <div className="total_price">Totale Prijs: $00,00</div>
                    </div>
                </div>

                <div className="form_container">
                    <h2 className="titel_overzicht">Informatie</h2>
                    <div className="form_innerContainer">
                        <form method="post" action="/api/order/create" id="form_checkout">
                            <input type="text" placeholder="naam" name="name" id="" />
                            <input type="text" placeholder="achternaam" name="surname" id="" />
                            <br></br>
                            <input type="text" placeholder="E-mail" name="email" id="" />
                            <input type="text" placeholder="postcode" name="zip_code" id="" />
                            <br></br>
                            <input type="text" placeholder="stad" name="city" id="" />
                            <input type="text" placeholder="state" name="state" id="" />
                            <br></br>
                            <input type="text" placeholder="straat" name="street" id="" />
                            <input type="number" placeholder="huisnummer" name="number" id="" />
                            <br></br>
                            <input type="phone" placeholder="phone number" name="phonenumber" id="" />
                            <input id="bestel_knop" type="submit" value="Bestellen" />
                        </form>
                    </div>
                </div>
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