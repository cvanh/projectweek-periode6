// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

import WooCommerce from "../../../lib/woocommerce"


export default async function handler(req, res) {    
    const t = await WooCommerce.get("products");
    // console.log(t.data);
    res.status(200).send(t.data)
}
  