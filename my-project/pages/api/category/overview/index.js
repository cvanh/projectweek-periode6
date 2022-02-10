import { SetChache } from "../../../../lib";
import WooCommerce from "../../../../lib/woocommerce"

export default async function handler(req, res) {   
    const api = await WooCommerce.get("products/categories");
    res.status(200).send(api.data)
}
  