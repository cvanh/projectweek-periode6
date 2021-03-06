import { SetChache } from "../../../../lib";
import WooCommerce from "../../../../lib/woocommerce"

export default async function handler(req, res) {    
    SetChache(req,res)
    const api = await WooCommerce.get(`products/${req.query.ProductId}`);
    res.status(200).send(api.data)
}
  

