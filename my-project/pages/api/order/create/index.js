import WooCommerce from "../../../../lib/woocommerce"
import OrderFormParser from "../../../../utils/OrderFormParser"

export default async function handler(req, res) {
    if(req.method != "POST"){res.status(200).send("wrong request type")}
    console.log(req.body)

    // const data = {
    //     payment_method: "bacs",
    //     payment_method_title: "Direct Bank Transfer",
    //     set_paid: true,
    //     billing: {
    //       first_name: req.body.name,
    //       last_name: req.body.surname,
    //       address_1: req.body.street,
    //       city: req.body.city,
    //       state: req.body.state,
    //       postcode: req.body.zip_code,
    //       country: "nl",
    //       email: req.body.email,
    //       phone: req.body.phonenumber
    //     },
    //     shipping: {
    //         first_name: req.body.name,
    //         last_name: req.body.surname,
    //         address_1: req.body.street,
    //         city: req.body.city,
    //         state: req.body.state,
    //         postcode: req.body.zip_code,
    //         country: "nl",
    //         email: req.body.email,
    //         phone: req.body.phonenumber
    //     },
    //     line_items: [
    //       {
    //         product_id: 93,
    //         quantity: 2
    //       },
    //       {
    //         product_id: 22,
    //         variation_id: 23,
    //         quantity: 1
    //       }
    //     ],
    //     shipping_lines: [
    //       {
    //         method_id: "flat_rate",
    //         method_title: "Flat Rate",
    //         total: "10.00"
    //       }
    //     ]
    //   };
    const data = OrderFormParser(req.body)
    console.log(data)
    // await WooCommerce.post("orders",data);
    res.status(200).send()
}
  