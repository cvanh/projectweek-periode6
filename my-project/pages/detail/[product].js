import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/header";
import BetterFetch from "../../lib/BetterFetch";
import AddToCart from "../../lib/cart/addtocart";
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'

const reviews = { href: '#', average: 1 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


// const cookie = require("cookie-cutter");

function Detail({ data }) {
  const router = useRouter();
  return (
    <>
    
      <Header />
      <div className="bg-white">
      <div className="pt-6">
      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      {data.images.map((image) => {
            return (
              <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
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
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{data.rating_count} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-teal-500 hover:text-teal-600">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">

              <button onClick={() => AddToCart(data)} className="mt-10 w-full bg-teal-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">add to cart</button>

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
