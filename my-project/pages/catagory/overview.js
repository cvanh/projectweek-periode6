import CatagoryCard from "../../components/CatagoryCard";
import Header from "../../components/header";

function Overview({ data }) {
  let count = 0;
  return (
    <>
      {console.log(data)}
      <Header />
      <div class="p-10">
        {data.map((i)=>{
          return(
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Mountain</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
          )
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
