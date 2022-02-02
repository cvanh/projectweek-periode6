import Image from 'next/image'
import { useRouter } from 'next/router'
import Header from '../../components/header'

function Detail({data}){
    return(
        <>
        <Header/>
        {console.log(data)}
        <h1>details</h1>

        {/* TODO ples use next/image */}
        <img src={data.images[0].src}/>
        <p>{data.name}</p>
        </>
    )
}

Detail.getInitialProps = async ({query}) => {
    const res = await fetch(`http://webshop.imaretarded.dev/api/products/view/${query.product}`)
    const data = await res.json()
    return { data }
  }

  export default Detail