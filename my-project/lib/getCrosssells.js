import BetterFetch from "./BetterFetch";

export async function getCrosssells(data){
    let a = []
    data.forEach(i => {
        const b = BetterFetch(`/api/products/view/${i.id}`)
        // console.log(b)
        a.push({b})
    });
    return a
}
