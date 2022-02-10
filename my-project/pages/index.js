import Header from "../components/header";
import Link from 'next/link';

export default function Home({ Cookies,data }) {
  return (
    <>
    {console.log(Cookies)}
      <Header />


    <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {data.map((product) => {
                    console.log(product.images.src);
                    return (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                {product.src}
                                {product.images.map((image)=>(
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    />
                                ))}
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">€{product.price}</p>
                        </a>
                    );
                })}
            </div>
        </div>
    </div>

    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const url = (
    (process.env.NODE_ENV === "production" ? 
      "http://webshop.imaretarded.dev" : "http://localhost:3000") + "/api/products/get")  
  const res = await fetch(url)
  const data = await res.json();
  return { data };
};