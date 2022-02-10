async function BetterFetch(uri){
    const url = (
        (process.env.NODE_ENV === "production" ? 
          "http://webshop.imaretarded.dev" : "http://localhost:3000") + uri);
      const raw = await fetch(url)
      const data = await raw.json();
      return data
}
module.exports = BetterFetch;