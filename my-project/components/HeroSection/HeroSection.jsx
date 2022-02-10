export default function HeroSection() {
    return (
        <section className="text-gray-600 body-font bg-gray-50">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">Muziek Winkel</h1>
                        <p className="mb-8 leading-relaxed">Perfect music stuff for you!</p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">New Products
                            </button>
                            <button
                                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sale
                            </button>
                        </div>
                    </div>
            </div>
        </section>
    )
}