import Header from "../components/header";
import Link from 'next/link';
import BetterFetch from "../lib/BetterFetch";
import FeatureSections from "../components/FeatureSections";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

// thy lord i have sinned  - signed cvanh
Home.getInitialProps = async ({ res, req }) => {
  const category = await BetterFetch('/api/category/overview')
  const featured = await BetterFetch('/api/category/detail/26') // the featured catagory
  const data = {
    'category': category,
    'featured': featured
  }
  console.log(data)
  return { data }
};

export default function Home({ data }) {
  return (
    <>
      <Header />
      <HeroSection />


      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Products
            </p>
          </div>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 mt-10 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.featured.map((product) => {
              return (
                <Link key={product.id} href={`/detail/${product.id}`} >
                  <div className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      {product.images.map((image) => (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      ))}
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">€{product.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="lg:text-center">
            <p className="mt-10  text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Category's
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.category.map((category) => {
              return (
                <Link key={category.id} href={`/detail/${category.id}`} >
                  <div className="group text-center bg-gray-50 rounded-md">
                    <h3 className="m-4 text-sm text-gray-700">{category.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <FeatureSections />
      <Footer />
    </>
  );
}

