import { SetChache } from "../../../../lib";
import WooCommerce from "../../../../lib/woocommerce"

export default async function handler(req, res) {    
    // console.log("Aaa")
    const parameter = {
        category: req.query.catagoryid
    }
    const api = await WooCommerce.get(`products`,parameter);
    res.status(200).json(api.data)
}