import Header from "../../../components/header";
import Link from "next/link";
import { useState,useEffect } from "react";

function Overview() {
  const [result, setResult] = useState(0);
  useEffect(() => {
    fetch("/api/category/detail/20")
      .then(res => res.json())
      .then(
        (result) => {
          setResult(result);
        })
  }, [])
  
  return (
    <>
      <Header />
      <h1>catagory detail</h1>
      {console.log(result)}
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
