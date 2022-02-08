const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// require("dotenv").config()

console.assert(process.env.url,'.env not loaded you will get errors')
console.log(process.env.url)

const WooCommerce = new WooCommerceRestApi({
    url: process.env.url,
    consumerKey: process.env.consumerKey,
    consumerSecret: process.env.consumerSecret,
    version: 'wc/v3',
    queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
  });

export default WooCommerce;