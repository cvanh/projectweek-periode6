import { SetChache } from "../../../../lib";
import WooCommerce from "../../../../lib/woocommerce"

export default async function handler(req, res) {    
    console.log("Aaa")
    const parameter = {
        min_price: 10
    }
    const api = await WooCommerce.get(`
    products?category=${req.query.id}`
    );
    res.status(200).json(api.data)
}
  