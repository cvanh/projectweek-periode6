import { SetChache } from "../../../../lib";
import WooCommerce from "../../../../lib/woocommerce"

export default async function handler(req, res) {    
    // console.log("Aaa")
    const parameter = {
        min_price: 10,
        category: 24
    }
    const api = await WooCommerce.get(`products`,parameter);
    // const api = await WooCommerce.get("products");
    res.status(200).json(api.data)
}
  
// export default function handler(req, res) {
//     res.status(200).json({ name: 'oi piss off' })
//   }
  