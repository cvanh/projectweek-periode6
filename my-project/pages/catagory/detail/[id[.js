import Header from "../../../components/header";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

function Overview({query}) {
  const router = useRouter()
  const [result, setResult] = useState(0);
  useEffect(() => {
      fetch(`/api/category/detail?category=${router.query.id}`)
        .then((res) => res.json())
        .then((a) => {
          console.log(a)
          setResult(a);
        });
  }, []);

  return (
    <>
      <Header />
      <h1>catagory detail:</h1>
      {/* <form>
          <input type="submit"/>
        </form> */}

      {console.log(result)}
      {result && result.map((product) => (
        <div key={product.id}>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.id}</div>
        </div>
      ))}
    </>
  );
}

export default Overview;
