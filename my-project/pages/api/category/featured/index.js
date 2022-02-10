// import { WooCommerce } from "../../../../lib";

// export default async function handler(req, res) {
//     console.log("a")
//     const parameter = {
//         category: 26
//     }
//     const api = await WooCommerce.get("products");
//     console.log(api.data);
//     res.status(200).send(api.data)
// }
import WooCommerce from "../../../../lib/woocommerce"

export default async function handler(req, res) {   
    const api = await WooCommerce.get("products");
    console.log(api.data)
    res.status(200).send(api.data)
}
  