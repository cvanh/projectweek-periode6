import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Cookie = Math.random() * 10;
  return <Component Cookies={Cookie} {...pageProps} />
}

export default MyApp
