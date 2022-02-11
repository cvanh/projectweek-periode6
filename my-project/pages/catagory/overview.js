import CatagoryCard from "../../components/CatagoryCard";
import Header from "../../components/header";
import Link from "next/link";

function Overview({ data }) {
  return (
    <>
      {console.log(data[0].image.src)}
      <Header />

      <div className="grid grid-cols-1 mt-10 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((category) => {
              return (
                <Link key={category.id} href={`./catagory/detail/${category.id}`} >
                <div className="grid grid-cols-1 mt-10 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {console.log(category)}
                    <h3 className="mt-4 text-sm text-gray-700">{category.name}</h3>
                  </div>
                </Link>
              );
            })}
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
