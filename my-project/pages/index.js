import Header from "../components/header"
// import WooCommerce from "../lib/woocommerce"

export default function Home({data}) {
  // const data = WooCommerce.get("products")
  return (
    <>
    <Header/>
      <div className="container mx-auto bg-orange-500">
          <h1>Test</h1>
          {data.map((product)=>{
            return(
              <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.id}</p>
              </div>
            )
          })}
      </div>
      </>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://webshop.imaretarded.dev/api/products/get')
  const data = await res.json()
  return { data }
}