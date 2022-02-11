/**
 * @param {object} FormData 
 * @returns formatted data
 */

function OrderFormParser(FormData){
    
const Parsed = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
      first_name: FormData.name,
      last_name: FormData.last_name,
      address_1: FormData.address_1,
      city: FormData.city,
      state: FormData.state,
      postcode: FormData.postcode,
      country: "nl",
      email: FormData.email,
      phone: FormData.phonenumber
    },
    shipping: {
        first_name: FormData.name,
        last_name: FormData.surname,
        address_1: FormData.street,
        city: FormData.city,
        state: FormData.state,
        postcode: FormData.zip_code,
        country: "nl",
        email: FormData.email,
        phone: FormData.phonenumber
    },
    line_items: RenderItems(FormData.cart),
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "10.00"
      }
    ]
  };

    return Parsed
}
module.exports = OrderFormParser;

function RenderItems(cart){
    let data = []
    cart.forEach(prodcuct => {
        data.push({
            product_id: prodcuct.id,
            quantity: 1
        })
    });
    return data
}

// {
//   name: 'naam',
//   last_name: 'naam',
//   address_1: 'naam',
//   cart: [
//     { id: 53, name: 'ramelaar lang' },
//     { id: 53, name: 'ramelaar lang' },
//     { id: 53, name: 'ramelaar lang' },
//     { id: 51, name: 'ramelaar' },
//     { id: 61, name: 'drums' },
//     { id: 61, name: 'drums' },
//     { id: 61, name: 'drums' },
//     { id: 76, name: 'Pioneer XDJ-RR' }
//   ]
// }

// const data = {
//     payment_method: "bacs",
//     payment_method_title: "Direct Bank Transfer",
//     set_paid: true,
//     billing: {
//       first_name: FormData.name,
//       last_name: FormData.surname,
//       address_1: FormData.street,
//       city: FormData.city,
//       state: FormData.state,
//       postcode: FormData.zip_code,
//       country: "nl",
//       email: FormData.email,
//       phone: FormData.phonenumber
//     },
//     shipping: {
//         first_name: FormData.name,
//         last_name: FormData.surname,
//         address_1: FormData.street,
//         city: FormData.city,
//         state: FormData.state,
//         postcode: FormData.zip_code,
//         country: "nl",
//         email: FormData.email,
//         phone: FormData.phonenumber
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