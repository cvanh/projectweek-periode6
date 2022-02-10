function GetCart(localStorage){
    const data = JSON.parse(localStorage.getItem("cart"))
    return data
}

module.exports = GetCart;