import Header from "../../components/header"

function Cart(){
    console.log(GetCart())
    return(
        <>
        <Header/>
        a
        
        </>
    )
}

function GetCart(){
    return JSON.parse(localStorage.getItem("cart"))
}
export default Cart