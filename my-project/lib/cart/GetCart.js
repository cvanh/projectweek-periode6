function GetCart(localStorage){
    const data = (localStorage.getItem("cart"))
    return data
}

module.exports = GetCart;