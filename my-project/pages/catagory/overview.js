import CatagoryCard from "../../components/CatagoryCard";
import Header from "../../components/header";
import Link from "next/link";

function Overview({ data }) {
  return (
    <>
      {console.log(data[0].image.src)}
      <Header />
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {data.map((catagory) => (
                        <Link key={catagory.id} href={`/catagory/detail/${catagory.id}`} >
                          <div className="group">
                          {console.log(catagory)}
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={data[1].image.src}
                                    alt={catagory.id}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{catagory.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">€{catagory.price}</p>
                            </div>
                        </Link>
                    )
                )}
            </div>
    </>
  );
}

Overview.getInitialProps = async (ctx) => {
  const url =
    (process.env.NODE_ENV === "production"
      ? "http://webshop.imaretarded.dev"
      : "http://localhost:3000") + "/api/category/overview";
  const res = await fetch(url);
  const data = await res.json();
  return { data };
};

export default Overview;
