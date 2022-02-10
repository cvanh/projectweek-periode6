import Header from "../../../components/header";
import Link from "next/link";

function Overview({ data,query }) {
  return (
    <>
      <Header />
      <h1>catagory detail</h1>
    </>
  );
}

// Overview.getInitialProps = async (ctx) => {
//   const url =
//     (process.env.NODE_ENV === "production"
//       ? "http://webshop.imaretarded.dev"
//       : "http://localhost:3000") + "/api/category/overview";
//   const res = await fetch(url);
//   const data = await res.json();
//   return { data };
// };

export default Overview;
