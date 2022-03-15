import Header from "../../../components/header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Overview() {
  const router = useRouter();
  const [result, setResult] = useState(0);

  useEffect(() => {
    function load() {
      fetch(`/api/category/detail/${router.query.detail}`, {
        method: "POST",
        body: JSON.stringify(router.query),
      })
        .then((res) => res.json())
        .then((a) => {
          setResult(a);
          console.log(a);
        });
    }
    load();
  }, []);

  return (
    <>
      <Header />
      <h1>catagory detail:</h1>
      <form className="group" method="GET">
            <input name="slug" placeholder="slug?"/>
            <input type="checkbox" name="stock"/>
            <label htmlFor="stock">stock?</label>
          <input type="submit"/>
        </form>
      {result &&
        result.map((product) => (
          <div key={product.id}>
            {console.log(product)}
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.id}</div>
          </div>
        ))}
    </>
  );
}



export default Overview;
