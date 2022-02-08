function GetCart(){
    return JSON.parse(localStorage.getItem("cart"))
}

module.exports = GetCart;