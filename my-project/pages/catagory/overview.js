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
            <CatagoryCard/>
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
