import Header from "../components/header";
import Link from 'next/link';

export default function Home({ data }) {
  return (
    <>
      <Header />
      <div className="container mx-auto bg-orange-500">
        <h1>Test</h1>
        {data.map((product) => {
          return (
            <Link href={`/detail/${product.id}`}>
              <div>
                <h1>{product.name}</h1>
                <p>{product.id}</p>
                </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const url = (
    (process.env.NODE_ENV === "production" ? 
      "http://webshop.imaretarded.dev" : "http://localhost:3000") + "/api/products/get")  
  const res = await fetch(url)
  const data = await res.json();
  return { data };
};
