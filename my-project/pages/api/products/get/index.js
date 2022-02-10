import { SetChache } from "../../../../lib";
import WooCommerce from "../../../../lib/woocommerce"

export default async function handler(req, res) {  
    // SetChache(req,res)
    const api = await WooCommerce.get("products");
    res.status(200).json(api.data)
}
  