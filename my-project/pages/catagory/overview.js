import Header from "../../components/header"

function Overview(){
    return(<>
    <Header/>
    </>)
}

Overview.getInitialProps = async (ctx) => {
    const url = (
      (process.env.NODE_ENV === "production" ? 
        "http://webshop.imaretarded.dev" : "http://localhost:3000") + "/api/products/get")  
    const res = await fetch(url)
    const data = await res.json();
    return { data };
  };

export default Overview