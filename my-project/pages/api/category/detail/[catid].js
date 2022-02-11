import WooCommerce from "../../../../lib/woocommerce"

export default async function handler(req, res) {
    console.log(req.query);
    console.log(req.body);
    if(!req.query.catid){res.status(200).send("no catagory id")}

    const parameter = {
        category: parseInt(req.query.catid ),
        min_price: req.body.min_price,
        max_price: req.body.max_price,
        stock_status: req.body.stock_status,
        slug: req.body.slug
    }
    const api = await WooCommerce.get(`products`,parameter);
    res.status(200).json(api.data)
}