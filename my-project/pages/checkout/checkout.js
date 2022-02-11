import Header from "../../components/header";
import GetCart from "../../lib/cart/GetCart";
import { useState, useEffect } from "react";


function Checkout() {
    const [content, setCartsContent] = useState(0);

    const order = async event => {
        console.log(content)
        event.preventDefault()
        const url = (
            (process.env.NODE_ENV === "production" ? 
              "http://webshop.imaretarded.dev" : "http://localhost:3000") + '/api/order/create');
    
        const res = await fetch(url,
          {
            body: JSON.stringify({
              name: event.target.name.value,
              last_name: event.target.last_name.value,
              address_1: event.target.address_1.value,
              city: event.target.city.value,
              state: event.target.state.value,
              postcode: event.target.postcode.value,
              email: event.target.email.value,
              phone: event.target.phone.value,
              cart: content
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
      }
    

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
            <form onSubmit={order} id="form_checkout">

                <div id="container_checkout">
                    <div className="inner_container_links">
                        <h2 className="titel_overzicht">Winkelwagen</h2>

                        <div className="cartContainer">
                            {content && content.map((products,index) => (
                                <div key={products.id}>
                                    <div className="productInCart">{products.name} 1x <br></br> Euro: {products.price} </div>
                                    
                                    <input type="hidden" name="product" value={products.id} />
                                </div>
                            ))
                            }
                            <div className="total_price">Totale Prijs: $00,00</div>
                        </div>
                    </div>

                    <div className="form_container">
                        <h2 className="titel_overzicht">Informatie</h2>
                        <div className="form_innerContainer">
                            {
                                // content && content.map((products)=>(<input type="hidden" value={product.id}/>))
                            }
                            <input type="text" placeholder="naam" name="name" id="" />
                            <input type="text" placeholder="achternaam" name="last_name" id="" />
                            <br></br>
                            <input type="text" placeholder="E-mail" name="email" id="" />
                            <input type="text" placeholder="postcode" name="postcode" id="" />
                            <br></br>
                            <input type="text" placeholder="stad" name="city" id="" />
                            <input type="text" placeholder="state" name="state" id="" />
                            <br></br>
                            <input type="text" placeholder="straat" name="address_1" id="" />
                            <input type="number" placeholder="huisnummer" name="number" id="" />
                            <br></br>
                            <input type="phone" placeholder="phone number" name="phone" id="" />
                            <input id="bestel_knop" type="submit" value="Bestellen" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Checkout;