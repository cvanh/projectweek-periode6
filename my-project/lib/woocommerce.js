const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: 'https://justinberghahn.nl/projectweek',
    consumerKey: 'ck_a3f651505f501d08a9161fbd94d983c34d0c29da',
    consumerSecret: 'cs_508b1ae5f9d58333743eb93895b9c5c5b3bbe410',
    version: 'wc/v3',
    queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
  });

export default WooCommerce;