import Header from "../../components/header";
import BetterFetch from "../../lib/BetterFetch";
import AddToCart from "../../lib/cart/addtocart";
import { StarIcon } from '@heroicons/react/solid'

const reviews = { href: '#', average: 1 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Detail({ data }) {
  console.log(data)
  return (
    <>
    
      <Header />
      <div className="bg-white">
      <div className="pt-6">
      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      {data.images.map((image) => {
            return (
              <div key={image.id} className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={image.src}
                className="w-full h-full object-center object-cover"
              />
            </div>
            );
          })}

        </div>
        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{data.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900"> €{data.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                </div>
                <p className="sr-only">{data.rating_count} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-teal-500 hover:text-teal-600">
                  {data.rating_count} Stars
                </a>
              </div>
            </div>

            <form className="mt-10">

              <button onClick={() => AddToCart(data)} className="mt-10 w-full bg-teal-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">add to cart</button>

            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{data.description}</p>
              </div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{data.upsell_ids}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </>
  );
}

Detail.getInitialProps = async ({ query }) => {
  const data = await BetterFetch(`/api/products/view/${query.product}`)
  return { data };
};

export default Detail;
